import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo]=useState({
    city: "Delhi",
        feelsLike:32.25,
humidity: 11,
pressure:1013,
temMin: 34.88,
temp: 34.88,
tempMax: 34.88,
weather: "broken clouds",
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (<div style={{textAlign:"center"}}>
        <h1> Weather App By Hitesh </h1>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
    );
}