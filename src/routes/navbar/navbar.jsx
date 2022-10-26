//React and React-Redux imports
import { useContext } from "react";
import { useSelector } from "react-redux";

//React Router imports
import { Outlet } from "react-router-dom";

//React styles and Logo imports
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navbar.styles.jsx";

//Context imports
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext } from "../../components/contexts/cart.context";

//Firebase User Signed-in or Signed-out import
import { signOutUser } from "../../utils/firebase/firebase";

//Cart Components import
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

//NavBar Component
const NavBar = () => {
	//The useSelector hook is running the selectCurrentUser which selects the next state of the currentUser.
	const currentUser = useSelector(selectCurrentUser);

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
