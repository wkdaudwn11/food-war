import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import $ from 'jquery';
import Lottie from 'react-lottie';
import menuLottie from '../../lotties/menu-V2.json';

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
    height: 4rem;
    color: #ffffff;
    font-size: 1.1rem;
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

  #mb-sidebar {
    display: none;
    position: absolute;
    top: 7vh;
    left: 100%;
    width: 100%;
    height: 93vh;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
  }

  #mb-sidebar div + div {
    margin-top: 2rem;
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

    this.onSideMenu(this.state.isStopped);
  };

  onSideMenu = isStop => {
    if (isStop) {
      $('#mb-sidebar').css('display', 'flex');
      $('#mb-sidebar').css('flex-direction', 'column');
      $('#mb-sidebar').animate({ left: '0%' }, 800);
    } else {
      $('#mb-sidebar').animate({ left: '100%' }, 800, () => {
        $('#mb-sidebar').css('display', 'none');
      });
    }
  };

  render() {
    const { location } = this.props;
    const { isStopped } = this.state;
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
        <HeaderWrap className='fw-bgcolor'>
          {/** pc-header start */}
          <div className='pc-header'>
            <Link to='/food-war/'>
              <div className='logo'>Food War</div>
            </Link>
            <div className='menu'>
              {location.pathname === '/food-war/signup' ? (
                <Link to='/food-war/signup'>
                  <div style={{ borderBottom: '2px solid #FFFFFF' }}>
                    Sign Up
                  </div>
                </Link>
              ) : (
                <Link to='/food-war/signup'>
                  <div>Sign Up</div>
                </Link>
              )}
              {location.pathname === '/food-war/signin' ? (
                <Link to='/food-war/signin'>
                  <div style={{ borderBottom: '2px solid #FFFFFF' }}>
                    Sign In
                  </div>
                </Link>
              ) : (
                <Link to='/food-war/signin'>
                  <div>Sign In</div>
                </Link>
              )}
            </div>
          </div>
          {/** pc-header end */}

          {/** mb-header start */}
          <div className='mb-header'>
            <div className='mb-logo'>
              <Link to='/food-war/'>Food War</Link>
            </div>
            <div className='mb-menu' onClick={this.onMenuLottieClick}>
              <Lottie
                options={defaultOptions}
                height={30}
                width={30}
                isStopped={isStopped}
              />
            </div>
          </div>
          {/** mb-header end */}
          <div id='mb-sidebar' className='fw-bgcolor'>
            <div onClick={this.onMenuLottieClick}>
              {location.pathname === '/food-war/signin' ? (
                <div>
                  <Link
                    to='/food-war/signin'
                    style={{ borderBottom: '2px solid #FFFFFF' }}
                  >
                    Sign In
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to='/food-war/signin'>Sign In</Link>
                </div>
              )}
            </div>

            <div onClick={this.onMenuLottieClick}>
              {location.pathname === '/food-war/signup' ? (
                <div>
                  <Link
                    to='/food-war/signup'
                    style={{ borderBottom: '2px solid #FFFFFF' }}
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to='/food-war/signup'>Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </HeaderWrap>
      </>
    );
  }
}

export default withRouter(Header);
