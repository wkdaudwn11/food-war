import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from './components/Home';
import { SignIn, SignUp } from './components/index';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        {/* <Header /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/food-war' component={Home} />
        <Route path='/food-war/signin' component={SignIn} />
        <Route path='/food-war/signup' component={SignUp} />
        {/* <Footer /> */}
      </>
    );
  }
}
