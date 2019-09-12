import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Index from '../Home';
import { SignIn, SignUp } from '../index';

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Index} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}
