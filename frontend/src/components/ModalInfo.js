import Modal from "react-modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./modalTrip.module.css";
import { clearModalInfo } from "../store/actions/modalInfo.actions";

Modal.setAppElement("#root");

export function ModalInfo({ info }) {
  const [modalOpen, setModalOpen] = useState(true);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={modalOpen} className={css.modal}>
      <p>{info}</p>
      <button
        type="button"
        onClick={() => {
          setModalOpen(false);
          dispatch(clearModalInfo());
        }}
        className="btn btn-primary"
      >
        Entendi
      </button>
    </Modal>
  );
}
