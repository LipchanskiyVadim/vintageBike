import logo from "../assets/img/blockInfoSix/logo.png";
import { Formik } from "formik";
import { HashLink as Link } from 'react-router-hash-link';

const BlockInfoSix = () => (
	<div className="blockInfoSix">
		<div className="blockInfoSix-logo">
			<Link to="/#header"><img src={logo} alt="" /></Link>
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