import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from "./components/routes/Routes";




function App() {
	return (
		<div>
			<Router>
				<RouteList />
			</Router>
		</div>
	);
}
export default App;

