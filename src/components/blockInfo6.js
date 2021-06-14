import logo from "../source/img/blockInfoSix/logo.png";
import "../sass/blockInfo6.scss";
import { Formik } from "formik";

const BlockInfoSix = () => (
	<div className="blockInfoSix">
		<div className="blockInfoSix-logo">
			<a href="#"><img src={logo} alt="" /></a>
		</div>
		<div className="blockInfoSix-title">
			Stay on the saddle!
		</div>
		<Formik
			initialValues={{
				value: '',
			}}>
			{({ values, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
				<div className="blockInfoSix-wrap" >
					<div className="blockInfoSix-input">
						<input type="search" placeholder="enter your email..."
							name={`value`} value={values.value} onChange={handleChange} onBlur={handleBlur} />
					</div>
					<span>
						<button disabled={!isValid && !dirty} type="submit" onClick={handleSubmit}>GO</button>
					</span>
				</div>
			)}
		</Formik>
	</div >
)

export default BlockInfoSix;