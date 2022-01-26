import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputDefault } from "./InputDefault";
import { InputCpf } from "./InputCpf";
import { InputEmail } from "./InputEmail";
import { ModalSetPassword } from "../modals/ModalSetPassword";

const objDefaultFieldsNull = {
  name: null,
  rg: null,
  cpf: null,
  birthDate: null,
  email: null,
  password: null,
};

export function FormMyAccount() {
  const [showValidations, setShowValidations] = useState(false);
  const [defaultFields, setDefaultFields] = useState(objDefaultFieldsNull);
  const [fields, setFields] = useState(objDefaultFieldsNull);
  const [isEdit, setIsEdit] = useState(false);
  const [showModalSetPassword, setShowModalSetPassword] = useState(false);

  const handleCancelEdit = () => {
    setIsEdit(false);
    setShowValidations(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm()) {
      alert("sucesso");
      //chamar action/api
    }
  };

  const validateForm = () => {
    if (Object.values(fields).some((field) => field === null)) {
      return false;
    }
    return true;
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
            defaultValue={defaultFields.name}
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
            defaultValue={defaultFields.rg}
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
            defaultValue={defaultFields.cpf}
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
            defaultValue={defaultFields.birthDate}
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
            defaultValue={defaultFields.email}
            handleFieldChange={(value) => {
              setFields({
                ...fields,
                ["email"]: value,
              });
            }}
            disabled={!isEdit}
          />
          <input
            type="button"
            value={"Alterar Senha"}
            className="btn btn-primary mx-3 w-auto"
            onClick={() => {
              setShowModalSetPassword(true);
            }}
          />
        </Row>
        {isEdit ? (
          <Form.Group className="mb-3">
            <input
              type="button"
              value={"Cancelar"}
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            />
            <input
              type="submit"
              value={"Salvar"}
              className="btn btn-primary mx-3"
            />
          </Form.Group>
        ) : (
          <Form.Group className="mb-3">
            <Link to={"/"} className="btn btn-secondary">
              Voltar
            </Link>
            <input
              type="button"
              value={"Editar"}
              className="btn btn-primary mx-3"
              onClick={() => {
                setIsEdit(true);
              }}
            />
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
