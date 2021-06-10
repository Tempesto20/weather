import React, { useEffect, useState } from 'react';
import api from './api';
import './App.css'; 
import Header from './components/Header/Header';
import CityList from './components/CityList/CityList';
import config from './config';
import { parseQuery } from './helpers';
import { Fragment } from 'react';

function App() {

  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [weatherType, setWeatherType] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState(null);

  useEffect(() => {
    /*fetch('http://api.openweathermap.org/data/2.5/weather?id=532288&lang=ru&appid=ac8c195b8eaeee4efcfa4f3a9422bc2c')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            setCity(data.name);
            setTemp(Math.round(data.main.temp - 273) + '&deg;');
            setWeatherDesc()
            console.log(data);
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];


            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //catch any errors
        })*/

      const query =
        "/weather?" +
        parseQuery({
          id: "532288",
          lang: "ru",
          appid: config.appid
        });
  
      console.log("query: ", query);
  
      api.get(query).then((res) => {
        console.log(res);

        setCity(res.data.name);
        setTemp(Math.round(res.data.main.temp - 273));
        setWeatherType(res.data.weather[0].main);
      });
  }, [])

  return (
    <Fragment>
      <Header city={city} temp={temp} weatherType={weatherType} />
      {/*<CityList /> */}
    </Fragment>
  );
}

export default App;
