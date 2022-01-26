import { destinations } from "../tests";

export const destinationsReducer = (state = destinations, action) => {
  switch (action.type) {
    case "updateAllDestinations":
      return action.payload;

    default:
      return state;
  }
};
