import { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Home from './components/Home';
import Products from './components/Products';
import axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import {actAddStore, actLoai} from './action/actProduct'
import ShowCata from './components/showListCata'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Baocao from './components/baocao';

function App(props) {
  React.useEffect(() => {
    var product = [];
    var cata = [];
    axios({
      method: 'GET',
      url: 'http://localhost:3500/sanPham',
      data: null
    }).then(res => {
      product = res.data
      props.addStore(product);
    })
    .catch(err => {
      console.log(err);
    });
    axios({
      method: 'GET',
      url: 'http://localhost:3500/loaiSP',
      data: null
    }).then(res => {
      cata = res.data
      props.addtoStore(cata);
    })
    .catch(err => {
      console.log(err);
    });

  }, []);
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
          <Route path="/baocao" component={ Baocao} />
          <Route path="/catalog/:id" component={ShowCata} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={Detail} />
        </Switch>
        <MessengerCustomerChat
          pageId="103740841446911"
          appId="215846203807687"
        />
      </Router>
  )
}
const addToStore = (dispatch) => {
  return {
    addStore: (array) => {
      dispatch(actAddStore(array));
    },
    addtoStore: (ary) => {
      dispatch(actLoai(ary));
    },
  };
};
export default connect(null, addToStore)(App);
