import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';



function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/detail/:id">
						<Detail/>
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route exact path="/">
						<Login />
					</Route>
				</Switch>
			</Router>

		</div>
	);
}

export default App;
