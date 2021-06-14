import logo from "../source/img/header/logo.png";
import "../sass/header.scss";

const Header = () => (
	<header className="header">
		<div className="header-content">
			<nav>
				<ul>
					<li className="nav-li"><a href="#">about us</a></li>
					<li className="nav-li"><a href="#">work</a></li>
					<li className="nav-li"><a href="#">shop</a></li>
					<li className="nav-li"><a href="#">contact</a></li>
				</ul>
			</nav>
			<div className="header-logo">
				<a href="#"><img src={logo} alt="" /></a>
			</div>
		</div>
		<div className="header-title"><a href="#">Vintage Bike<br />Shop</a></div>
	</header>
)

export default Header;