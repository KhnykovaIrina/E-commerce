import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/common/Footer/Footer";
import ROUTES from "./components/routes/Routes";

function App() {
	return (
		<div>
			<Router>
				<ROUTES />
				<Footer />
			</Router>
		</div>
	);
}
export default App;

