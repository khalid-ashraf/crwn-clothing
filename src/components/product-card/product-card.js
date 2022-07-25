import React, { useContext } from "react";

import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from "./product-card.styles.jsx";

import { CartContext } from "../contexts/cart.context";

import Button, { buttonTypeClasses } from "../buttons/button.component";

const ProductCard = ({ product }) => {
	const { addItemstoCart } = useContext(CartContext);

	const { name, imageUrl, price } = product;

	const addProductToCart = () => {
		addItemstoCart(product);
	};

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={buttonTypeClasses.inverted}
				onClick={addProductToCart}>
				Add to Cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
