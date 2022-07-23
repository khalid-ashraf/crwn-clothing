import "./directory-item.style.scss";

import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;

	return (
		<>
			<div className='directory-item-container'>
				<div
					className='background-image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
				{/* <img /> */}
				<Link className='body' to={`/shop/${title.toLowerCase()}`}>
					<h2>{title}</h2>
					<p>Shop Now</p>
				</Link>
			</div>
		</>
	);
};

export default DirectoryItem;
