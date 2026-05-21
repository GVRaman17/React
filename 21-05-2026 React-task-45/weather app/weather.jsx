import { useState } from "react";

function Weather(){
    const [city,setCity]=useState('');
    const [temp,setTemp]=useState('');
    const [weather,setWeather]=useState('');
    const [a,setA]=useState(true);
    async function handelapi(city){
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`);
        let result=await data.json();
        let tem=result.main.temp;
        let wea=result.weather[0].main;
        setTemp(tem);
        setWeather(wea);
        setA(false);
    }
    function clear1(){
        setCity('');
        setTemp('');
        setA(true)
    }
    return(
        <>
        <h1>Weather App</h1>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/><br/>
        <button onClick={()=>handelapi(city)}>Search</button>
        <button onClick={clear1}>clear</button>
        <br/>
        <h2 hidden={a}>{city} the temperature is {temp}°C Weather "{weather}"</h2>
        </>
    );
}
export default Weather;