import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../buttons/button.component";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";

import { CartContext } from "../contexts/cart.context";

const CartDropdown = () => {
	const { cartItems, setisCartOpen } = useContext(CartContext);

	const navigate = useNavigate();

	const gotoCheckoutHandler = () => {
		navigate("/checkout");
		setisCartOpen(false);
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<div key={item.id}>
						<CartItem cartItem={item} />
					</div>
				))}
			</div>
			<Button onClick={gotoCheckoutHandler}>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
