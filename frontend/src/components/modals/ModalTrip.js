import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { ModalAuth } from "./ModalAuth";
import { SpinnerBtn } from "../forms/SpinnerBtn";
// import { deletePurchase } from "../../store/actions/myPurchases.actions";
// import { getMyTrip } from "../../store/actions/myTrips.actions";
import { clearModalTripContent } from "../../store/actions/modalTripContent.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { deletePurchase, postPurchase } from "../../api/api";
import { formatCurrency } from "../../helpers/formatCurrency";

export function ModalTrip({ content }) {
  const [modalOpen, setModalOpen] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const { trip, destination, offer, isGetPurchase, purchase } = content;
  const { defaultValue, departure, arrival } = trip;
  const { city, uf, landingPlace } = destination;
  const { id, discount, expiration } =
    offer === undefined
      ? {
          id: null,
          discount: 0,
          expiration: "-",
        }
      : offer;
  const clientData = useSelector((state) => state.clientData);
  const purchaseToPost = {
    client: {
      id: clientData.id,
      email: clientData.email,
      password: null,
    },
    trip: {
      id: trip.id,
    },
    offer: {
      id: id,
    },
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowAuth(true);
  };

  const handleGetPurchase = (pass) => {
    // dispatch(getMyTrip(Object.assign({}, trip)));
    // dispatch(getPurchase(trip.id, offer === undefined ? null : offer.id));
    setSpinner(true);
    setTimeout(async () => {
      purchaseToPost.client.password = pass;
      const ret = await postPurchase(purchaseToPost);
      if (ret) {
        handleClose();
        dispatch(updateModalInfo("Viagem adquirida com sucesso!!", true));
        //redirecionar minhas page viagens
      } else {
        dispatch(updateModalInfo("Falha na aquisição da viagem!", false));
        setSpinner(false);
      }
    }, 2000);
  };

  const handleDeletePurchase = (pass) => {
    setSpinner(true);
    setTimeout(async () => {
      const purchaseToDelete = {
        purchase: {
          id: purchase,
        },
        client: {
          ...purchaseToPost.client,
          password: pass,
        },
      };
      const ret = await deletePurchase(purchaseToDelete);
      if (ret) {
        // dispatch(deletePurchase(purchase));
        handleClose();
        dispatch(updateModalInfo("Viagem cancelada com sucesso!!", true));
      } else {
        dispatch(updateModalInfo("Falha no cancelamento da viagem!", false));
        setSpinner(false);
      }
    }, 2000);
  };

  const handleClose = () => {
    setModalOpen(false);
    dispatch(clearModalTripContent());
  };

  return (
    <>
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
            // <Link
            //   // to={"/Minhas_Viagens"}
            //   onClick={handleGetPurchase}
            //   className="btn btn-primary"
            // >
            //   Adquirir
            // </Link>
            <Form noValidate onSubmit={handleSubmit}>
              <SpinnerBtn
                value="Adquirir"
                loading={spinner}
                className="btn btn-primary"
                style={{ marginLeft: "5px" }}
              />
            </Form>
          ) : (
            <>
              <Form
                noValidate
                onSubmit={handleSubmit}
                className="me-auto"
              >
                <SpinnerBtn
                  value="Cancelar Viagem"
                  loading={spinner}
                  className="btn btn-danger"
                />
              </Form>

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
      {showAuth && (
        <ModalAuth
          showModal={(show) => {
            setShowAuth(show);
          }}
          passModal={(value) => {
            isGetPurchase
              ? handleGetPurchase(value)
              : handleDeletePurchase(value);
          }}
        />
      )}
    </>
  );
}
