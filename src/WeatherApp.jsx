import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherInfo,setweatherinfo]=useState({
        city:"Delhi",
        feelsLike:24.04,
        temp:25,
        tempMin:25.02,
        tempMax:25.05,
        humidity:47,
        weather:"haze",

    });
    let updateInfo=(newInfo)=>{
        setweatherinfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather Dashboard by Rashmi</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}