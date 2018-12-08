import React, { Component } from 'react';
import Web3 from 'web3';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';

import { AccountPage } from './pages/Account.js';
import { CataloguePage } from './pages/Catalogue';
import { HomePage } from './pages/Home.js';
import { FourOhFourPage } from './pages/FourOhFour';
import { ProductPage } from './pages/Product';

class App extends Component {
  render() {
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    return (
      <Router>
          <div>
            <NavBar />
            <div className="page-wrapper">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/account" component={AccountPage} />
                <Route exact path="/catalogue" component={CataloguePage} />
                <Route exact path="/product/:productId" component={ProductPage} />
                <Route component={FourOhFourPage} />
              </Switch>
            </div>
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
