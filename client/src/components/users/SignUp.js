import React, { Component } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const SignUpWrap = styled.div`
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

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    if (sendData.name === '') {
      this.setState({
        errors: {
          name: '성함을 입력해주세요.'
        }
      });
    } else if (sendData.email === '') {
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
    } else if (sendData.password2 === '') {
      this.setState({
        errors: {
          password2: '비밀번호 확인을 입력해주세요.'
        }
      });
    } else if (sendData.password !== sendData.password2) {
      this.setState({
        errors: {
          password: '비밀번호가 일치하지 않습니다.'
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
    const { name, email, password, password2, errors } = this.state;

    return (
      <SignUpWrap>
        <div className="contents">
          <div className="title">지금 푸드워에 가입하세요.</div>
          <div className="input-with-button">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="성함을 입력해주세요."
                onChange={this.onChange}
                required
                className={classnames('default-border', {
                  'is-invalid': errors.name
                })}
              />
              {errors.name && <div className="fw-invalid-feedback">{errors.name}</div>}
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
              <input
                type="password"
                name="password2"
                value={password2}
                placeholder="비밀번호를 다시 입력해주세요."
                required
                onChange={this.onChange}
                className={classnames('default-border', {
                  'is-invalid': errors.password2
                })}
              />
              {errors.password2 && <div className="fw-invalid-feedback">{errors.password2}</div>}
              <button className="button" type="submit">
                회원가입
              </button>
            </form>
          </div>
          <div className="not-login fw-color">
            <div>
              <span></span>
            </div>
            <div>
              <span>
                <Link to="/">이미 계정이 있으신가요?</Link>
              </span>
            </div>
          </div>
        </div>
      </SignUpWrap>
    );
  }
}
