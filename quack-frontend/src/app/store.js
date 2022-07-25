// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {}
// });


import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import initial from "./initial";
import thunk from "redux-thunk";

// setup store
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;


// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from "redux-thunk";

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   composeEnhancers(applyMiddleware(thunk))
//   // other store enhancers if any
// ));

// export default store;