import {destinos} from '../testes'

export const destinosReducer = (store = destinos, action) => {
  switch (action.type) {
    case "updateAllDestinos":
      return action.payload;

    default:
      return store;
  }
};
