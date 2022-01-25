export const clientDataReducer = (store = null, action) => {
  switch (action.type) {
    case "updateClientData":
      return action.payload;

    default:
      return store;
  }
};
