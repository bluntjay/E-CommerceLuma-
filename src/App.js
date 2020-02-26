import React, {Component} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import Women from "./Components/Women.js";
import Men from "./Components/Men.js";
import Gear from "./Components/Gear.js";
import Training from "./Components/Training.js";
import Sale from "./Components/Sale.js";
import Cart from "./Components/Cart.js";
import Footer from "./Components/Footer.js";

export default class App extends Component{
  render(){
    return(
     <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Women" component={Women}/>
          <Route path="/Men" component={Men}/>
          <Route path="/Gear" component={Gear}/>
          <Route path="/Training" component={Training}/>
          <Route path="/Sale" component={Sale}/>
          <Route path="/Cart" component={Cart}/>
        </Switch>
      </div>
        <Footer/>
      </BrowserRouter>
      )
  }
}


 

 

  