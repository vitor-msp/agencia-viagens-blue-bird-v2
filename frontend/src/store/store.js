import { combineReducers, createStore } from "redux";
import { myTripsReducer } from "./reducers/myTrips.reducer";
import { destinationsReducer } from "./reducers/destinations.reducer";
import { tripsReducer } from "./reducers/trips.reducer";
import { currentReqReducer } from "./reducers/currentReq.reducer";

const reducers = combineReducers({
  myTrips: myTripsReducer,
  destinations: destinationsReducer,
  trips: tripsReducer,
  currentReq: currentReqReducer,
});

export const store = createStore(reducers);
