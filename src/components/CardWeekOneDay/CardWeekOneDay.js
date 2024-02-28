import React from 'react';
import "./CardWeekOneDay.scss"

function CardWeekOneDay({day}) {
    let image = require('../../images/Weather-icons-v4/WeatherIcons-VisualCrossing-v4/'+day.icon+'.svg');
    let dayOfWeek = new Date(day.datetime).toLocaleString('en-us', {weekday: 'long'});

    return (
        <div className="section_weather--week">
            <h1>{dayOfWeek}</h1>
            <div className="section_weather--week--content">
                <img src={image} alt="weather icon"></img>
                <h2 className="section_weather--week--content--temperature">
                    {day.tempmax}/{day.tempmin}
                    <sup>&deg;C</sup>
                </h2>
            </div>
        </div>
    );
}

export {CardWeekOneDay};