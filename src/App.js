import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import SwipingPage from './pages/SwipingPage/SwipingPage';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Route exact path="/">
				<Login />
			</Route>
			<Route exact path="/app">
				<SwipingPage />
			</Route>
		</Router>
	);
}

export default App;

//yarn add spotify-web-api-js