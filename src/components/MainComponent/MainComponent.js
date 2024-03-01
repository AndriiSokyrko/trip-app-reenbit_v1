import React, {useState} from 'react';
import Header from "../Header/Header";
import SearchBar from "../Search/SearchBar";
import CardCity from "../CardCity/CardCity";
import CardCityAdd from "../CardCityAdd/CardCityAdd";
import {WeatherWeek} from "../WeatherWeek/WeatherWeek";
import CardTodayWeather from "../CardTodayWeather/CardTodayWeather";
import { pathToWeather, token} from "../../data/cities";
import {weatherAllPeriodTrip, weatherToday} from "../../services/cities/cityServices";
import { useContext } from 'react';
import {TripsContext} from "../../trips-context/tripsContext";
import Timer from "../Timer/Timer";

function MainComponent() {
    let dataContext = useContext(TripsContext)
    const [weatherForToday, setWeatherForToday] = useState({})
    const [weatherAllPeriod, setWeatherAllPeriod] = useState({})
    const [tripsFilter, setTripsFilter] = useState(dataContext.trips)

    const [cardActive, setCardActive] = useState('');
    const setSearch = (param) => {
        if(!param.trim().length) {
            setTripsFilter(dataContext.trips)
            return
        }
        let tempCites = dataContext.trips.filter(city => city.name.split(',')[0].toLowerCase().indexOf(param.toLowerCase()) !== -1)
        setTripsFilter(tempCites)
    }
    const getWeatherAllPeriodTrip = (param) => {
        let pathAllPeriodTripWeather = pathToWeather
            + param + '?unitGroup=metric&include=days&key='
            + token + '&contentType=json'
        weatherAllPeriodTrip(pathAllPeriodTripWeather).then(responce => responce).then(date => {
            setWeatherAllPeriod(date.data)
        })
    }
    const getWeather = (data) => {
        let pathTodayWeather = pathToWeather
            + data.name + '/today?unitGroup=metric&include=days&key='
            + token + '&contentType=json'

        weatherToday(pathTodayWeather).then(responce => responce).then(date => {
            setWeatherForToday(date.data)
        })
    }
    return (
        <main className="main">
            <div className="main_content">
                <Header/>
                <SearchBar setSearch={setSearch}/>
                <div className='main_content-cities'>

                    {
                        tripsFilter.map(trips => <CardCity data={trips} getWeather={getWeather}
                                                           getWeatherAllPeriodTrip={getWeatherAllPeriodTrip}
                                                           cardActive={cardActive}
                                                           setCardActive={setCardActive}
                                                           key={trips.id}/>)
                    }
                    <CardCityAdd />
                </div>
                {Object.keys(weatherAllPeriod).length ? <WeatherWeek props={weatherAllPeriod} />:''}
            </div>

            <aside className="main_aside">
                {Object.keys(weatherForToday).length && <CardTodayWeather props={weatherForToday}/>}
                {cardActive ? <Timer tripId={cardActive}/> :''}
            </aside>
        </main>
)

}

export default MainComponent;