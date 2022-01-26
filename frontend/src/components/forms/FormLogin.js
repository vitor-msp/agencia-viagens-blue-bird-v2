import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputEmail } from "./InputEmail";
import { login } from "../../store/actions/clientData.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";

const objDefaultFieldsNull = {
  email: null,
  password: null,
};

export function FormLogin({ closeModal }) {
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFieldsNull);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm()) {
      dispatch(login());
      closeModal();
      dispatch(updateModalInfo("Login efetuado com sucesso!!", true));
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
        <InputEmail
          showValidations={showValidations}
          defaultValue={null}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["email"]: value,
            });
          }}
        />
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
      </Row>
      <Form.Group className="mb-3">
        <input
          type="submit"
          value={"Logar"}
          className="btn btn-primary w-100"
        />
      </Form.Group>
    </Form>
  );
}
