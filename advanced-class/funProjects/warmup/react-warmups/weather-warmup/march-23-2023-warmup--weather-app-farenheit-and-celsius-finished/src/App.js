import logo from "./logo.svg";
import "./App.css";
import ShowDate from "./ShowDate";
import ShowWeather from "./ShowWeather";
import LatitudeAndLongitude from "./LatitudeAndLongitudeInput";
import { useState, useMemo } from "react";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const isValid = useMemo(() => {
    return latitude >= -90 && longitude >= -90 && latitude <= 90 && longitude <= 90
  }, [latitude, longitude])

  return (
    <div className="App">
      <ShowDate />
      <LatitudeAndLongitude
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />
      {isValid ? (
        <ShowWeather latitude={latitude} longitude={longitude} />
      ) : (
        <div>Latitutde and Longitude must be between -90 and 90</div>
      )}
    </div>
  );
}

export default App;
