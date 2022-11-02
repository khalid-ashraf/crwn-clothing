//React and React Router Imports
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Firebase Imports
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

//Redux Imports
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments("categories");

			dispatch(setCategories(categoriesArray));
		};

		getCategoriesMap();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
