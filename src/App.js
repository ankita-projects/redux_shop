import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeState } from "./store/actions/actions";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeState());
  }, [dispatch]);

  const cartItemCount = useSelector((state) =>
    state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  );

  return (
    <BrowserRouter>
	  <Header />
	  <Footer />
      <Navigation cartItemCount={cartItemCount} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
