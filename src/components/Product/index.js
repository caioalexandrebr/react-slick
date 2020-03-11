import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 50%;
`;

const Name = styled.span`
  color: white;
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Info = styled.span`
  display: block;
  color: #d4c0e7;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: white;
  font-size: 22px;
`;

const Square = styled.div`
  width: 35%;
  overflow: hidden;
  position: relative;
  border-radius: 500px;
  box-sizing: border-box;
  border: 1px solid #D3D3E2;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);

  :after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = () => (
  <Wrapper>
    <Content>
      <Name>Nullam</Name>
      <Info>Consectetur adipiscing</Info>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi lacinia, molestie metus eu ipsum dolor sit amet, consectetur adipiscing.</Description>
    </Content>
    <Square>
      <Image/>
    </Square>
  </Wrapper>
);

export default Product;
