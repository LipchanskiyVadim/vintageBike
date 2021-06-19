import img1 from "../assets/img/footer/1.png";
import img2 from "../assets/img/footer/2.png";
import img3 from "../assets/img/footer/3.png";
import img4 from "../assets/img/footer/4.png";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => (
	<div className="footer" id="contact">
		<div className="container">
			<div className="footer-wrap">
				<div className="footer-left">
					AOD New York<br />
					<span>2250 Lexington Avenue<br />
						New York, NY 10035 - info@domain.com</span>
				</div>
				<div className="footer-center">
					<Link to="/#header"><img src={img1} className="img360" alt="" /></Link>
					<Link to="/#header"><img src={img2} className="img360" alt="" /></Link>
					<Link to="/#header"><img src={img3} className="img360" alt="" /></Link>
				</div>
				<div className="footer-right">
					<div className="footer-subtitle">Handcrafted by</div>
					<img src={img4} alt="" />
				</div>
			</div>
		</div>
	</div>
);

export default Footer;