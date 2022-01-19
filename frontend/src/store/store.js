import { combineReducers, createStore } from "redux";
import { minhasViagensReducer } from "./reducers/minhasViagens.reducer";
import { destinosReducer } from "./reducers/destinos.reducer";
import { viagensReducer } from "./reducers/viagens.reducer";

const reducers = combineReducers({
  minhasViagens: minhasViagensReducer,
  destinos: destinosReducer,
  viagens: viagensReducer,
});

export const store = createStore(reducers);
