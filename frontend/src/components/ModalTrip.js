import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  deletePurchase,
  getPurchase,
} from "../store/actions/myPurchases.actions";
import { getMyTrip } from "../store/actions/myTrips.actions";
import { clearModalTripContent } from "../store/actions/modalTripContent.actions";
import { updateModalInfo } from "../store/actions/modalInfo.actions";
import css from "./modalTrip.module.css";

Modal.setAppElement("#root");

export function ModalTrip({ content }) {
  const [modalOpen, setModalOpen] = useState(true);
  const { trip, destination, offer, isGetPurchase, purchase } = content;
  const { defaultValue, departure, arrival } = trip;
  const { city, uf, landingPlace } = destination;
  const { discount, expiration } =
    offer === undefined
      ? {
          discount: "-",
          expiration: "-",
        }
      : offer;
  const dispatch = useDispatch();

  const handleGetPurchase = () => {
    dispatch(getMyTrip(Object.assign({}, trip)));
    dispatch(getPurchase(trip.id, offer === undefined ? null : offer.id));
    setModalOpen(false);
    dispatch(clearModalTripContent());
    dispatch(updateModalInfo("Viagem adquirida com sucesso!!"));
  };

  const handleDeletePurchase = () => {
    dispatch(deletePurchase(purchase));
    setModalOpen(false);
    dispatch(clearModalTripContent());
    dispatch(updateModalInfo("Viagem cancelada com sucesso!!"));
  };

  return (
    <Modal isOpen={modalOpen} className={css.modal}>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          setModalOpen(false);
          dispatch(clearModalTripContent());
        }}
      >
        Fechar
      </button>

      <strong>Trip</strong>
      <p className="card-title">defaultValue: {defaultValue}</p>
      <p className="card-text">departure: {departure}</p>
      <p className="card-text">arrival: {arrival}</p>
      <hr />

      <strong>Destination</strong>
      <p>city: {city} - </p>
      <p>uf: {uf} - </p>
      <p>landingPlace: {landingPlace}</p>
      <hr />

      <strong>Offer</strong>
      <p className="card-title">discount: {discount}</p>
      <p className="card-text">expiration: {expiration}</p>

      {isGetPurchase ? (
        <Link
          to={"/Minhas_Viagens"}
          onClick={handleGetPurchase}
          className="btn btn-outline-primary"
        >
          Selecionar
        </Link>
      ) : (
        <button
          type="button"
          onClick={handleDeletePurchase}
          className="btn btn-danger"
        >
          Deletar
        </button>
      )}
    </Modal>
  );
}
