import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// The store needs to be passed rootReducer via the createStore method to be created.
// But to be usefull we need the logger from redux-logger.
export const store = createStore(rootReducer, undefined, composedEnhancers);
