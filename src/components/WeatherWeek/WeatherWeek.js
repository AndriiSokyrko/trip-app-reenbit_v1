import React from 'react';
import {CardWeekOneDay}  from "../CardWeekOneDay/CardWeekOneDay";
import "./WeatherWeek.scss"
function WeatherWeek({props}) {
    return (
        <div className="weather_week">
            <h1>Week</h1>
            <div className="weather_week--content">
                {
                    props.days.length &&  props.days.map(day => <CardWeekOneDay day={day}  key={day.datetimeEpoch}/>)
                }
            </div>

        </div>
    );
}

export {WeatherWeek};