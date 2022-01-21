export const tripsReducer = (store = [], action) => {
  switch (action.type) {
    case "updateAllTrips":
      return action.payload;

    case "getTrips":
      return action.payload;

    default:
      return store;
  }
};
