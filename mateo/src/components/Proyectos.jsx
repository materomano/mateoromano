import React from "react";
import rental from "/images/logo.png";
import logopetro from "/images/logo.jpg";
import { principal, foto } from "../Estilos/proyectos.module.css";

const Proyectos = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.location.href = "http://3.82.145.148:3000/";
  };
  const handleClickk = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.location.href = "https://www.petrobus.org/";
  };

  return (
    <div className={principal}>
      <h1>PROJECTS</h1>
      <h2>Car Rental En Digital House</h2>
      <a href="" onClick={handleClick}>
        <img src={rental} alt="Proyecto"  className={foto}/>
      </a>
      <div>
        <h2>Web Para Empresa Petrobus</h2>
        <a href="" onClick={handleClickk}>
          <img src={logopetro} alt="Proyecto" />
        </a>
      </div>
    </div>
  );
};

export default Proyectos;
