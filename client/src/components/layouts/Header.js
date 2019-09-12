import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home';
import { SignIn, SignUp } from '../Index';

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /** PC Header Start */
  .pcHeader {
    width: 80rem;
    padding: 0 2.5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .pcHeader .logo,
  .pcHeader .menu {
    flex: 1;
  }

  .pcHeader .logo link {
    cursor: pointer;
  }

  .pcHeader .menu {
    display: flex;
    flex-direction: row-reverse;
  }

  .pcHeader .menu div {
    display: flex;
    align-items: center;
    height: 3.8rem;
    text-align: center;
    margin: 0 1rem;
    cursor: pointer;
    border-bottom: 2px solid #0a8a8a;
    transition: all 0.3s;
  }

  .pcHeader .menu div:hover {
    border-bottom: 2px solid #ffffff;
  }

  /** Mobile Header Start */
  .mbHeader {
    display: none;
  }

  /** Responsive */
  @media (max-width: 600px) {
    .pcHeader {
      display: none;
    }
    .mbHeader {
      display: flex;
    }
  }
`;

export default class Header extends Component {
  render() {
    return (
      <>
        <HeaderWrap className="fw-bgcolor">
          {/** pcHeader start */}
          <div className="pcHeader">
            <div className="logo">
              <Link to="/">Food War</Link>
            </div>
            <div className="menu">
              <div>
                <Link to="/signin">Sign In</Link>
              </div>
              <div>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
          {/** pcHeader end */}

          {/** mbHeader start */}
          <div className="mbHeader">mobile</div>
          {/** mbHeader end */}
        </HeaderWrap>

        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </>
    );
  }
}
