import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";

// using middleware - here also the middlewares are used same as we had seen in the noe setup
import logger from "redux-logger";

const store = createStore(cakeReducer, applyMiddleware(logger))

export default store

// to export the store to our react application



// react-redux library exports a Component called provider (see App.js)