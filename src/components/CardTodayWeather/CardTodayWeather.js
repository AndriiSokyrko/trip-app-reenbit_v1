import React from 'react';
import "./CardTodayWeather.scss"
function CardTodayWeather({props}) {
    let image = require('../../images/Weather-icons-v4/WeatherIcons-VisualCrossing-v4/'+props.days[0].icon+'.svg');
    let dayOfWeek = new Date(props.days[0].datetime).toLocaleString('en-us', {weekday: 'long'});
    return (
        <div className="section_weather">
            <h1>{dayOfWeek}</h1>
            <div className="section_weather--content">
                <img src={image} alt="weather icon"></img>
                 <h2 className="section_weather--content--temperature">{props.days[0].temp}<sup>&deg;C</sup></h2>
            </div>
            <h1>{props.address}</h1>
        </div>
    );
}

export default CardTodayWeather;