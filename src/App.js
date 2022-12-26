import { useState } from 'react';
import './App.css';
import { City } from './components/city/City';
import { Display } from './components/display/Display';
import key from './API/key';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState();
  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <City setCity={setCity} city={city} setData={setData}/>
      <Display data={data}/>
    </div>
  );
}

export default App;
