import {viagens} from '../testes'

export const viagensReducer = (store = viagens, action) => {
  switch (action.type) {
    case "updateAllViagens":
      return action.payload;

    default:
      return store;
  }
};
