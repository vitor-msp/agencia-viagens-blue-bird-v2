export const updateAllTrips = (trips) => {
  return {
    type: "updateAllTrips",
    payload: trips,
  };
};