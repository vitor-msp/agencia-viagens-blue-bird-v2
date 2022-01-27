import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputCpf } from "./InputCpf";
import { InputEmail } from "./InputEmail";
import { InputSetPassword } from "./InputSetPassword";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";

const objDefaultFields = {
  name: null,
  rg: null,
  cpf: null,
  birthDate: null,
  email: null,
  password: null,
};

export function FormRegister() {
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFields);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm()) {
      //chamar action/api
      dispatch(updateModalInfo("Sua conta foi criada com sucesso!!", true));
      document.getElementById("navLoginModal").click();
    }
  };

  const validateForm = () => {
    if (Object.values(fields).some((field) => field === null)) {
      return false;
    }
    return true;
  };

  const handleReset = () => {
    setShowValidations((prev) => (prev === false ? null : false));
    setFields(objDefaultFields);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
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
        />
        <InputSetPassword
          showValidations={showValidations}
          defaultValue={objDefaultFields.password}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["password"]: value,
            });
          }}
        />
      </Row>
      <Form.Group className="mb-3 d-flex flex-nowrap">
        <input
          type="reset"
          value={"Limpar"}
          className="btn btn-secondary w-100"
          style={{ marginRight: "5px" }}
          onClick={handleReset}
        />
        <input
          type="submit"
          value={"Criar conta"}
          className="btn btn-primary w-100"
          style={{ marginLeft: "5px" }}
        />
      </Form.Group>
    </Form>
  );
}
