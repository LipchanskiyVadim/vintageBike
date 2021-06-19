import { useRef, useState } from "react";
import "../sass/burger.scss";
import img from "../assets/img/header/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

const Burger = () => {
	const [isActive, setIsActive] = useState("");
	const button = useRef(null);

	const sidebarUpdater = (color, overflow) => {
		document.body.style.overflow = overflow;

		button.current.childNodes.forEach(element => {
			element.style.background = color;
		});
	}

	const sidebarActive = () => {
		setIsActive(isActive === "" ? 'active' : "");

		isActive ?
			sidebarUpdater("black", "") : sidebarUpdater("white", "hidden");
	}

	return (
		<div className="burger">
			<div className="toggle-btn" onClick={sidebarActive} ref={button}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={["sidebar", isActive].join(" ")}>
				<ul>
					<li className="nav-li"><Link to="/#header"><img src={img} alt="" /></Link></li>
					<li className="nav-li" onClick={sidebarActive} ><Link to="/#about">about us</Link></li>
					<li className="nav-li" onClick={sidebarActive}><Link to="/#work">work</Link></li>
					<li className="nav-li" onClick={sidebarActive}><Link to="/#shop">shop</Link></li>
					<li className="nav-li" onClick={sidebarActive}><Link to="/#contact">contact</Link></li>

				</ul>
			</div >
		</div >
	)
};

export default Burger;