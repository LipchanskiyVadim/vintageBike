const CreateSlide = ({ img, title }) => (
	<div className="slide">
		<div className="slide-img">
			<img src={img} alt="" />
		</div>
		<div className="slide-title">AOD New York {title} <span>/ 35 min</span></div>
		<div className="slide-text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus.
			Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.
		</div>
	</div>
);

export default CreateSlide;