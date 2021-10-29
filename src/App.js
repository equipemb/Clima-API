import React, {useState, useEffect} from 'react';

import axios from 'axios';

import './App.css';

import Display from './components/Display';


function App() {

const [ location, setLocation ] = useState(false);
const [weather, setWeather] = useState(false);


let getWeather = async (lat, long) => {
  let res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: lat,
      lon: long,
      appid: '7dd54ad21b3018cdf10375ba72342035',
      lang:'pt',
      units: 'metric'
    }
  });
  setWeather(res.data);
}

useEffect(() => {
   navigator.geolocation.getCurrentPosition((position) => {
    getWeather(position.coords.latitude, position.coords.longitude);
    setLocation(true);
  })
}, [])

if(location == false){
  return(
    <div>
    Você precisa habilitar a localização no browser o/
    </div>
  ) 
} else if (weather == false){

    return(
      <div>
        Carregando o clima..
      </div>
    );

  } else {
    console.log(weather)
    return(
      <Display
      name={weather.name} 
      description={weather['weather'][0]['description']}
      icon={weather.weather[0].icon}
      temp={String(Math.trunc( weather['main']['temp'])) + '°'}
      wind={weather.wind.speed}
      humidity={weather.main.humidity}
      max={String(Math.trunc( weather['main']['temp_max'])) + '°'}
      /> 
    )
  }
}

export default App;
