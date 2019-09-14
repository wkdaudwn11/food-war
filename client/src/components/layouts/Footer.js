import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  font-size: 1rem;
  color: #fff;
  font-weight: 300;
`;

const Footer = () => {
  return (
    <FooterWrap className='fw-bgcolor'>
      <div>© Hodong / Myungjoo Inc All Rights Reserved.</div>
    </FooterWrap>
  );
};

export default Footer;
