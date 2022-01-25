import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function InputEmail({ defaultValue, showErrors, onChange }) {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [showError, setShowError] = useState(showErrors);
  const [error, setError] = useState(true);

  useEffect(() => {
    setCurrentValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setShowError(showErrors);
    setError(true);
  }, [showErrors]);

  const onInputChange = (value) => {
    setCurrentValue(value);
    setShowError(true);
    if (validateField(value)) {
      setError(false);
      onChange(value);
    } else {
      setError(true);
      onChange(null);
    }
  };

  const validateField = (value) => {
    if (
      value.trim().length === 0 ||
      !value.includes("@") ||
      !value.includes(".")
    ) {
      return false;
    }
    return true;
  };

  return (
    <Form.Group className="mb-2 col-md-12">
      <Form.Label>E-mail:</Form.Label>
      <Form.Control
        required
        type="email"
        placeholder={`Digite seu E-mail...`}
        maxLength={30}
        value={currentValue}
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
        isValid={!error}
        isInvalid={showError && error}
      />
      <Form.Control.Feedback type="valid">E-mail ok!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Seu E-mail é necessário!
      </Form.Control.Feedback>
    </Form.Group>
  );
}
