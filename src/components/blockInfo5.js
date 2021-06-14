import img1 from "../source/img/blockInfoFive/1.png";
import img2 from "../source/img/blockInfoFive/2.png";
import img3 from "../source/img/blockInfoFive/3.png";
import img4 from "../source/img/blockInfoFive/4.png";
import img5 from "../source/img/blockInfoFive/5.png";
import icon from "../source/img/blockInfoFive/icon.png";
import img6 from "../source/img/blockInfoFive/7.png";
import img7 from "../source/img/blockInfoFive/8.png";
import "../sass/blockInfo5.scss";

const BlockInfoFive = () => (
	<div className="blockInfoFive">
		<div className="blockInfoFive-head">
			<div className="blockInfoFive-wrap">
				<div className="blockInfoFive-left">
					<div className="blockInfoFive-left-top">
						<img src={img1} width="50%" alt="" />
						<img src={img2} width="50%" alt="" />
					</div>
					<div className="blockInfoFive-left-bottom">
						<img src={img3} width="100%" alt="" />
					</div>
				</div>
				<div className="blockInfoFive-center">
					<img src={img4} width="50%" alt="" />
					<img src={img5} width="50%" alt="" />
				</div>
				<div className="blockInfoFive-right">
					<div className="blockInfoFive-right-top">
						<a href="#"><img src={icon} alt="" /></a>
					</div>
					<div className="blockInfoFive-right-bottom">
						<img src={img6} width="50%" alt="" />
						<img src={img7} width="50%" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div className="blockInfoFive-bottom">
			<div className="blockInfoFive-button"><a href="#">DISCOVER THE SHOP</a></div>
		</div>
	</div>
)

export default BlockInfoFive;