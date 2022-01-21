import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPurchase } from "../store/actions/myPurchases.actions";
import { getMyTrip } from "../store/actions/myTrips.actions";
import { clearModalTripContent } from "../store/actions/modalTripContent.actions";
import css from "./modalTrip.module.css";

Modal.setAppElement("#root");

export function ModalTrip({ content }) {
  const [modalOpen, setModalOpen] = useState(true);
  const { trip, destination, offer } = content;
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

  const handleClick = () => {
    dispatch(getMyTrip(Object.assign({}, trip)));
    dispatch(getPurchase(trip.id, offer === undefined ? null : offer.id));
    setModalOpen(false);
    dispatch(clearModalTripContent());
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

      <Link
        to={"/Minhas_Viagens"}
        onClick={handleClick}
        className="btn btn-outline-primary"
      >
        Selecionar
      </Link>
    </Modal>
  );
}
