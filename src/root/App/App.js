import React,{useEffect} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from "../../components/routes/Routes";


const App = (props) => {
	const { token, fetchToken } = props;

	useEffect(() => {
		if (!token) {
			fetchToken();
		}
	}, [token, fetchToken]);

	return (
		<div>
			<Router>
				<RouteList />
			</Router>
		</div>
	);
}
export default App;

