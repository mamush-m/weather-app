import React from "react";
import './display.css'

export const Display = ({data}) => {
    
    let today;
    let forecast;

    if(data && data.current){
        today = <div id="weather-info">
            <h3 id="city-state">{data.location.name}, {data.location.region}</h3>
            <h5 id="country">{data.location.country}</h5>

            <div id="data">
                <div id="main-data">
                    <h1>{data.current.temp_f}˚ F</h1>
                    <p>Feels Like {data.current.feelslike_f}˚</p>
                    <div>
                        <h2>{data.current.condition.text}</h2>
                        <img src={data.current.condition.icon} alt='img'/>
                    </div>
                    <p id="date">{new Date().toString().split(' ').slice(0,3).join(' ')}</p>
                </div>

                <div id="additional-data">
                    <ul>
                        <li>Wind: {data.current.wind_mph}mph {data.current.wind_dir}</li>
                        <li>Humidity: {data.current.humidity}%</li>
                        <li>Precipitation: {data.current.precip_in} in</li>
                        <li>Visibility: {data.current.vis_miles} mi</li>
                    </ul>
                </div>
            </div>

       
        </div>

        const future = data.forecast.forecastday.filter(day => day.date_epoch > data.forecast.forecastday[0].date_epoch);

        forecast = future.map(day => {
            return <div id="future-container">
                <div>
                    <h3>{new Date((day.date_epoch + 86400) * 1000).toString().slice(0,4)}</h3>
                    <p>Hi: {day.day.maxtemp_f}˚</p>
                    <p>Lo: {day.day.mintemp_f}˚</p>
                </div>
                <img alt="condition icon" src={day.day.condition.icon}/>
            </div>
        })
    }


    return (
        <div id="display">
           {today}
           <div id="future">
            {forecast}
           </div>
        </div>
    )
};