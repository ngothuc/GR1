import './App.css';
import MapComponent from './components/MapComponent';
import SearchBar from './components/SearchBar';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const [startAdd, setStartAdd] = useState('');
  const [endAdd, setEndAdd] = useState('');

  const handleStartChange = (e) => {
    setStart(e);
  };

  const handleEndChange = (e) => {
    setEnd(e);
  };

  const handleMapClick = async (e) => {
    try {
      const { lat, lng } = e.latlng;
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
        params: {
          lat,
          lon: lng,
          format: 'json'
        }
      });
      const address = response.data.display_name;

      if (!start) {
        console.log("start: " + address);
        setStartAdd(address);
        setStart({ lat, lng });
      } else if (!end) {
        console.log("end: " + address);
        setEndAdd(address);
        setEnd({ lat, lng });
      }
    } catch (error) {
      console.error("Error fetching address: ", error);
    }
  };

  return (
    <div>
      <div className='input-container'>
        <SearchBar
          label="Bắt đầu"
          value={startAdd}
          onChange={handleStartChange}
        />
        <SearchBar
          label="Kết thúc"
          value={endAdd}
          onChange={handleEndChange}
        />
      </div>
      <MapComponent
        start={start}
        end={end}
        handleMapClick={handleMapClick}
      />
    </div>
  );
}

export default App;
