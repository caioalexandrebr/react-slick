import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px;
  margin: 0 8px;
  position: relative;
  border-radius: 30px;
  background: white;
  border: 1px solid #F1F1F1;
`;

const Button = styled.a`
  color: white;
  padding: 20px;
  display: inherit;
  font-weight: bold;
  text-align: center;
  border-radius: 500px;
  text-decoration: none;
  background: rebeccapurple;
`;

const Card = () => (
  <Box>
    <h1>Nullam</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi lacinia, molestie metus eu.</p>
    <Button href="https://www.google.com/" target="_blank">Praesent quis</Button>
  </Box>
);

export default Card;
