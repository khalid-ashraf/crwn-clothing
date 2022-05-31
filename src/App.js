import Home from "./routes/home/home";
import NavBar from "./routes/navbar/navbar";
import SignIn from "./routes/sign-in/sign-in";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
	return <h1>I am Shop</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavBar />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='signIn' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
