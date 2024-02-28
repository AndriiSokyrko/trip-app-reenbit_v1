import React from 'react';
import "./CardCityAdd.scss"
import { useNavigate } from "react-router-dom/dist";

function CardCityAdd() {
    const navigate = useNavigate();
    const handleOpenForm = () => {
        navigate('/addTrip')
    }
    return (
        <div className="card_city--add" onClick={handleOpenForm}>+</div>
    );
}

export default CardCityAdd;