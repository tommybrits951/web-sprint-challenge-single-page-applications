import "./App.css"
import React from "react";
import { NavLink, Route } from "react-router-dom"
import Home from "./components/Home"
import Form from "./components/Form"



const App = () => {
  return (
    <>
      <nav>
      <h1>BloomTech Eats</h1>
      <div className="links">

        <NavLink to="/" className="navlink">Home</NavLink>
        <NavLink to="/" className="navlink">Help</NavLink>
      </div>
      </nav>
      <NavLink to="/pizza" id="order-pizza">Pizza?</NavLink>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pizza">
        <Form />
      </Route>
      </>
  );
};
export default App;
