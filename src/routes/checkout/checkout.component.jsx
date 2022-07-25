import { useContext } from "react";

import { CartContext } from "../../components/contexts/cart.context.jsx";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";

import "./checkout.styles.jsx";
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>TOTAL: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
