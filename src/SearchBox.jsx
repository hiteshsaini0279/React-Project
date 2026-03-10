import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
     let [city, setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= import.meta.env.API_KEY_WEATHER;
    let  getWeather=async()=>{
      let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let getResponse=await response.json();
      let result={
        city:city,
        temp:getResponse.main.temp,
        temMin:getResponse.main.temp_min,
        tempMax:getResponse.main.temp_max,
        humidity:getResponse.main.humidity,
        pressure:getResponse.main.pressure,
        feelsLike:getResponse.main.feels_like,
        weather:getResponse.weather[0].description,
      };
      console.log(result);
    };
   
    let handleChange=(e)=>{
        setCity(e.target.value);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(city);
        setCity("");
        getWeather();
    }
    return(<div className='SearchBox'>
        <h3>Search box for weather</h3>
        <form onSubmit={handleSubmit}>
         <TextField id="city" label="City Name" variant="outlined"  value={city} onChange={handleChange} required />
         <br></br>   <br></br>
         <Button variant='contained' type='submit'> Search</Button>
        </form>
    </div>);
}