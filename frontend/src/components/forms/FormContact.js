import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputEmail } from "./InputEmail";
import { InputBody } from "./InputBody";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";

const objDefaultFieldsFalse = {
  email: false,
  subject: false,
  body: false,
};
const objDefaultFieldsNull = {
  email: null,
  subject: null,
  body: null,
};

export function FormContact() {
  const [showValidations, setShowValidations] = useState(false);
  const [defaultFields, setDefaultFields] = useState(objDefaultFieldsNull);
  const [fields, setFields] = useState(objDefaultFieldsNull);
  objDefaultFieldsNull.email = useSelector((state) => state.clientData.email);
  objDefaultFieldsFalse.email = useSelector((state) => state.clientData.email);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm()) {
      //chamar action/api
      dispatch(
        updateModalInfo(
          "Agradecemos o seu contato!! Em breve retornaremos.",
          true
        )
      );
      handleReset();
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
    setFields(objDefaultFieldsNull);
    setDefaultFields((prev) => {
      return prev === objDefaultFieldsNull
        ? objDefaultFieldsFalse
        : objDefaultFieldsNull;
    });
  };

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className="col-10 offset-1 col-md-6 offset-md-3"
    >
      <Row className="my-3">
        <InputEmail
          showValidations={showValidations}
          defaultValue={defaultFields.email}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["email"]: value,
            });
          }}
          disabled={defaultFields.email !== null ? true : false}
        />
        <InputDefault
          name={"Assunto"}
          type={"text"}
          maxLength={100}
          defaultClass={"col-md-12"}
          showValidations={showValidations}
          defaultValue={defaultFields.subject}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["subject"]: value,
            });
          }}
        />
        <InputBody
          showValidations={showValidations}
          defaultValue={defaultFields.body}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              ["body"]: value,
            });
          }}
        />
      </Row>
      <Form.Group className="mb-3  d-flex justify-content-center">
        <input type="submit" value={"Enviar"} className="btn btn-primary" style={{ marginRight: "5px" }} />
        <input
          type="reset"
          value={"Limpar"}
          className="btn btn-secondary mx-3"
          style={{ marginLeft: "5px" }}
          onClick={handleReset}
        />
      </Form.Group>
    </Form>
  );
}
