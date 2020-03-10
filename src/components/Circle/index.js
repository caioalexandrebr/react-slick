import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
  width: 90%;
  margin: 0 auto;
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

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = (props) => (
  <Square>
    <Content>
      {props.children}
    </Content>
  </Square>
);

export default Circle;
