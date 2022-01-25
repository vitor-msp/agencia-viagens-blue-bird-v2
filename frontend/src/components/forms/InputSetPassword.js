import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function InputSetPassword({
  defaultValue,
  showValidations,
  handleFieldChange,
}) {
  const [currentPass, setCurrentPass] = useState(
    !defaultValue ? "" : defaultValue
  );
  const [currentConfPass, setCurrentConfPass] = useState("");
  const [showValidation, setShowValidation] = useState(showValidations);
  const [isValidPass, setIsValidPass] = useState(false);
  const [isValidConfPass, setIsValidConfPass] = useState(false);

  useEffect(() => {
    setCurrentPass(!defaultValue ? "" : defaultValue);
    setCurrentConfPass("");
  }, [defaultValue]);

  useEffect(() => {
    setShowValidation(showValidations);
  }, [showValidations]);

  useEffect(() => {
    if (validateField(currentPass)) {
      setIsValidPass(true);
      //handleFieldChange(currentPass);
    } else {
      setIsValidPass(false);
      handleFieldChange(null);
    }
  }, [currentPass]);

  useEffect(() => {
    if (validateField(currentConfPass)) {
      setIsValidConfPass(true);
      //handleFieldChange(currentConfPass);
    } else {
      setIsValidConfPass(false);
      handleFieldChange(null);
    }
  }, [currentConfPass]);

  const validateField = (value) => {
    if (value.trim().length === 0) {
      return false;
    }
    return true;
  };

  const onPassChange = (value) => {
    setCurrentPass(value);
    setShowValidation(true);
  };

  return (
    <>
      <Form.Group className="mb-2 col-md-12">
        <Form.Label>Senha:</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder={`Defina uma senha...`}
          maxLength={30}
          value={currentPass}
          onChange={(event) => {
            onPassChange(event.target.value);
          }}
          isValid={
            showValidation === true && isValidPass === true ? true : false
          }
          isInvalid={
            showValidation === true && isValidPass === false ? true : false
          }
        />
        <Form.Control.Feedback type="valid">Senha ok!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Uma senha é necessária!
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}
