import React, {useContext, useState} from 'react';
import {TripsContext} from "../../trips-context/tripsContext";
import "./Timer.scss"
function Timer({tripId}) {
    let dataTrips = useContext(TripsContext)
    let data = dataTrips.trips.find(trip=> trip.id===+tripId)
    const startDate =  new Date(data.date1)
    const day= 24*3600*1000
    const hour=3600*1000
    const min = 60*1000
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

        setInterval(() => {
            const today = Date.now()
            let diff = startDate - today
             let tempDif = diff


            if (tempDif > day) {
                let ost = tempDif % day
                let tempDay = Math.ceil(tempDif / day)
                    setDays(tempDay)
                    tempDif = ost
            }

            if (tempDif <= day) {
                let ost = tempDif % hour
                let tempHours = Math.ceil(tempDif / hour)
                    setHours(tempHours)
                    tempDif = ost
            }
            if (tempDif <= hour) {
                let ost = tempDif % min
                let tempMinutes = Math.ceil(tempDif / min)
                if(tempMinutes !== minutes) {
                setMinutes(prevMinutes=>tempMinutes)
                    tempDif = ost
                }
            }

             if (tempDif  <= min) {
                 let ost = tempDif % 1000
                 let tempSeconds = Math.ceil(tempDif/1000)
                     setSeconds(tempSeconds)
                     tempDif = ost
             }
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