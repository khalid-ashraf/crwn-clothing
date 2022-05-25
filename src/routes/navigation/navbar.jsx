import { Outlet } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<h1>Navigation Bar</h1>
			<Outlet />
		</div>
	);
};

export default NavBar;
