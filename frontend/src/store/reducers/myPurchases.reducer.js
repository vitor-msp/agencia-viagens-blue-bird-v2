export const myPurchasesReducer = (state = [], action) => {
  // const sortTrips = (trips) => {
  //   return trips.sort((a, b) => a.departure - b.departure);
  // };

  switch (action.type) {
    case "updateAllMyPurchases":
      return action.payload;

    case "deletePurchase":
      return state.filter(({ id }) => id !== action.payload);

    case "getPurchase":
      state.push(action.payload);
      return state;

    default:
      return state;
  }
};
