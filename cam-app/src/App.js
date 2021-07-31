import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <input accept="image/*" id="icon-button-file" type="file" capture="environment" />
    </div>
  );
}

export default App;
