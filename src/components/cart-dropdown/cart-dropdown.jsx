import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../buttons/button.component";
import CartItem from "../cart-item/cart-item";

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles.jsx";

import { CartContext } from "../contexts/cart.context";

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);

	const navigate = useNavigate();

	const gotoCheckoutHandler = () => {
		navigate("/checkout");
		setIsCartOpen(false);
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<div key={item.id}>
							<CartItem cartItem={item} />
						</div>
					))
				) : (
					<EmptyMessage>Cart is Empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={gotoCheckoutHandler}>Checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
