import "./navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const NavBar = () => {
	return (
		<>
			<div className='nav-bar'>
				<Link className='logo-container' to={"/"}>
					<CrownLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/signIn'>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default NavBar;
