import React from 'react';
import PropTypes from 'prop-types';
import cloudImg from '../../img/cloud.svg';
import sunImg from '../../img/sun.svg';
import partlyCloudyImg from '../../img/partlyCloudy.svg';
import rainImg from '../../img/rain.svg';
import stormImg from '../../img/strom.svg';
import './Header.css'
import ListCity from '../ListCity/ListCity';
import { METRIC, STANDARD } from '../../constTemp';

const Header = (props) => {

    const getImg = () => {
        switch (props.cityData.weatherType) {
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

                        { !props.toggleCity ? <div className="header__city">{props.cityData.city}</div> : ""}

                        <div className="header__c-f" >
                            <a href="#" className="header__c" onClick={() => props.setTypeTemp(METRIC)}> C </a>
                            <a href="#" className="header__f" onClick={() => props.setTypeTemp(STANDARD)}> F</a>
                        </div>
                    </div>
                    <div className="header__change">
                        <ListCity 
                            toggleCity={props.toggleCity} 
                            setToggleCity={props.setToggleCity} 
                            activeCity={props.activeCity} 
                            setActiveCity={props.setActiveCity}
                        />
                        { !props.toggleCity ? 
                            <>
                                <div className="change__city" onClick={() => {props.setToggleCity(!props.toggleCity)}}>Сменить город </div>
                                <div className="header__locate">
                                    <div className="locate__img">
                                        <img src="img/location.svg" />
                                    </div>
                                    <div className="locate">Мое местоположение</div>
                                </div> 
                            </>
                            : "" }
                    </div>
                    <div className="header__temperature">
                        <div className="header__img">
                            {getImg()}
                        </div>
                        <div className="temperature">
                            {props.cityData.temp}&deg;
                        </div>
                    </div>
                    <div className="predominantly">
                        {props.cityData.predominantly}
                    </div>
                    <div className="features">
                        <div className="wind">
                            <div className="wind__header"> Ветер </div>
                            <div className="wind__info">{props.cityData.wind}м/с </div> 
                        </div>
                        {/* ,{props.directionName} */}
                        <div className="pressure">
                            <div className="pressure__header"> Давление </div>
                            <div className="pressure__info">{props.cityData.pressure}мм рт. ст.</div>
                        </div>
                        <div className="humidity">
                            <div className="humidity__header"> Влажность </div>
                            <div className="humidity__info">{props.cityData.humidity}%</div>
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

Header.propTypes = {
    cityData: PropTypes.object,
    setCityData: PropTypes.func,
    toggleCity: PropTypes.bool,
    setToggleCity: PropTypes.func,
    activeCity: PropTypes.string,
    setActiveCity: PropTypes.func,
    typeTemp: PropTypes.string,
    setTypeTemp: PropTypes.func
};

Header.defaultProps = {
    cityData: {},
    setCityData: null,
    toggleCity: false,
    setToggleCity: null,
    activeCity: "",
    setActiveCity: null,
    typeTemp: METRIC,
    setTypeTemp: PropTypes.func
}

export default Header;