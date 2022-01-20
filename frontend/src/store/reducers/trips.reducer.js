import { trips } from "../tests";

export const tripsReducer = (store = trips, action) => {
  switch (action.type) {
    case "updateAllTrips":
      return action.payload;

    case "getTrips":
      return action.payload;

    default:
      return store;
  }
};
