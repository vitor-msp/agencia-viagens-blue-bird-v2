import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function InputDefault({
  name,
  type,
  maxLength,
  defaultClass,
  defaultValue,
  showErrors,
  onChange,
}) {
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
    if (value.trim().length === 0) {
      return false;
    }
    return true;
  };

  return (
    <Form.Group className={`mb-2 ${defaultClass}`}>
      <Form.Label>{name}:</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={`Digite seu ${name}...`}
        maxLength={maxLength}
        value={currentValue}
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
        isValid={!error}
        isInvalid={showError && error}
      />
      <Form.Control.Feedback type="valid">{name} ok!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Seu {name} é necessário!
      </Form.Control.Feedback>
    </Form.Group>
  );
}
