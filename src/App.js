import Home from "./routes/home/home";
import NavBar from "./routes/navbar/navbar";
import Authentication from "./routes/authentication/authentication";
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
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
