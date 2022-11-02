//When called upon, it selects the next State value.
export const selectCategoriesMap = (state) => {
	console.log("Selector fired");
	const categoriesMap = state.categories.categories.reduce(
		(acc, { title, items }) => {
			acc[title.toLowerCase()] = items;
			return acc;
		},
		{}
	);
	return categoriesMap;
};
