import { useState } from 'react';
import './App.css';
import { City } from './components/city/City';
import { Display } from './components/display/Display';
import key from './API/key';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState();

  


  // console.log(city.length);
  // navigator.geolocation.getCurrentPosition(success => console.log(success));

  // console.log(location)

  return (
    <div className="App">
      <h1>Weather App</h1>
      <City setCity={setCity} city={city} setData={setData}/>
      <Display data={data}/>
    </div>
  );
}

export default App;
