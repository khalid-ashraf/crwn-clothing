import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from "./directory-item.style.jsx";

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;

	return (
		<>
			<DirectoryItemContainer>
				<BackgroundImage imageUrl={imageUrl} />
				{/* <img /> */}
				<Body to={`/shop/${title.toLowerCase()}`}>
					<h2>{title}</h2>
					<p>Shop Now</p>
				</Body>
			</DirectoryItemContainer>
		</>
	);
};

export default DirectoryItem;
