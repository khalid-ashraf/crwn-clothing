import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
	categories: [],
};

//This sets Initial State and then takes in the action. Action is passed from the action.js file. As we saw, action.js file has an action type and payload. Payload contains what the currentUser value is
export const categoriesReducer = (
	state = CATEGORIES_INITIAL_STATE,
	action = {}
) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
			return { ...state, categories: payload };

		default:
			return state;
	}
};
