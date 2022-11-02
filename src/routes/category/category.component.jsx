//React and React Router Imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Redux Imports
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

//Styles Imports
import "./category.styles.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

//Child Component Import
import ProductCard from "../../components/product-card/product-card";

const Category = () => {
	const { category } = useParams();

	//The useSelector hook runs the selectCategoriesMap which will select the next state of the categoriesMap.
	const categoriesMap = useSelector(selectCategoriesMap);

	const [products, setProducts] = useState(categoriesMap[category]);

	console.log("render/re-rendering category component");

	useEffect(() => {
		console.log("Effect fired calling setProducts");
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</>
	);
};

export default Category;
