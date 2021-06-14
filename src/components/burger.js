import { useRef } from "react";
import "../sass/burger.scss";
import img from "../source/img/header/logo.png";

const Burger = () => {
	const sidebar = useRef(null);
	const button = useRef(null);

	const sidebarUpdater = (color, overflow) => {
		document.body.style.overflow = overflow;
		button.current.childNodes.forEach(element => {
			element.style.background = color;
		});
	}

	const sidebarActive = () => {
		sidebar.current.classList.toggle('active');

		sidebar.current.classList.contains('active') ?
			sidebarUpdater("white", "hidden") : sidebarUpdater("black", "");
	}


	return (
		<div className="burger">
			<div className="toggle-btn" onClick={sidebarActive} ref={button}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="sidebar" ref={sidebar}>
				<ul>
					<li className="nav-li"><a href="#"><img src={img} /></a></li>
					<li className="nav-li"><a href="#">ABOUT US</a></li>
					<li className="nav-li"><a href="#">WORK</a></li>
					<li className="nav-li"><a href="#">SHOP</a></li>
					<li className="nav-li"><a href="#">CONTACT</a></li>
				</ul>
			</div >
		</div>
	)
};

export default Burger;