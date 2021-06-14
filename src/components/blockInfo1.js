import icon from "../source/img/blockInfoOne/icon1.png";
import "../sass/blockInfo1.scss";

const BlockInfoOne = () => (
	<div className="blockInfoOne">
		<div className="container">
			<div className="blockInfoOne-img">
				<img src={icon} alt="" />
			</div>
			<div className="blockInfoOne-title">
				A NEW GENERATION OF VINTAGE BIKE
			</div>
			<div className="blockInfoOne-text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged.
			</div>
		</div>
	</div >
)

export default BlockInfoOne;