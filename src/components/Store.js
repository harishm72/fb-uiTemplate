import { createStore , applyMiddleware, compose, } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers'
const middleware = [thunk];

const initialState = {}

const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      
    )
  );

// store.subscribe(() => {
//     console.log(store.getState())
// })

export default store;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()