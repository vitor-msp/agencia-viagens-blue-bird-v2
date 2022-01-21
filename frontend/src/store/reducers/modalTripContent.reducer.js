export const modalTripContentReducer = (store = null, action) => {
  switch (action.type) {
    case "updateModalTripContent":
      return action.payload;

    case "clearModalTripContent":
      return action.payload;

    default:
      return store;
  }
};
