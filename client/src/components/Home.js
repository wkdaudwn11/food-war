import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import SignIn from './users/SignIn';
import SignUp from './users/SignUp';
// import homeVideo from '../images/homeVideo.mp4';

const HomeWrap = styled.div`
  #background-video {
    height: 100%;
    width: 100%;
    top: 0;
    padding: none;
  }

  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container .left-contents,
  .container .right-contents {
    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .container .left-contents {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a8a8a;
  }

  .container .left-contents .contents {
    color: #ffffff;
    width: 80%;
    margin: 0 auto;
  }

  .container .left-contents .contents p {
    font-weight: 300;
    font-size: 1.7rem;
  }

  .container .left-contents .contents p:nth-child(1) {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .container .left-contents .contents p:nth-child(2) {
    font-size: 2rem;
  }

  .container .left-contents .contents p + p {
    margin-top: 1.5rem;
  }

  .container .right-contents {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
  }

  @media (max-width: 1200px) {
    .container .left-contents .contents,
    .container .right-contents .contents {
      width: 90%;
    }
  }

  @media (max-width: 900px) {
    .container {
      display: block;
    }

    .container .left-contents {
      height: auto;
      min-height: 300px;
    }

    .container .left-contents .contents {
      padding: 1rem 0;
    }

    .container .right-contents {
      height: auto;
    }

    .container .right-contents {
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 600px) {
    .title {
      font-size: 1.5rem;
    }

    .container .left-contents,
    .container .right-contents {
      padding: 1rem;
      display: block;
    }

    .container .left-contents {
      margin-bottom: 0;
    }

    .container .left-contents .contents,
    .container .right-contents .contents {
      width: 100%;
    }

    .container .left-contents .contents p {
      font-size: 13px;
    }

    .container .left-contents .contents p:nth-child(1) {
      font-size: 20px;
    }

    .container .left-contents .contents p:nth-child(2) {
      font-size: 17px;
    }

    .container .right-contents .contents .social-login div {
      font-size: 14px;
    }
  }

  @media (max-width: 450px) {
    .container .left-contents,
    .container .right-contents {
      min-height: 0px;
    }

    .container .right-contents .contents .title {
      font-size: 1rem;
      font-weight: 400;
    }

    .container .right-contents .contents .input-with-button {
      width: 100%;
    }

    .container .right-contents .contents .input-with-button input {
      display: block;
      width: 100%;
      height: 50px;
      font-size: 14px;
      border-radius: 3px 0 0 3px;
    }

    .container .right-contents .contents .input-with-button .button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0a8a8a;
      color: #ffffff;
      height: 50px;
      font-size: 14px;
      border-radius: 0 3px 3px 0;
      cursor: pointer;
      transition: all 0.3s;
    }
  }
`;

export default class Home extends Component {
  render() {
    return (
      <HomeWrap className="default-bgcolor">
        {/* <video id='background-video' loop autoPlay>
          <source src={homeVideo} type='video/mp4' />
          <source src={homeVideo} type='video/ogg' />
          Your browser does not support the video tag.
        </video> */}
        <div className="container">
          <div className="left-contents">
            <div className="contents">
              <p>Food War</p>
              <p>
                오늘은 뭐 먹지??
                <br />
                매번 메뉴 고르는 것도 완전 전쟁이야..
              </p>
              <p>매일매일 고민하기 귀찮다면 지금 당장 이용해보세요!</p>
            </div>
          </div>
          <div className="right-contents">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/food-war" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/food-war/signup" component={SignUp} />
          </div>
        </div>
      </HomeWrap>
    );
  }
}
