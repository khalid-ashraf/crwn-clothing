import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
};

//This sets Initial State and then takes in the action. Action is passed from the action.js file. As we saw, action.js file has an action type and payload. Payload contains what the currentUser value is
export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				currentUser: payload,
			};
		default:
			return state;
	}
};
