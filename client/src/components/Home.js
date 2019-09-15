import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import classnames from 'classnames';
import Lottie from 'react-lottie';
import githubLottie from '../lotties/github.json';
import facebookLottie from '../lotties/facebook.json';
import googleLottie from '../lotties/google.json';
import homeVideo from '../images/homeVideo.mp4';

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

  .container .right-contents .contents {
    background-color: #ffffff;
    color: #000000;
    width: 70%;
    margin: 0 auto;
    padding: 20px;
  }

  .container .right-contents .contents div + div {
    margin-top: 1rem;
  }

  .container .right-contents .contents .title {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .container .right-contents .contents .input-with-button {
    width: 100%;
    flex-direction: column;
  }

  .container .right-contents .contents .input-with-button input {
    display: block;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    border-radius: 3px 0 0 3px;
  }

  .container .right-contents .contents .input-with-button input + input,
  .container .right-contents .contents .input-with-button input + button {
    margin-top: 0.5rem;
  }

  .container .right-contents .contents .input-with-button .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a8a8a;
    color: #ffffff;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
  }

  .container .right-contents .contents .input-with-button .button:hover {
    opacity: 0.9;
  }

  .container .right-contents .contents .separator {
    height: 1px;
    width: 100%;
    background-color: #ced4da;
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }

  .container .right-contents .contents .separator .or {
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #fff;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.85em;
    font-weight: 600;
    color: #212529;
  }

  .container .right-contents .contents .social-login div {
    display: flex;
    align-items: center;
    height: 50px;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .container .right-contents .contents .social-login div div:nth-child(1) {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container .right-contents .contents .social-login div div:nth-child(2) {
    flex: 9;
    margin-top: 0;
    margin-left: 20px;
  }

  .container .right-contents .contents .social-login .github {
    background-color: #dfe4e7;
    color: #000000;
  }
  .container .right-contents .contents .social-login .google {
    background-color: #bd1121;
    color: #ffffff;
  }
  .container .right-contents .contents .social-login .facebook {
    background-color: #0950a8;
    color: #ffffff;
  }

  .not-login {
    font-size: 14px;
    padding-top: 1rem;
    text-align: right;
    border-top: 1px solid #ced4da;
  }

  .not-login span {
    cursor: pointer;
    transition: all 0.3s;
  }

  .not-login span:hover {
    font-weight: bold;
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
      min-height: 750px;
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
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const sendData = {
      email: this.state.email,
      password: this.state.password
    };

    if (sendData.email === '') {
      this.setState({
        errors: {
          email: '이메일을 입력해주세요.'
        }
      });
    } else if (sendData.password === '') {
      this.setState({
        errors: {
          password: '비밀번호를 입력해주세요.'
        }
      });
    } else {
      this.setState({
        errors: {}
      });
      // axios
      //   .get(
      //     'https://cdfhf8p3qe.execute-api.ap-northeast-2.amazonaws.com/dev/user/signin',
      //     sendData
      //   )
      //   .then(res => console.log(res.data))
      //   //.catch(err => this.setState({ errors: err.response.data }));
      //   .catch(err => console.log(err));
    }
  };

  render() {
    const { email, password, errors } = this.state;
    const lottiesInfo = [
      {
        loop: true,
        autoplay: true,
        animationData: githubLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      {
        loop: true,
        autoplay: true,
        animationData: googleLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      {
        loop: true,
        autoplay: true,
        animationData: facebookLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
    ];
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
            <div className="contents">
              <div className="title">지금 푸드워를 시작하세요.</div>
              <div className="input-with-button">
                <form onSubmit={this.onSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="이메일을 입력해주세요."
                    onChange={this.onChange}
                    required
                    className={classnames('default-border', {
                      'is-invalid': errors.email
                    })}
                  />
                  {errors.email && <div className="fw-invalid-feedback">{errors.email}</div>}
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="비밀번호를 입력해주세요."
                    required
                    onChange={this.onChange}
                    className={classnames('default-border', {
                      'is-invalid': errors.password
                    })}
                  />
                  {errors.password && <div className="fw-invalid-feedback">{errors.password}</div>}
                  <button className="button" type="submit">
                    시작하기
                  </button>
                </form>
              </div>
              <div className="separator">
                <div className="or">OR</div>
              </div>
              <div className="social-login">
                <div className="github">
                  <div>
                    <Lottie options={lottiesInfo[0]} width={50} height={50} />
                  </div>
                  <div>Github 로그인</div>
                </div>
                <div className="google">
                  <div>
                    <Lottie options={lottiesInfo[1]} width={50} height={50} />
                  </div>
                  <div>Google 로그인</div>
                </div>
                <div className="facebook">
                  <div>
                    <Lottie options={lottiesInfo[2]} width={50} height={50} />
                  </div>
                  <div>Facebook 로그인</div>
                </div>
              </div>
              <div className="not-login fw-color">
                <span>로그인하지 않고 사용하기</span>
              </div>
            </div>
          </div>
        </div>
      </HomeWrap>
    );
  }
}
