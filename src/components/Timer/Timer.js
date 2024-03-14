import React, {useContext, useMemo, useState} from 'react';
import {TripsContext} from "../../trips-context/tripsContext";
import "./Timer.scss"

function Timer({tripId}) {
    let dataTrips = useContext(TripsContext)
    let data = dataTrips.trips.find(trip => trip.id === +tripId)
    const startDate = new Date(data.date1)
    const day = 24 * 3600 * 1000
    const hour = 3600 * 1000
    const minute = 60 * 1000
    const second = 1000
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [today, setToday] = useState(Date.now())
    let diff = startDate - today
    let tempDays
    let tempHours
    let tempMinutes
    let tempSeconds


    function compTime(tempDif, par) {
        return Math.floor(tempDif / par) < 10 ? '0' + Math.floor(tempDif / par) : Math.floor(tempDif / par)
    }

    tempDays = compTime(diff, day)
    diff = diff % day
    tempHours = compTime(diff, hour)
    diff = diff % hour
    tempMinutes = compTime(diff, minute)
    diff = diff % minute
    tempSeconds = compTime(diff, second)

    useMemo(() => setDays(tempDays), [tempDays])
    useMemo(() => setHours(tempHours), [tempHours])
    useMemo(() => setMinutes(tempMinutes), [tempMinutes])
    useMemo(() => setSeconds(tempSeconds), [tempSeconds])

    setInterval(() => {
        setToday(Date.now())
    }, 1000)

    return (
        <div className="timer_wrapper">
            <h1>remains time to start trip</h1>
            <div className="timer_wrapper--content">
                <div className="timer_wrapper--days">{days}<span>days</span></div>
                <div className="timer_wrapper--hours">{hours}<span>hours</span></div>
                <div className="timer_wrapper--minutes">{minutes}<span>minutes</span></div>
                <div className="timer_wrapper--seconds">{seconds}<span>seconds</span></div>
            </div>
        </div>
    );
}

export default Timer;