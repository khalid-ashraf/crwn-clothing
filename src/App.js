import Home from "./routes/home/home";
import NavBar from "./routes/navbar/navbar";
import Shop from "./routes/shop/shop.component";

import Authentication from "./routes/authentication/authentication";
import { Routes, Route } from "react-router-dom";

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
