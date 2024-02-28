import './CardCity.scss'

const CardCity = ({data, getWeather, getWeatherAllPeriodTrip,cardActive,setCardActive}) => {
    let image = require('../../../src/images/'+data.image);
    const cityName = data.name.split(',')[0]
    const period = data.date1+' - '+ data.date2;
    const classes =cardActive===data.id?  'card_city--active' :'card_city'
    const setCity = () =>{
        setCardActive(data.id)
        getWeatherAllPeriodTrip(data.name+'/'+data.date1+'/'+data.date2)
        getWeather(data);
    }
    return (
        <div className={classes} onClick={setCity}>
            <img src={image} alt="Images cities"/>
            <h1 className="card_city--name">{cityName}</h1>
            <p className="card_city--period">{period}</p>
        </div>
    );
};

export default CardCity;