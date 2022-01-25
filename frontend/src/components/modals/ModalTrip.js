import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  deletePurchase,
  getPurchase,
} from "../../store/actions/myPurchases.actions";
import { getMyTrip } from "../../store/actions/myTrips.actions";
import { clearModalTripContent } from "../../store/actions/modalTripContent.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { formatCurrency } from "../../helpers/formatCurrency";

export function ModalTrip({ content }) {
  const [modalOpen, setModalOpen] = useState(true);
  const { trip, destination, offer, isGetPurchase, purchase } = content;
  const { defaultValue, departure, arrival } = trip;
  const { city, uf, landingPlace } = destination;
  const { discount, expiration } =
    offer === undefined
      ? {
          discount: 0,
          expiration: "-",
        }
      : offer;
  const dispatch = useDispatch();

  const handleGetPurchase = () => {
    dispatch(getMyTrip(Object.assign({}, trip)));
    dispatch(getPurchase(trip.id, offer === undefined ? null : offer.id));
    handleClose();
    dispatch(updateModalInfo("Viagem adquirida com sucesso!!", true));
  };

  const handleDeletePurchase = () => {
    dispatch(deletePurchase(purchase));
    handleClose();
    dispatch(updateModalInfo("Viagem cancelada com sucesso!!", false));
  };

  const handleClose = () => {
    setModalOpen(false);
    dispatch(clearModalTripContent());
  };

  return (
    <Modal show={modalOpen} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="text-primary">
            {isGetPurchase ? "Adquirir Viagem" : "Detalhes da Viagem"}
          </span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <p>
            <span style={{ fontWeight: "600" }}>Destino: </span>
            {city} - {uf}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Desembarque: </span>
            {landingPlace}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Partida: </span>
            {departure}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Chegada: </span>
            {arrival}
          </p>
        </div>

        <hr />

        <div className="text-end">
          {discount !== 0 && (
            <>
              <p>
                <span style={{ fontWeight: "600" }}>Valor padrão: </span>
                {formatCurrency(defaultValue)}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Desconto: </span>
                {discount * 100}%
              </p>
            </>
          )}
          <p style={{ fontWeight: "600" }}>
            Valor final: {""}
            <span style={{ fontSize: "1.5em" }}>
              {formatCurrency(defaultValue * (1 - discount))}
            </span>
          </p>
          {discount !== 0 && (
            <p>
              <span style={{ fontWeight: "600" }}>Promoção expira em: </span>
              {expiration}
            </p>
          )}
        </div>
      </Modal.Body>

      <Modal.Footer>
        {isGetPurchase ? (
          <Link
            to={"/Minhas_Viagens"}
            onClick={handleGetPurchase}
            className="btn btn-primary"
          >
            Adquirir
          </Link>
        ) : (
          <>
            <button
              type="button"
              onClick={handleDeletePurchase}
              className="btn btn-danger"
              style={{ marginRight: "auto" }}
            >
              Cancelar Viagem
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="btn btn-primary"
            >
              Fechar
            </button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
