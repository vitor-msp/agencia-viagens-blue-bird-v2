import uuid from "react-uuid";

export const updateAllMyPurchases = (purchases) => {
  return {
    type: "updateAllMyPurchases",
    payload: purchases,
  };
};
export const deletePurchase = (id) => {
  return {
    type: "deletePurchase",
    payload: id,
  };
};
export const getPurchase = (tripId, offerId = null) => {
  return {
    type: "getPurchase",
    payload: {
      id: uuid(),
      client: 1,
      trip: tripId,
      offer: offerId,
    }, //get adquire(id_viagem) api
  };
};
