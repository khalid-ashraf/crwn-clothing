import React, { useContext } from "react";

import {
	CartIconContainer,
	ShoppingIcon,
	ItemCount,
} from "./cart-icon.styles.jsx";

import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	return (
		<CartIconContainer
			onClick={() => {
				setIsCartOpen(!isCartOpen);
			}}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
