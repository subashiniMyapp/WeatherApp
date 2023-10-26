import React, { useState} from 'react';
import axios from 'axios';
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSun, faCloud } from '@fortawesome/fontawesome-free-solid'

const WeatherComponet = ()=>{
    const [weatherdata , setWeatherData] = useState(null);
    const [country, setCountry] = useState('');
    const API_KEY = 'affde5a24479e2f5b399c97d69b4a627';
    // const CITY_NAME = "Switzerland";

    const  fetchWeatherData = ()=>{
        // console.log(country);
        if (country) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`)        
            .then(response =>{
                console.log(response);
                setWeatherData(response.data);
            })
            .catch(error =>{
                // console.error("Error on fetching weather data:" , error);
                setWeatherData(null);
            });
        }
    }

    const ConvertTimeFormat = (timestamp)=>{
        const data = new Date(timestamp * 1000);
        return data.toLocaleString();
    }
    const getWeatherIcon = (weathercode)=>{
      switch (weathercode) {
        case '01d':
          return faSun; // Use faSun for sunny weather
        case '02d':
        case '03d':
        case '04d':
          return faCloud; // Use faCloud for cloudy weather
        case '09d':
        case '10d':
          return faCloud; // Use faCloudRain for rainy weather
        default:
          return faCloud;
      }
    }
    return (
      <div className='maindiv'> 

        <div className='container'>
            <h2>World Wide Weather info App</h2>
            <div className='serch_box'>
                  <input
                  type="text"
                  placeholder='Enter your county name'
                  value={country}
                  onChange = {(e)=> setCountry(e.target.value)}
                  />
                 <button onClick={fetchWeatherData}>
                 <FontAwesomeIcon icon={faSearch} />
                </button>
             </div>
                  {weatherdata ? (
                    <div className='show'>
                      <h2 className='cityname'> {weatherdata.name} , {weatherdata.sys.country}</h2>
                      <h4 className='weather'> {weatherdata.weather[0].main}</h4>
                      <h4 className='desc'> {weatherdata.weather[0].description}</h4>
                      <p><FontAwesomeIcon icon={getWeatherIcon(weatherdata.weather[0].icon)} /></p>
                      <h1> {weatherdata.main.temp}°C</h1>
                      {/* <p>wind speed : {weatherdata.wind.speed}</p> */}
                      <div className='temp_continer'>
                          <div>
                              <h2 className='title'>Sun Rise</h2>
                              <h4 className='temp'>{ConvertTimeFormat(weatherdata.sys.sunrise)}</h4>
                          </div>
                          <div>
                              <h2 className='title'>Sun Set</h2>
                              <h4 className='temp'>{ConvertTimeFormat(weatherdata.sys.sunset)}</h4>
                          </div>
                        </div>
                    </div>
                      ) : (
                        <p>PLEASE ENTER A VAILD CITY NAME</p>
                      )}
                
            </div>
      </div>
      );
}
export default WeatherComponet;


// 8551ce3abaf1480196a7613602663736