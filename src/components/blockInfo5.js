import img1 from "../assets/img/blockInfoFive/1.png";
import img2 from "../assets/img/blockInfoFive/2.png";
import img3 from "../assets/img/blockInfoFive/3.png";
import img4 from "../assets/img/blockInfoFive/4.png";
import img5 from "../assets/img/blockInfoFive/5.png";
import icon from "../assets/img/blockInfoFive/icon.png";
import img6 from "../assets/img/blockInfoFive/7.png";
import img7 from "../assets/img/blockInfoFive/8.png";
import { HashLink as Link } from 'react-router-hash-link';

const BlockInfoFive = () => (
	<div className="blockInfoFive" id="shop">
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
						<Link to="/#header"><img src={icon} alt="" /></Link>
					</div>
					<div className="blockInfoFive-right-bottom">
						<img src={img6} width="50%" alt="" />
						<img src={img7} width="50%" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div className="blockInfoFive-bottom">
			<div className="blockInfoFive-button"><Link to="/#header">DISCOVER THE SHOP</Link></div>
		</div>
	</div>
)

export default BlockInfoFive;