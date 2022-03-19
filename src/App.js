import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ROUTES from "./components/routes/Routes";

function App() {
	return (
		<div>
			<Router>
				<ROUTES />
			</Router>
		</div>
	);
}
export default App;

