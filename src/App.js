import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Basket from "./Pages/Basket";
import Products from "./Pages/Products";


const App = () => {
	return (
		
		<Router>
			<Header />
			<main>
		     <div className="background-container">
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/rocks-basket'>
						<Basket />
					</Route>
					<Route path='/products'>
						<Products />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				</div>
			</main>
			<Footer />
		</Router>
	);
};

export default App;

