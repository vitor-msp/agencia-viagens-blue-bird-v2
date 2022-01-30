import uuid from "react-uuid";

const defaultData = {
  name: "Fulano de Tal",
  rg: "m123456789",
  cpf: "01234567890",
  birthDate: "2022-01-25",
  email: "fulano@teste.com",
};

export const updateClientData = (clientData) => {
  return {
    type: "updateClientData",
    payload: clientData,
  };
};

export const logout = () => {
  return {
    type: "logout",
    payload: null,
  };
};
