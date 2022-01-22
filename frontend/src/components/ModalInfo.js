import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { clearModalInfo } from "../store/actions/modalInfo.actions";

export function ModalInfo({ content }) {
  const [modalOpen, setModalOpen] = useState(true);
  const dispatch = useDispatch();
  const { info, isGetPurchase } = content;

  const handleClose = () => {
    setModalOpen(false);
    dispatch(clearModalInfo());
  };

  return (
    <Modal show={modalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className={isGetPurchase ? "text-primary" : "text-warning"}>
            Sucesso
          </span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>{info}</h5>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="button"
          onClick={handleClose}
          className={`btn ${isGetPurchase ? "btn-primary" : "btn-warning"}`}
        >
          Entendi
        </button>
      </Modal.Footer>
    </Modal>
  );
}
