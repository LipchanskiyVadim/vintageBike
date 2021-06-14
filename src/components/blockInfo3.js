import icon from "../assets/img/BlockInfoThree/icon.png";
import icon2 from "../assets/img/BlockInfoThree/icon2.png";
import background1 from "../assets/img/BlockInfoThree/background1.png";
import "../sass/blockInfo3.scss";

const BlockInfoThree = () => (
	<div className="blockInfoThree">
		<div className="blockInfoThree-wrap">
			<div className="blockInfoThree-left item">
				<div className="blockInfoThree-img"><a href="#"><img src={icon2} alt="" /></a></div>
			</div>
			<div className="blockInfoThree-right item">
				<div className="blockInfoThree-top">
					<img src={icon} alt="" />
					<div className="blockInfoThree-title">La Boriosa</div>
					<div className="blockInfoThree-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived.
					</div>
				</div>
				<div className="blockInfoThree-bottom">
					<img src={background1} width="100%" alt="" />
				</div>
			</div>
		</div>
	</div>
)

export default BlockInfoThree;