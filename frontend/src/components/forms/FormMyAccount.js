import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputCpf } from "./InputCpf";
import { InputEmail } from "./InputEmail";
import { ModalSetPassword } from "../modals/ModalSetPassword";
import { updateClientData } from "../../store/actions/clientData.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";

let objDefaultFieldsNull = {
  name: null,
  rg: null,
  cpf: null,
  birthDate: null,
  email: null,
};
// let objDefaultFieldsFalse = {
//   name: false,
//   rg: false,
//   cpf: false,
//   birthDate: false,
//   email: false,
// };

export function FormMyAccount() {
  const [showValidations, setShowValidations] = useState(false);
  const [defaultFields, setDefaultFields] = useState(objDefaultFieldsNull);
  // const [defaultFields, setDefaultFields] = useState({});
  const [fields, setFields] = useState(objDefaultFieldsNull);
  const [isEdit, setIsEdit] = useState(false);
  const [showModalSetPassword, setShowModalSetPassword] = useState(false);

  objDefaultFieldsNull = useSelector((state) => state.clientData);
  // const teste = useSelector((state) => state.clientData);
  // useEffect(() => {
  //   setDefaultFields(teste);
  // }, [teste]);

  // objDefaultFieldsFalse = useSelector((state) => state.clientData);
  const dispatch = useDispatch();

  const handleCancelEdit = () => {
    setIsEdit(false);
    setShowValidations((prev) => prev + 1);
    // setOnEdit((prev) => prev + 1);/////
    // DefaultFields((prev) => {
    //   return prev === objDefaultFieldsNull
    //     ? objDefaultFieldsFalse
    //     : objDefaultFieldsNull;
    // });
  };

  const handleEdit = () => {
    setIsEdit(true);
    setShowValidations(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm()) {
      //chamar action/api
      dispatch(updateClientData(fields));
      dispatch(updateModalInfo("Dados atualizados com sucesso!!", true));
      handleCancelEdit();
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
