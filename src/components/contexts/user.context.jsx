import { createContext, useEffect, useReducer } from "react";

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import { createAction } from "../../utils/reducer/reducer.utils";

// The actual value you want to access.
export const UserContext = createContext();

export const USER_ACTION_TYPES = {
	SET_CUURENT_USER: "setCurrentUser",
};

const userReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CUURENT_USER:
			return {
				currentUser: payload,
			};
		default:
			throw new Error(`Unhandled type ${type} in userReducer`);
	}
};

export const UserProvider = ({ children }) => {
	const [{ currentUser }, dispatch] = useReducer(userReducer, {
		currentUser: null,
	});

	const setCurrentUser = (user) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CUURENT_USER, user));
	};

	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubcribe = async () =>
			onAuthStateChangedListener((user) => {
				if (user) createUserDocumentFromAuth(user);
				setCurrentUser(user);
			});
		return unsubcribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
