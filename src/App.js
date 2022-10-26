//React and Redux imports
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

//Firebase Imports
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "./utils/firebase/firebase";

//Route Imports
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import NavBar from "./routes/navbar/navbar";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout.component.jsx";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubcribe = async () =>
			onAuthStateChangedListener((user) => {
				if (user) createUserDocumentFromAuth(user);

				dispatch(setCurrentUser(user));
			});

		return unsubcribe;
	}, []);

	return (
		<Routes>
			<Route path='/' element={<NavBar />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
