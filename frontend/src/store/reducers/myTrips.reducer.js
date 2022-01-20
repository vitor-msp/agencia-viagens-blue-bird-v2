import { myTrips } from "../tests";

export const myTripsReducer = (state = myTrips, action) => {
  const sortTrips = (trips) => {
    return trips.sort((a, b) => a.departure - b.departure);
  };

  switch (action.type) {
    case "updateAllMyTrips":
      return action.payload;

    case "deleteTrip":
      return state.filter(({ id }) => id !== action.payload);

    case "getTrip":
      state.push(action.payload);
      return state;

    default:
      return state;
  }
};
