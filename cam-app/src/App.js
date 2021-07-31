import React from 'react';
import WebcamComponent from '../src/webcam/webcam';
import './App.css';

function App() {
  return (
    <div className="App">
      <WebcamComponent />
      {/* <input accept="image/*" id="icon-button-file" type="file" capture="environment" /> */}
    </div>
  );
}

export default App;
