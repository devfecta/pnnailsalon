import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Pricing from './components/Pricing';

function App() {
  return (

	<Router basename="/">
		<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pricing" element={<Pricing title={"Pricing - " + document.title} />} />
				</Routes>
			</main>
		<Footer />
	</Router>

  );
}

export default App;
