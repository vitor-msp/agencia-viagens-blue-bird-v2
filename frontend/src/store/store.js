import { combineReducers, createStore } from "redux";
import { myPurchasesReducer } from "./reducers/myPurchases.reducer";
import { myTripsReducer } from "./reducers/myTrips.reducer";
import { destinationsReducer } from "./reducers/destinations.reducer";
import { offersReducer } from "./reducers/offers.reducer";
import { tripsReducer } from "./reducers/trips.reducer";
import { currentReqReducer } from "./reducers/currentReq.reducer";
import { modalTripContentReducer } from "./reducers/modalTripContent.reducer";

const reducers = combineReducers({
  myPurchases: myPurchasesReducer,
  myTrips: myTripsReducer,
  destinations: destinationsReducer,
  offers: offersReducer,
  trips: tripsReducer,
  currentReq: currentReqReducer,
  modalTripContent: modalTripContentReducer,
});

export const store = createStore(reducers);
