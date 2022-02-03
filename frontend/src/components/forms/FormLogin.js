import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputEmail } from "./InputEmail";
import { updateClientData } from "../../store/actions/clientData.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { validateForm } from "../../helpers/validateForm";
import { SpinnerBtn } from "./SpinnerBtn";
import { getPurchases, login } from "../../api/api";
import { updateAllMyPurchases } from "../../store/actions/myPurchases.actions";

const objDefaultFields = {
  email: null,
  password: null,
};

export function FormLogin({ closeModal }) {
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
        try {
          const client = await login(fields);
          if (client !== null) {
            dispatch(updateClientData(client));
            closeModal();
            dispatch(updateModalInfo("Login efetuado com sucesso!!", true));
            const purchases = await getPurchases({
              ...fields,
              id: client.id,
            });
            dispatch(updateAllMyPurchases(purchases));
          } else {
            setSpinner(false);
            dispatch(updateModalInfo("Usuário e/ou senha incorretos!", false));
            handleReset();
          }
        } catch {
          setSpinner(false);
          dispatch(
            updateModalInfo("Falha na comunicação com o servidor!", false)
          );
          handleReset();
        }
      }, 1000);
    }
  };

  const handleReset = () => {
    setShowValidations((prev) => (prev === false ? null : false));
    setFields(objDefaultFields);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row>
        <img
          src="./images/avatar.png"
          alt="Avatar"
          title="Avatar"
          width={512}
          height="auto"
          style={{ width: "40%" }}
          className="mx-auto mt-4"
        />
      </Row>
      <Row className="my-3">
        <InputEmail
          showValidations={showValidations}
          defaultValue={null}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              email: value,
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
              password: value,
            });
          }}
        />
      </Row>
      <Form.Group className="mb-3">
        <SpinnerBtn
          value="Logar"
          loading={spinner}
          className="btn btn-primary w-100"
        />
      </Form.Group>
    </Form>
  );
}
