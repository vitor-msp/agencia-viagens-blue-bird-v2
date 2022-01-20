import {trips} from '../testes'

export const tripsReducer = (store = trips, action) => {
  switch (action.type) {
    case "updateAllTrips":
      return action.payload;

    default:
      return store;
  }
};
