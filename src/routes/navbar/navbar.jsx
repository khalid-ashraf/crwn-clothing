import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navbar.styles.scss";

import { UserContext } from "../../components/contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase";

const NavBar = () => {
	const { currentUser } = useContext(UserContext);

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
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default NavBar;
