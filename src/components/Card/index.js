import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px;
  position: relative;
  border-radius: 30px;
  background: #F1F1F1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Button = styled.a`
  color: white;
  padding: 20px;
  display: inherit;
  font-weight: bold;
  text-align: center;
  border-radius: 500px;
  background: rgb(138, 5, 190);
`;

const Card = () => (
  <Box>
    <h1>Nullam</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi lacinia, molestie metus eu.</p>
    <Button>Praesent quis</Button>
  </Box>
);

export default Card;
