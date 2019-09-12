import React, { Component } from 'react';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/layouts/Header';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
      </>
    );
  }
}
