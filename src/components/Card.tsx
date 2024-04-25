import React from 'react';
import { useWeatherContext } from '../context/Context';
import SearchBar from './SearchBar';
import cloudimg from '../assets/cloud.png';
import humidity from '../assets/humidity.png'
import windSpeed from '../assets/wind.png'

const Card: React.FC = () => {
  const { weatherData } = useWeatherContext();
  const isWeatherDataEmpty = !weatherData || Object.keys(weatherData).length === 0;
  if (!weatherData) {
    return <div style={{textAlign:'center'}}>
      <h2>Loading...</h2>
    </div>; 
  }
  console.log(weatherData)

  return (
    <div className="card">
      
      {isWeatherDataEmpty && (<><h2>Loading....</h2></>)}
        <>
        
        <SearchBar />
      <div className="weather">
      <h1 className='temperature'>{weatherData.main.temp}<sup>°C</sup></h1>
        <img src={cloudimg} className="weather-icon" alt="Weather Icon" />
        <div className="temp-condition">
          <h1 className="temp">{weatherData.name}</h1>
          <p className="weather-condition"></p>
        </div>
      </div>

      <h2 className="city"></h2>

      <div className="error">
        <p>Invalid city name</p>
      </div>

      <div className="details">
        <div className="col">
          <img src={humidity} alt="Humidity" />
          <div>
            <span className="humidity">{weatherData.main.humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="col">
          <img src={windSpeed} alt="Wind Speed" />
          <div>
            <span className="wind">{weatherData.wind.speed}m/s</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
      </>

      
    </div>
  );
};

export default Card;
