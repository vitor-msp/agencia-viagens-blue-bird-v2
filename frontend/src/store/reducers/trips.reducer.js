export const tripsReducer = (state = [], action) => {
  switch (action.type) {
    case "updateAllTrips":
      return action.payload;

    case "getTrips":
      return action.payload;

    default:
      return state;
  }
};
