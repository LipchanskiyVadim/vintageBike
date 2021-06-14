import logo from "../assets/img/header/logo.png";
import "../sass/header.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => (
	<header className="header">
		<div className="header-content">
			<nav>
				<ul>
					<Link className="nav-li" to="/#about">about us</Link>
					<Link className="nav-li" to="/#work">work</Link>
					<Link className="nav-li" to="/#shop">shop</Link>
					<Link className="nav-li" to="/#contact">contact</Link>
				</ul>
			</nav>
			<div className="header-logo">
				<a href="#"><img src={logo} alt="" /></a>
			</div>
		</div>
		<div className="header-title"><a href="#">Vintage Bike<br />Shop</a></div>
	</header >
)

export default Header;