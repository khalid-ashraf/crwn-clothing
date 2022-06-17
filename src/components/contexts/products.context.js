import React, { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.js";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
		};
		getCategoriesMap();
	}, []);

	const value = { products, setProducts };

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
