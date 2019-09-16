import React, { Component } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import githubLottie from '../../lotties/github.json';
import facebookLottie from '../../lotties/facebook.json';
import googleLottie from '../../lotties/google.json';

const SignInWrap = styled.div`
  width: 80%;

  .contents {
    background-color: #ffffff;
    color: #000000;
    width: 70%;
    margin: 0 auto;
    padding: 20px;
  }

  .contents .social-login div + div {
    margin-top: 1rem;
  }

  .contents .title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .contents .input-with-button {
    width: 100%;
    flex-direction: column;
  }

  .contents .input-with-button input {
    display: block;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    border-radius: 3px 0 0 3px;
  }

  .contents .input-with-button input + input,
  .contents .input-with-button input + button {
    margin-top: 0.5rem;
  }

  .contents .input-with-button .button {
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

  .contents .input-with-button .button:hover {
    opacity: 0.9;
  }

  .contents .separator {
    height: 1px;
    width: 100%;
    background-color: #ced4da;
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }

  .contents .separator .or {
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

  .contents .social-login div {
    display: flex;
    align-items: center;
    height: 50px;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  .contents .social-login div:hover {
    opacity: 0.9;
  }

  .contents .social-login div div:nth-child(1) {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contents .social-login div div:nth-child(2) {
    flex: 9;
    margin-top: 0;
    margin-left: 20px;
  }

  .contents .social-login .github {
    background-color: #dfe4e7;
    color: #000000;
  }

  .contents .social-login .google {
    background-color: #bd1121;
    color: #ffffff;
  }

  .contents .social-login .facebook {
    background-color: #0950a8;
    color: #ffffff;
  }

  .not-login {
    font-size: 14px;
    margin-top: 1rem;
    padding-top: 1rem;
    text-align: right;
    border-top: 1px solid #ced4da;
    display: flex;
  }

  .not-login div {
    flex: 1;
    align-items: center;
  }

  .not-login div:nth-child(1) {
    text-align: left;
  }

  .not-login div span {
    cursor: pointer;
    transition: all 0.3s;
  }

  .not-login div span:hover {
    text-decoration: underline;
  }

  @media (max-width: 1200px) {
    & {
      width: 90%;
    }
  }

  @media (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

export default class SignIn extends Component {
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
      <SignInWrap>
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
            <div>
              <span>비밀번호 찾기</span>
            </div>
            <div>
              <span>
                <Link to="/signup">회원가입</Link>
              </span>
            </div>
          </div>
        </div>
      </SignInWrap>
    );
  }
}
