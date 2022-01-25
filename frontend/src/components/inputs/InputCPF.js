import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { filterOnlyNumber } from "../../helpers/filterOnlyNumber";

export function InputCPF({ defaultValue, showErrors, onChange }) {
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
    if (value.trim().length === 0 || value.length !== 11) {
      return false;
    }
    return true;
  };

  return (
    <Form.Group className="mb-2 col-md-6">
      <Form.Label>CPF:</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder={`Digite seu CPF...`}
        maxLength={11}
        value={currentValue}
        onChange={(event) => {
          onInputChange(filterOnlyNumber(event.target.value));
        }}
        isValid={!error}
        isInvalid={showError && error}
      />
      <Form.Control.Feedback type="valid">CPF ok!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Seu CPF é necessário!
      </Form.Control.Feedback>
    </Form.Group>
  );
}
