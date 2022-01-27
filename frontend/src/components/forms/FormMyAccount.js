import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputCpf } from "./InputCpf";
import { InputEmail } from "./InputEmail";
import { ModalSetPassword } from "../modals/ModalSetPassword";
import { updateClientData } from "../../store/actions/clientData.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { validateForm } from "../../helpers/validateForm";

export function FormMyAccount() {
  const objDefaultFields = useSelector((state) => state.clientData);
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFields);
  const [isEdit, setIsEdit] = useState(false);
  const [showModalSetPassword, setShowModalSetPassword] = useState(false);
  const dispatch = useDispatch();

  const handleCancelEdit = () => {
    setIsEdit(false);
    setShowValidations((prev) => (prev === false ? null : false));
  };

  const handleEdit = () => {
    setIsEdit(true);
    setShowValidations(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm(fields)) {
      //chamar action/api
      dispatch(updateClientData(fields));
      dispatch(updateModalInfo("Dados atualizados com sucesso!!", true));
      handleCancelEdit();
    }
  };

  return (
    <>
      <Form
        noValidate
        onSubmit={handleSubmit}
        className="col-10 offset-1 col-md-6 offset-md-3"
      >
        <Row className="my-3">
          <InputDefault
            name={"Nome"}
            type={"text"}
            maxLength={50}
            defaultClass={"col-md-12"}
            showValidations={showValidations}
            defaultValue={objDefaultFields.name}
            handleFieldChange={(value) => {
              setFields({
                ...fields,
                ["name"]: value,
              });
            }}
            disabled={!isEdit}
          />
          <InputDefault
            name={"RG"}
            type={"text"}
            maxLength={10}
            defaultClass={"col-md-6"}
            showValidations={showValidations}
            defaultValue={objDefaultFields.rg}
            handleFieldChange={(value) => {
              setFields({
                ...fields,
                ["rg"]: value,
              });
            }}
            disabled={!isEdit}
          />
          <InputCpf
            showValidations={showValidations}
            defaultValue={objDefaultFields.cpf}
            handleFieldChange={(value) => {
              setFields({
                ...fields,
                ["cpf"]: value,
              });
            }}
            disabled={!isEdit}
          />
          <InputDefault
            name={"Data de Nascimento"}
            type={"date"}
            maxLength={null}
            defaultClass={"col-md-6"}
            showValidations={showValidations}
            defaultValue={objDefaultFields.birthDate}
            handleFieldChange={(value) => {
              setFields({
                ...fields,
                ["birthDate"]: value,
              });
            }}
            disabled={!isEdit}
          />
          <InputEmail
            showValidations={showValidations}
            defaultValue={objDefaultFields.email}
            handleFieldChange={(value) => {
              setFields({
                ...fields,
                ["email"]: value,
              });
            }}
            disabled={true}
          />
          <Form.Group className="my-2 col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setShowModalSetPassword(true);
              }}
            >
              Alterar Senha
            </button>
          </Form.Group>
        </Row>
        {isEdit ? (
          <Form.Group className="mb-3 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginRight: "5px" }}
              onClick={handleCancelEdit}
            >
              Cancelar
            </button>
            <input
              type="submit"
              value={"Salvar"}
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
            />
          </Form.Group>
        ) : (
          <Form.Group className="mb-3 d-flex justify-content-center">
            <Link
              to={"/"}
              className="btn btn-secondary"
              style={{ marginRight: "5px" }}
            >
              Voltar
            </Link>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
              onClick={handleEdit}
            >
              Editar
            </button>
          </Form.Group>
        )}
      </Form>
      {showModalSetPassword && (
        <ModalSetPassword
          showModal={(show) => {
            setShowModalSetPassword(show);
          }}
        />
      )}
    </>
  );
}
