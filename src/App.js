import React from 'react';
import ImageList from './components/ImageList';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`;

function App() {
  return (
    <AppContainer>
      <ImageList />
    </AppContainer>
  );
}

export default App;
