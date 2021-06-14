import React from 'react';
import cloudImg from '../../img/cloud.svg';
import sunImg from '../../img/sun.svg';
import partlyCloudyImg from '../../img/partlyCloudy.svg';
import rainImg from '../../img/rain.svg';
import stormImg from '../../img/strom.svg';
import './Header.css'

const Header = (props) => {

    const getImg = () => {
        switch (props.weatherType) {
            case "Clear":
                return (
                    <img src={sunImg} alt=""></img>
                )
            case "Clouds":
                return (
                    <img src={cloudImg} alt=""></img>
                )
            default:
                break;
        }
    }
    return (
        <div className="header__background">
            <div className="container">
                <div className="header__conteiner">
                    <div className="header__city" >
                        <div className="header__city">{props.city}</div>
                        <div className="header__c-f" >
                            <a href="#" className="header__c"> C </a>
                            <a href="#" className="header__f"> F</a>
                        </div>
                    </div>
                    <div className="header__change">
                        <div className="change__city">Сменить город </div>
                        <div className="header__locate">
                            <div className="locate__img">
                                <img src="img/location.svg" />
                            </div>
                            <div className="locate">Мое местоположение</div>
                        </div>
                    </div>
                    <div className="header__temperature">
                        <div className="header__img">
                            {getImg()}
                        </div>
                        <div className="temperature">
                            {props.temp}&deg;
                        </div>
                    </div>
                    <div className="predominantly">
                        {props.predominantly}
                    </div>
                    <div className="features">
                        <div className="wind">
                            <div className="wind__header"> Ветер </div>
                            <div className="wind__info">{props.wind}м/с </div> 
                        </div>
                        {/* ,{props.directionName} */}
                        <div className="pressure">
                            <div className="pressure__header"> Давление </div>
                            <div className="pressure__info">{props.pressure}мм рт. ст.</div>
                        </div>
                        <div className="humidity">
                            <div className="humidity__header"> Влажность </div>
                            <div className="humidity__info">{props.humidity}%</div>
                        </div>
                        {/* <div className="precipitation">
                            <div className="precipitation__header"> Вероятность дождя</div>
                            <div className="precipitation__info">{props.precipitation}%</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;