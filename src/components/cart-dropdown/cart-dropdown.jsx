import React from "react";
import Button from "../buttons/button.component";

import "./cart-dropdown.scss";

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				<Button>Checkout</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
