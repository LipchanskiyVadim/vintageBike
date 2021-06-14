import img1 from "../source/img/footer/1.png";
import img2 from "../source/img/footer/2.png";
import img3 from "../source/img/footer/3.png";
import img4 from "../source/img/footer/4.png";
import "../sass/footer.scss";

const Footer = () => (
	<div className="footer">
		<div className="container">
			<div className="footer-wrap">
				<div className="footer-left">
					AOD New York<br />
					<span>2250 Lexington Avenue<br />
						New York, NY 10035 - info@domain.com</span>
				</div>
				<div className="footer-center">
					<a href="#"><img src={img1} className="img360" alt="" /></a>
					<a href="#"><img src={img2} className="img360" alt="" /></a>
					<a href="#"><img src={img3} className="img360" alt="" /></a>
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