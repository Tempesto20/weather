import React, { useEffect, useState } from 'react';
// import '../node_modules/bootstrap';
import api from './api';
import './App.css'; 
import Header from './components/Header/Header';
import config from './config';
import { parseQuery } from './helpers';
import { Fragment } from 'react';
import { METRIC } from './constTemp';

function App() {

  const [cityData, setCityData] = useState({
    city: null,
    temp: null,
    weatherType: null,
    wind: null,
    directionName: null,
    pressure: null,
    humidity: null,
    precipitation: null,
    predominantly: null
  });

  const [toggleCity, setToggleCity] = useState(false);
  const [typeTemp, setTypeTemp] = useState(METRIC);

  /*const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [weatherType, setWeatherType] = useState(null);

  const [wind, setWind] = useState(null);
  const [directionName, setDirectionName] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [predominantly, setPredominantly] = useState(null);*/

  const [activeCity, setActiveCity] = useState("Magnitogorsk");
  
  useEffect(() => {
      const query =
        "/weather?" +
        parseQuery({
          q: activeCity,
          lang: "ru",
          units: typeTemp,
          appid: config.appid
        });
  
      console.log("query: ", query);
  
      api.get(query).then((res) => {
        console.log(res);

        setCityData({
          ...cityData,
          city: res.data.name,
          temp: Math.round(res.data.main.temp),
          weatherType: res.data.weather[0].main,
          wind: res.data.wind.speed,
          directionName: res.data.wind.deg,
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity,
          precipitation: res.data.clouds.precipitation,
          predominantly: res.data.weather[0].description
        });
      });
  }, [activeCity, typeTemp])

  return (
    <Fragment>
      <Header 
        cityData={cityData}
        setCityData={setCityData}
        toggleCity={toggleCity} 
        setToggleCity={setToggleCity}
        activeCity={activeCity}
        setActiveCity={setActiveCity}
        typeTemp={typeTemp}
        setTypeTemp={setTypeTemp}
      />
    </Fragment>
  );
}

export default App;
