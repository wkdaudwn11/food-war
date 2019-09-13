import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Lottie from 'react-lottie';
import menuLottie from '../../lotties/menu-V2.json';

import Home from '../Home';
import { SignIn, SignUp } from '../Index';

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /** PC Header Start */
  .pc-header {
    width: 80rem;
    padding: 0 2.5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 1rem;
  }

  .pc-header .logo,
  .pc-header .menu {
    flex: 1;
  }

  .pc-header .logo link {
    cursor: pointer;
  }

  .pc-header .menu {
    display: flex;
    flex-direction: row-reverse;
  }

  .pc-header .menu div {
    display: flex;
    align-items: center;
    height: 3.8rem;
    text-align: center;
    margin: 0 1rem;
    cursor: pointer;
    border-bottom: 2px solid #0a8a8a;
    transition: all 0.3s;
  }

  .pc-header .menu div:hover {
    border-bottom: 2px solid #ffffff;
  }

  /** Mobile Header Start */
  .mb-header {
    display: none;
    width: 100%;
    height: 2rem;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    padding: 0 1rem;
  }

  .mb-header .mb-logo {
    flex: 9;
  }

  .mb-header .mb-menu {
    flex: 1;
    color: #ffffff;
  }

  path {
    stroke: rgb(255, 255, 255);
  }

  /** Responsive */
  @media (max-width: 600px) {
    .pc-header {
      display: none;
    }

    .mb-header {
      display: flex;
      align-items: center;
    }
  }
`;

class Header extends Component {
  state = {
    isStopped: true
  };

  onMenuLottieClick = () => {
    this.setState({
      isStopped: !this.state.isStopped
    });
  };

  render() {
    const { location } = this.props;
    const { isStopped, isPaused } = this.state;
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: menuLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <>
        <HeaderWrap className="fw-bgcolor">
          {/** pc-header start */}
          <div className="pc-header">
            <div className="logo">
              <Link to="/">Food War</Link>
            </div>
            <div className="menu">
              {location.pathname === '/signin' ? (
                <div style={{ borderBottom: '2px solid #FFFFFF' }}>
                  <Link to="/signin">Sign In</Link>
                </div>
              ) : (
                <div>
                  <Link to="/signin">Sign In</Link>
                </div>
              )}
              {location.pathname === '/signup' ? (
                <div style={{ borderBottom: '2px solid #FFFFFF' }}>
                  <Link to="/signup">Sign Up</Link>
                </div>
              ) : (
                <div>
                  <Link to="/signup">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
          {/** pc-header end */}

          {/** mb-header start */}
          <div className="mb-header">
            <div className="mb-logo">Food War</div>
            <div className="mb-menu" onClick={this.onMenuLottieClick}>
              <Lottie options={defaultOptions} height={30} width={30} isStopped={isStopped} />
            </div>
          </div>
          {/** mb-header end */}
        </HeaderWrap>

        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </>
    );
  }
}

export default withRouter(Header);
