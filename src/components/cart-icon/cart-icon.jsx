import React, { useContext } from "react";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {
	const { isCartOpen, setisCartOpen, cartCount } = useContext(CartContext);

	return (
		<div
			className='cart-icon-container'
			onClick={() => {
				setisCartOpen(!isCartOpen);
			}}>
			<ShoppingBagIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
