import {combineReducers, createStore} from 'redux'
import {minhasViagensReducer} from './reducers/minhasViagens.reducer'

const reducers = combineReducers({
  // minhasViagens = minhasViagensReducer
})

export const store = createStore(reducers); 