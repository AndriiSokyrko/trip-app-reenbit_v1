import './App.scss';
import AppRouters from "./app-routers/appRouters";
import {TripsContext} from "./trips-context/tripsContext"
import {tripsInit} from "./data/cities";
import {useState} from "react";
function App() {
    const [trips, setTrips] = useState(()=>tripsInit)
  return (
      <TripsContext.Provider value={{trips, setTrips}}>
          <div className="App">
              <AppRouters/>
          </div>
      </TripsContext.Provider>
  );
}

export default App;
