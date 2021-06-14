import { useRef, useState } from "react";
import "../sass/slider.scss";
import img1 from "../source/img/slider/Icon.png";
import img2 from "../source/img/slider/Icon2.png";
import img3 from "../source/img/slider/Icon3.png";
import CreateSlide from "./createSlide";

const SliderBlock = () => {

	const createHundler = (value) => {
		slider.current.childNodes.forEach(element => {
			element.style.transform = `translateX(${value})`;
		});
		setState(value);
	}

	const [state, setState] = useState(0);

	const slider = useRef(null);

	const nextHandler = () => {
		if (state == 0) {
			createHundler("-100%");
		} else if (state == "-100%") {
			createHundler("-200%");
		}
	}

	const prevHandler = () => {
		if (state == "-100%") {
			createHundler(0);
		} else if (state == "-200%") {
			createHundler("-100%")
		}
	}

	return (
		<div className="sliderBlock">
			<div className="slider-track" ref={slider}>
				<CreateSlide img={img1} title="@aod" />
				<CreateSlide img={img2} title="/aod" />
				<CreateSlide img={img3} title="aod" />
			</div>
			<div className="button-block">
				<button className="slider-button" onClick={prevHandler}><span>&#5176;</span></button>
				<button className="slider-button" onClick={nextHandler}><span>&#5171;</span></button>
			</div>
		</div>
	)
}
export default SliderBlock;