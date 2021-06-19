import logo from "../assets/img/header/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => (
	<header className="header">
		<div className="header-content" id="header">
			<nav>
				<ul>
					<Link className="nav-li" to="/#about">about us</Link>
					<Link className="nav-li" to="/#work">work</Link>
					<Link className="nav-li" to="/#shop">shop</Link>
					<Link className="nav-li" to="/#contact">contact</Link>
				</ul>
			</nav>
			<div className="header-logo">
				<Link to="/#header"><img src={logo} alt="" /></Link>
			</div>
		</div>
		<div className="header-title"><Link to="/#header">Vintage Bike<br />Shop</Link></div>
	</header >
)

export default Header;