import React from 'react';
import SimpleSlider from './components/SimpleSlider';
import CenterMode from './components/CenterMode';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const ContentSlide = styled.div`
  padding: 0 30px;
`;

function App() {
  return (
    <Container>
      <ContentSlide>
        <SimpleSlider/>
        <CenterMode/>
      </ContentSlide>
    </Container>
  );
}

export default App;
