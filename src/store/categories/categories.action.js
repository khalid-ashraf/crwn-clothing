import { createAction } from "../../utils/reducer/reducer.utils";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

//This passes an action type and payload. Both of which are consumed by our reducer.js
export const setCategories = (categories) =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
