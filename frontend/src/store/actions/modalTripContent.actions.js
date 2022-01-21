export const updateModalTripContent = (trip, destination, offer) => {
  return {
    type: "updateModalTripContent",
    payload: {
      trip,
      destination,
      offer,
    },
  };
};
export const clearModalTripContent = () => {
  return {
    type: "clearModalTripContent",
    payload: null,
  };
};
