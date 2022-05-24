import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from "../../components/routes/Routes";


const App = (props) => {
	const {
		token,
		categories,
		fetchToken,
		fetchCategories
	} = props;

	useEffect(() => {
		if (!token) {
			fetchToken();
		}

		if (!categories.length) {
			fetchCategories();
		}
	}, [token, fetchToken, fetchCategories]);

	return (
		<div>
			<Router>
				<RouteList />
			</Router>
		</div>
	);
}
export default App;

