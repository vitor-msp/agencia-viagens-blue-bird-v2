export const modalInfoReducer = (store = null, action) => {
  switch (action.type) {
    case "updateModalInfo":
      return action.payload;

    case "clearModalInfo":
      return action.payload;

    default:
      return store;
  }
};