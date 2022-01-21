import { trips } from "../tests";

// export const updateAllTrips = (trips) => {
//   return {
//     type: "updateAllTrips",
//     payload: trips,
//   };
// };
export const getTrips = (destination) => {
  return {
    type: "getTrips",
    payload: trips.filter((trip) => trip.destination === destination), //get viagens(id_destino) api
  };
};
