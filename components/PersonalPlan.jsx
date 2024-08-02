"use client";
import Image from "next/image";
import {} from "../styles/personalPlan.css";

const PersonalPlan =()=> {
  return (
    <div className="main-container-personalPlan">
      <div className="coso"></div>
     <div className="container-text">
      <h6  className="title-personalPlan">¿NECESITAS UN PLAN DE SALUD PERSONAL?</h6>
      <span className="span-personalPlan" >Llame Ahora +57 (321)5937410 y reciba Atención Médica de Primera Calidad para usted y su Familia</span>
      <div className="boton-plan">
        <div className="cuadro-personalPlan"></div>
        <a href="https://wa.me/573215937410" className="reques-plan">SOLICITAR PLAN</a>
      </div>
     </div>
     
    </div>
  );
}

export default PersonalPlan
