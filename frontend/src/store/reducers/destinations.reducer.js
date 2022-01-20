import { destinations } from "../tests";

export const destinationsReducer = (store = destinations, action) => {
  switch (action.type) {
    case "updateAllDestinations":
      return action.payload;

    default:
      return store;
  }
};
