import React, {useContext,  useState} from 'react';
 import "./FormCItyAdd.scss"
import {useNavigate} from "react-router-dom/dist";
import {TripsContext} from "../../trips-context/tripsContext";
import {cities} from "../../data/cities";

function FormCItyAdd({addTrip}) {
    const navigate = useNavigate()
    let data = useContext(TripsContext)
    const today = Date.now()
    const startDate = new Date(today).toISOString().split('T')[0];

    let result = new Date(today);
    result.setDate(result.getDate() + 14);
    const endDate = new Date(result).toISOString().split('T')[0];

    const [newTrip, setNewTrip] = useState({id: new Date().getMilliseconds()})

    const [classMessage, setClassMessage] = useState('form_add--trip--message--hide')
    const [classMessageDate, setClassMessageDate] = useState('form_add--trip--message--date--hide')
    const [errorDateEnd,setErrorDateEnd] = useState('')
    const handleCancel =() =>{
        navigate('/')
    }
    const handleAddDateStart = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setNewTrip({...newTrip, date1:val})
        // newTrip.date1=val

    }
    const handleAddDateEnd = (e) => {
        e.preventDefault();
        const val = e.target.value;
        setNewTrip({...newTrip, date2:val})
        // newTrip.date2=val

    }

    const handelSelectCity = e => {
        e.preventDefault();
        const val = e.target.value;
        const city = cities.find(city=> city.name.indexOf(val)!==-1)
        setNewTrip({...newTrip, name:city.name, image:city.image})
    }
     const handleSave = e => {
        e.preventDefault();
         if(new Date(newTrip.date2)< new Date(newTrip.date1)) {
             setClassMessageDate('form_add--trip--message--date--show')

             setErrorDateEnd('No correct end of date  ')
             setTimeout(()=>{
                 setClassMessageDate('form_add--trip--message--date--hide')

                 setErrorDateEnd('')
             },1000)
             return
         }

        if(Object.keys(newTrip).length<5) {
            setClassMessage('form_add--trip--message--show')
            setTimeout(() => {
                setClassMessage('form_add--trip--message--hide')

            }, 1000)
            return
        }
         data.setTrips([...data.trips,newTrip])
         navigate('/')
    }



    return (
        <div className="form_add--trip">
            <h1>Create trip</h1>
            <p className={classMessage}>Form hasn't correct dates</p>
            <form  className="form_add--trip--form" action="">
                <h2>City<span>*</span></h2>
                <select className="form_add--select" onChange={handelSelectCity}  >
                    <option value="none" selected disabled hidden>Select an Option</option>
                    {cities.length && cities.map(city =>
                            <option className="form_add--select-option" value={city.name} key={city.id}>{city.name}</option>
                         )
                     }
                </select>
                <h2>Start date<span>*</span></h2>
                <input id="data1" type="date" onChange={handleAddDateStart}
                min={startDate} max={endDate}
                />
                <h2>End date<span>*</span></h2>
                <input id="data2" type="date" onChange={handleAddDateEnd}
                       min={startDate} max={endDate}
                />
                <p className={classMessageDate}>{errorDateEnd}</p>

            </form>
            <div className="form_add--trip-footer">
                <button type="reset" onClick={handleCancel}>Cancel</button>
                <button type="submit" onClick={handleSave}>Save</button>
            </div>

        </div>
    );
}

export default FormCItyAdd;