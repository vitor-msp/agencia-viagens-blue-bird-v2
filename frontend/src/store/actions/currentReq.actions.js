// export const updateCurrentDestination = (id) => {
//   return {
//     type: "updateCurrentDestination",
//     payload: id,
//   };
// };
export const updateCurrentOffer = (offerId) => {
  return {
    type: "updateCurrentOffer",
    payload: offerId,
  };
};
export const clearCurrentOffer = () => {
  return {
    type: "clearCurrentOffer",
    payload: null,
  };
};