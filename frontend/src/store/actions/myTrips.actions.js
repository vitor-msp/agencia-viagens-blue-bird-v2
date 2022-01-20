import uuid from "react-uuid";

export const updateAllMyTrips = (trips) => {
  return {
    type: "updateAllMyTrips",
    payload: trips,
  };
};
export const deleteTrip = (id) => {
  return {
    type: "deleteTrip",
    payload: id,
  };
};
export const getTrip = (tripId) => {
  return {
    type: "getTrip",
    payload: {
      id: uuid(),
      client: 1,
      trip: tripId,
      sale: null,
    }, //get adquire(id_viagem) api
  };
};
