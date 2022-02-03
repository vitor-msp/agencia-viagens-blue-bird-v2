export const myPurchasesReducer = (state = [], action) => {
  // const sortTrips = (trips) => {
  //   return trips.sort((a, b) => a.departure - b.departure);
  // };

  switch (action.type) {
    case "updateAllMyPurchases":
      return action.payload;

    case "removePurchase":
      return state.filter(({ id }) => id !== action.payload);

    case "clearMyPurchases":
      return [];

    default:
      return state;
  }
};
