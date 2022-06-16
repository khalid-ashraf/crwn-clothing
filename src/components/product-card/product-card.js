import React, { useContext } from "react";

import "./product-card.scss";

import { CartContext } from "../contexts/cart.context";

import Button from "../buttons/button.component";

const ProductCard = ({ product }) => {
	const { addItemstoCart } = useContext(CartContext);

	const { name, imageUrl, price } = product;

	const addProductToCart = () => {
		addItemstoCart(product);
	};

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted' onClick={addProductToCart}>
				Add to Cart
			</Button>
		</div>
	);
};

export default ProductCard;
