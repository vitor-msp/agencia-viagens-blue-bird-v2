import uuid from "react-uuid";

export const updateClientData = (clientData) => {
  return {
    type: "updateClientData",
    payload: {
      id: uuid(),
      ...clientData,
    }, //get dados usuario api
  };
};
