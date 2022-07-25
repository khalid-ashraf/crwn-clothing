import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navbar.styles.jsx";

import { UserContext } from "../../components/contexts/user.context";
import { CartContext } from "../../components/contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

const NavBar = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to={"/"}>
					<CrownLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<div>
						<CartIcon />
					</div>
					{isCartOpen && <CartDropdown />}
				</NavLinks>
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default NavBar;
