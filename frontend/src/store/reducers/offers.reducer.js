import { offers } from "../tests";

export const offersReducer = (state = offers, action) => {
  switch (action.type) {
    // case "updateAllOffers":
    //   return action.payload;

    default:
      return state;
  }
};
