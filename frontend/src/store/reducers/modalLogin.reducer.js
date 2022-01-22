export const modalLoginReducer = (store = false, action) => {
  switch (action.type) {
    case "showModalLogin":
      return action.payload;

    default:
      return store;
  }
};