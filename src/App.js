import React from 'react';
import ImageList from './components/ImageList';
import styled from 'styled-components';
import './App.css';

const AppTitle = styled.h1`
  font-size: 3rem;
`;

function App() {
  return (
    <div className="App">
      <AppTitle>NASA: Image of the day</AppTitle>
      <ImageList />
    </div>
  );
}

export default App;
