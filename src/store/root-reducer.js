import { combineReducers } from "redux";

//Individual Reducers imports
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

//Root reducer is there to add all the individual reducers together. This is because in redux there is actually only one reducer and one dispatch function. The rootReducer takes in all the individual reducers and combines them into one reducer using the combineReducers() method.
export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
});
