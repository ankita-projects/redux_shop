import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Products from "./pages/Products";


const App = () => {
	return (
		<Router>
			<Header />
			<main>
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
			</main>
			<Footer />
		</Router>
	);
};

export default App;

