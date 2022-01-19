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
export const createTrip = (trip) => {
  return {
    type: "createTrip",
    payload: trip,
  };
};
