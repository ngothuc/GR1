import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleMapClick = (e) => {
    if (!start) {
        console.log("start : " + e);
        setStart(e.latlng);
    } else if (!end) {
        console.log("end : " + e);
        setEnd(e.latlng);
    }
};

  const handleStartChange = (value) => {
    setStart(value);
  };

  const handleEndChange = (value) => {
    setEnd(value);
  };

  return (
    <div className="App">
      <div className="input-container">
        <SearchBar label="Bắt đầu" value={start} onChange={handleStartChange} />
        <SearchBar label="Kết thúc" value={end} onChange={handleEndChange} />
        <button className="btn">Đường đi</button>
      </div>
      <MapComponent start={start} end={end} handleMapClick={handleMapClick}/>
    </div>
  );
}

export default App;
