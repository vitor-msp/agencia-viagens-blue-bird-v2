import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { InputDefault } from "./inputs/InputDefault";
import { InputCPF } from "./inputs/InputCPF";
import { InputEmail } from "./inputs/InputEmail";
// import { InputSetPassword } from "./inputs/InputSetPassword";

const defaultFields = {
  name: null,
  rg: null,
  cpf: null,
  birthDate: null,
  email: null,
  // terms: null,
};

export function FormRegister() {
  const [showErrors, setShowErrors] = useState(false);
  const [fields, setFields] = useState(defaultFields);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowErrors(true);
    if (validateForm()) {
      alert("sucesso");
    }
  };

  const validateForm = () => {
    console.log(Object.values(fields));
    const someError = Object.values(fields).some((field) => field === null);
    if (someError) {
      return false;
    }
    return true;
  };

  const handleReset = () => {
    setFields(defaultFields);
    setShowErrors(false);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="my-3">
        <InputDefault
          name={"Nome"}
          type={"text"}
          maxLength={50}
          defaultClass={"col-md-12"}
          showErrors={showErrors}
          defaultValue={fields.name}
          onChange={(value) => {
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
          showErrors={showErrors}
          defaultValue={fields.rg}
          onChange={(value) => {
            setFields({
              ...fields,
              ["rg"]: value,
            });
          }}
        />
        <InputCPF
          showErrors={showErrors}
          defaultValue={fields.cpf}
          onChange={(value) => {
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
          showErrors={showErrors}
          defaultValue={fields.birthDate}
          onChange={(value) => {
            setFields({
              ...fields,
              ["birthDate"]: value,
            });
          }}
        />
        <InputEmail
          showErrors={showErrors}
          defaultValue={fields.email}
          onChange={(value) => {
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
          onChange={(event) => {
            setFields({
              ...fields,
              ["terms"]: event.target.checked,
            });
          }}
          isValid={errors.terms === false ? true : false}
          isInvalid={showErrors && errors.terms === true ? true : false}
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
