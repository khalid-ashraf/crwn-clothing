import React from "react";

import {
	CartItemContainer,
	Image,
	ItemDetails,
	Name,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;

	return (
		<CartItemContainer>
			<Image src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name>{name}</Name>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
