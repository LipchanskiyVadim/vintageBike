import icon from '../assets/img/blockInfoTwo/icon.png';
import icon2 from '../assets/img/blockInfoTwo/icon2.png';
import background from '../assets/img/blockInfoTwo/background2.png';
import '../sass/blockInfo2.scss';

const BlockInfoTwo = () => (
	<div className="blockInfoTwo">
		<div className="blockInfoTwo-wrap">
			<div className="blockInfoTwo-left">
				<div className="blockInfoTwo-img"><a href="#"><img src={icon} alt="" /></a></div>
			</div>
			<div className="blockInfoTwo-right">
				<div className="blockInfoTwo-top">
					<img src={icon2} alt="" />
					<div className="blockInfoTwo-title">vintage Oliva</div>
					<div className="blockInfoTwo-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived.
					</div>
				</div>
				<div className="blockInfoTwo-bottom">
					<img src={background} width="100%" alt="" />
				</div>
			</div>
		</div>
	</div>
)

export default BlockInfoTwo;