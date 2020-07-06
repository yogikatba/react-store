import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductList from './components/ProuctList'
import Default from './components/Default'
import Details from './components/Details'
import {Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
