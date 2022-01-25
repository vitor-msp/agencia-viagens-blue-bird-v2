import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { InputDefault } from "./InputDefault";
import { InputCpf } from "./InputCpf";
import { InputEmail } from "./InputEmail";
// import { InputSetPassword } from "./InputSetPassword";

const defaultFields = {
  name: null,
  rg: null,
  cpf: null,
  birthDate: null,
  email: null,
  // terms: null,
};

export function FormRegister() {
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(defaultFields);

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

  const handleReset = () => {
    setShowValidations((prev) => prev + 1); //altera state para false
    setFields(defaultFields);
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
          defaultValue={fields.name}
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
          defaultValue={fields.rg}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["rg"]: value,
            });
          }}
        />
        <InputCpf
          showValidations={showValidations}
          defaultValue={fields.cpf}
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
          defaultValue={fields.birthDate}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["birthDate"]: value,
            });
          }}
        />
        <InputEmail
          showValidations={showValidations}
          defaultValue={fields.email}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["email"]: value,
            });
          }}
        />
      </Row>
      {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Aceitar os termos e condições"
          feedback={
            errors.terms === true
              ? "Você precisa aceitar para criar sua conta."
              : "Termos ok!"
          }
          feedbackType={errors.terms === true ? "invalid" : "valid"}
          checked={fields.terms}
          handleFieldChange={(event) => {
            setFields({
              ...fields,
              ["terms"]: event.target.checked,
            });
          }}
          isValid={errors.terms === false ? true : false}
          isInvalid={showValidations && errors.terms === true ? true : false}
        />
      </Form.Group> */}
      <Form.Group className="mb-3">
        <input
          type="submit"
          value={"Criar conta"}
          className="btn btn-primary mx-3"
        />
        <input
          type="reset"
          value={"Limpar"}
          className="btn btn-secondary"
          onClick={handleReset}
        />
      </Form.Group>
    </Form>
  );
}
