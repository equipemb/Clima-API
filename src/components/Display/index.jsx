import React from 'react';

import * as C from './styles';

import { FiWind, FiSun } from "react-icons/fi";

import { IoWaterOutline } from "react-icons/io5";

export default function Display  ({name, description, icon, temp, wind, humidity, max})  {

    const img = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    const desc = description[0].toUpperCase() + description.substr(1);
    return(
      <C.Container>
        <C.Top>
          <h1>{name}</h1>
          <img src={img}/>
          <h4>{desc}</h4>
        </C.Top>
        <C.Bottom>
          <C.Info>
            <div className="info-item">
              <FiWind size={22} color="white"/> <p>{wind} km/h</p>
            </div>
            <div className="info-item">
              <IoWaterOutline size={22} color="white"/> <p>{humidity} %</p>
            </div>
            <div className="info-item">
              <FiSun size={22} color="white"/> <p>{max} MÁX</p>
            </div>
          </C.Info>
          <C.Temperature>
            <p>{temp}</p>
          </C.Temperature>
          
        </C.Bottom>
        <h6>Equipe M.B. - © Copyright 2021</h6>
      </C.Container>
    );
}