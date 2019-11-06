import React from 'react';
import ImageList from './components/ImageList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>NASA: Image of the day</h1>
      <p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>
      <ImageList />
    </div>
  );
}

export default App;
