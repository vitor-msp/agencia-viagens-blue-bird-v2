import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { InputDefault } from "./InputDefault";
import { InputSetPassword } from "./InputSetPassword";

const objDefaultFieldsNull = {
  password: null,
  newPassword: null,
};

export function FormSetPassword() {
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFieldsNull);

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
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="my-3">
      <InputDefault
          name={"Senha"}
          type={"password"}
          maxLength={30}
          defaultClass={"col-md-12"}
          showValidations={showValidations}
          defaultValue={null}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["password"]: value,
            });
          }}
        />
        <InputSetPassword
          showValidations={showValidations}
          defaultValue={null}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["newPassword"]: value,
            });
          }}
        />
      </Row>
      <Form.Group className="mb-3">
        <input
          type="submit"
          value={"Salvar"}
          className="btn btn-primary w-100"
        />
      </Form.Group>
    </Form>
  );
}