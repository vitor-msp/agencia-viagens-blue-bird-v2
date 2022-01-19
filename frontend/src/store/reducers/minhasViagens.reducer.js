export const minhasViagensReducer = (store = [], action) => {
  const sortTrips = (trips) => {
    return trips.sort((a, b) => a.partida - b.partida);
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
