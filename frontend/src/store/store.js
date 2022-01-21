import { combineReducers, createStore } from "redux";
import { myPurchasesReducer } from "./reducers/myPurchases.reducer";
import { destinationsReducer } from "./reducers/destinations.reducer";
import { tripsReducer } from "./reducers/trips.reducer";
import { currentReqReducer } from "./reducers/currentReq.reducer";

const reducers = combineReducers({
  myPurchases: myPurchasesReducer,
  // myTrips: myTripsReducer,
  destinations: destinationsReducer,
  trips: tripsReducer,
  currentReq: currentReqReducer,
});

export const store = createStore(reducers);
