import React, { Component } from 'react';
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
import { NotFoundPage } from './pages/NotFound';
import { ProductPage } from './pages/Product';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <NavBar />
            <div className="page-wrapper">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/account" component={AccountPage} />
                <Route exact path="/catalogue" component={CataloguePage} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
