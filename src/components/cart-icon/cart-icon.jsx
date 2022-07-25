import React, { useContext } from "react";

import {
	CartIconContainer,
	ShoppingIcon,
	ItemCount,
} from "./cart-icon.styles.jsx";

import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {
	const { isCartOpen, setisCartOpen, cartCount } = useContext(CartContext);

	return (
		<CartIconContainer
			onClick={() => {
				setisCartOpen(!isCartOpen);
			}}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
