import './App.css';
import BlockInfo5 from './components/blockInfo5';
import BlockInfo4 from './components/blockInfo4';
import BlockInfo1 from './components/blockInfo1';
import BlockInfo6 from './components/blockInfo6';
import BlockInfo3 from './components/blockInfo3.js';
import BlockInfo2 from './components/blockInfo2';
import Burger from './components/burger';
import Footer from './components/footer';
import Header from './components/header';
import SliderBlock from './components/sliderBlock';

function App() {
	return (
		<div className="wrapper">
			<Burger />
			<Header />
			<BlockInfo1 />
			<BlockInfo2 />
			<BlockInfo3 />
			<BlockInfo4 />
			<SliderBlock />
			<BlockInfo5 />
			<BlockInfo6 />
			<Footer />
		</div>
	)
}

export default App;