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
export const getMyTrip = (trip) => {
  return {
    type: "getMyTrip",
    payload: trip,
  };
};
