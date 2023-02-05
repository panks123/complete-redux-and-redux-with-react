import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from '@redux-devtools/extension'; // For using the redux-devtool in the browser - 
                                                                 // for that first you need to install the extension in the browser, then use this in the redux application

import reducer from "./rootReducer";
// import logger from "redux-logger"; 

const store = createStore(reducer, composeWithDevTools(applyMiddleware( thunk)))

export default store