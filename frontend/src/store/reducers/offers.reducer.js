import { offers } from "../tests";

export const offersReducer = (store = offers, action) => {
  switch (action.type) {
    // case "updateAllOffers":
    //   return action.payload;

    default:
      return store;
  }
};
