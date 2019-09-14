import React, { Component } from 'react';
import styled from 'styled-components';
import homeVideo from '../images/homeVideo.mp4';

const HomeWrap = styled.div`
  #background-video {
    height: 100%;
    width: 100%;
    top: 0;
    padding: none;
  }

  .title {
    padding: 1rem 0;
    font-size: 28px;
  }

  .contents {
    padding-bottom: 1rem;
    font-size: 18.2px;
    color: gray;
  }

  .contents p + p {
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export default class Home extends Component {
  render() {
    return (
      <HomeWrap className='default-bgcolor'>
        <video id='background-video' loop autoPlay>
          <source src={homeVideo} type='video/mp4' />
          <source src={homeVideo} type='video/ogg' />
          Your browser does not support the video tag.
        </video>
        <div className='container'>
          <div className='title'>
            이번엔 뭐 먹지..? 매번 메뉴 고르는 게 완전 전쟁같아!!
          </div>
          <div className='contents'>
            <p>오늘 점심 뭘 먹어야 할지 모르겠다구요?</p>
            <p>매일매일 고민하기 귀찮다면 지금 당장 이용해보세요!</p>
          </div>
        </div>
      </HomeWrap>
    );
  }
}
