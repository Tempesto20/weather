import React from 'react';
import cloudImg from '../../img/cloud.svg';
import sunImg from '../../img/sun.svg';
import partlyCloudyImg from '../../img/partlyCloudy.svg';
import rainImg from '../../img/rain.svg';
import stormImg from '../../img/strom.svg';

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
        <div className="container">
            <div className="pricing-table row">
                <div className="package featured">
                    <div className="package-name">{props.city}</div>
                    <div className="price">{props.temp}&deg;</div>
                    <div className="disclaimer">Clouds</div>
                    <div>{getImg()}</div>
                    <ul className="features">
                        <li>Feature 1</li>
                    </ul>
                    <button className="button-primary">Go</button>
                </div>
            </div>
        </div>
    )
}

export default Header;