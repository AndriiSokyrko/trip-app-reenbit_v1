import React from 'react';
import MainComponent from "../components/MainComponent/MainComponent";
import  FormCityAdd from "../components/FormCItyAdd/FormCItyAdd"
import {Route, Routes} from "react-router-dom/dist";

function AppRouters(props) {
    return (
            <Routes>
                <Route path="/" element={<MainComponent/>}/>
                <Route path="/addTrip" element={<FormCityAdd/>}/>
            </Routes>
    )

}

export default AppRouters;