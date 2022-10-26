import { createAction } from "../../utils/reducer/reducer.utils";

import { USER_ACTION_TYPES } from "./user.types";

//This passes an action type and payload. Both of which are consumed by our user.reducer.js
export const setCurrentUser = (user) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
