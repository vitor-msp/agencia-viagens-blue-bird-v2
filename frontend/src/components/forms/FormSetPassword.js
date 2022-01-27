import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputSetPassword } from "./InputSetPassword";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { validateForm } from "../../helpers/validateForm";

const objDefaultFields = {
  password: null,
  newPassword: null,
};

export function FormSetPassword({ modalClose }) {
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFields);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm(fields)) {
      //chamar action/api
      modalClose();
      dispatch(updateModalInfo("Senha alterada com sucesso!!", true));
    }
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
