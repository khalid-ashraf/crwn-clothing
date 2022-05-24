import "./category-item.style.scss";

const Categoryitem = ({ categories }) => {
	return categories.map(({ id, title, imageUrl }) => (
		<div key={id} className='category-container'>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			{/* <img /> */}
			<div className='category-body-container'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	));
};

export default Categoryitem;
