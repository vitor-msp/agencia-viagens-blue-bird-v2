import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputSetPassword } from "./InputSetPassword";
import { SpinnerBtn } from "./SpinnerBtn";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { validateForm } from "../../helpers/validateForm";
import { setPassword } from "../../api/api";

export function FormSetPassword({ modalClose }) {
  const objDefaultFields = {
    id: useSelector((state) => state.clientData.id),
    email: useSelector((state) => state.clientData.email),
    password: null,
    newPassword: null,
  };

  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFields);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm(fields)) {
      setSpinner(true);
      setTimeout(async () => {
        const clientToUpdate = Object.assign({}, fields);
        const ret = await setPassword(clientToUpdate);
        if (ret) {
          dispatch(updateModalInfo("Senha alterada com sucesso!!", true));
        } else {
          dispatch(updateModalInfo("Falha na alteração da senha!", false));
        }
        modalClose();
      }, 2000);
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
              password: value,
            });
          }}
        />
        <InputSetPassword
          showValidations={showValidations}
          defaultValue={null}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              newPassword: value,
            });
          }}
        />
      </Row>
      <Form.Group className="mb-3">
        <SpinnerBtn
          value="Salvar"
          loading={spinner}
          className="btn btn-primary w-100"
        />
      </Form.Group>
    </Form>
  );
}
