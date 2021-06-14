import icon from "../assets/img/blockInfoFour/icon.png";
import icon2 from "../assets/img/blockInfoFour/icon2.png";
import background1 from "../assets/img/blockInfoFour/background.png";
import "../sass/blockInfo4.scss";

const BlockInfoFour = () => (
	<div className="blockInfoFour">
		<div className="blockInfoFour-wrap">
			<div className="blockInfoFour-left">
				<a href="#"><img src={icon} alt="" /></a>
			</div>
			<div className="blockInfoFour-center">
				<div className="blockInfoFour-top">
					<img src={icon2} alt="" />
					<div className="blockInfoFour-title">retrò Bike - M. Hulot</div>
					<div className="blockInfoFour-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived.
					</div>
				</div>
				<div className="blockInfoFour-fon">
					<img src={background1} width="100%" alt="" />
				</div>
			</div>
			<div className="blockInfoFour-right">
			</div>
		</div>
	</div>
)

export default BlockInfoFour;