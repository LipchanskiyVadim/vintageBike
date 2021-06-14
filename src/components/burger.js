import { useRef } from "react";
import "../sass/burger.scss";
import img from "../assets/img/header/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

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
					<li className="nav-li" onClick={sidebarActive} ><Link to="/#about">about us</Link></li>
					<li className="nav-li" onClick={sidebarActive}><Link to="/#work">work</Link></li>
					<li className="nav-li" onClick={sidebarActive}><Link to="/#shop">shop</Link></li>
					<li className="nav-li" onClick={sidebarActive}><Link to="/#contact">contact</Link></li>

				</ul>
			</div >
		</div>
	)
};

export default Burger;