export const myTripsReducer = (store = [], action) => {
  const sortTrips = (trips) => {
    return trips.sort((a, b) => a.departure - b.departure);
  };

  switch (action.type) {
    case "updateAllMyTrips":
      return action.payload;

    case "deleteTrip":
      return store.filter(({ id }) => id !== action.payload);

    case "createTrip":
      return sortTrips(store.push(action.payload));

    default:
      return store;
  }
};
