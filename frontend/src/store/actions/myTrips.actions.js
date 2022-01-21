export const updateAllMyTrips = (trips) => {
  return {
    type: "updateAllMyTrips",
    payload: trips,
  };
};
// export const deleteMyTrip = (id) => {
//   return {
//     type: "deleteMyTrip",
//     payload: id,
//   };
// };
export const getMyTrip = (trip) => {
  return {
    type: "getMyTrip",
    payload: trip,
  };
};
