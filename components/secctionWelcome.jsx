'use client'
import {} from "../styles/welcome.css";

const SecctionWelcome = () => {
  return (
    <div className="container-welcome">
      <div className="container-welcomr-div">
        <h2 className="welcome">BIENVENIDO A MIGUEL ARCANGEL</h2>
        <p className="p1">
        Hemos construido una relación duradera basada en la confianza.
        </p>
        <p className="p2">
        La atención personalizada al paciente es lo que distingue a la IPS Miguel Arcangel. Cuando visitas nuestro cuatro de atencion, puedes esperar recibir atención de primera clase. Médicos especialistas expertos y un atento personal clínico le brindan una experiencia de atención médica excepcional. La atención personalizada al paciente es lo que distingue a IPS Miguel Arcangel del resto.
        </p>
        <h6 className="welcome-subtitle">INSTALACIONES MÉDICAS MODERNAS</h6>
        <div className="line"></div>
        <p className="p3">
        Nuestras instalaciones están diseñadas pensando en el bienestar de los pacientes. Creamos un entorno que favorece la comodidad y tranquilidad, con áreas de espera cómodas y privadas, así como espacios dedicados a la consulta y tratamiento que aseguran la máxima privacidad y confidencialidad.
        </p>
      </div>
      <div className="division"></div>
      <a href="https://www.google.com/maps/dir//Diagonal+34+%235-49,+Santa+Marta,+Magdalena/@11.2359365,-74.1768856,15z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x8ef4f5d339f5b4dd:0xf7e9534e5237dd87!3e0?gl=co" className="content-img-bienvenido">
        <div className="img"></div>
        <p className="img-p">GUÍA PARA PACIENTE Y VISITANTE</p>
        <span className="img-apan">Planifica tu visita a nuestra Clínica.</span>
      </a>
   

    </div>
  );
};

export default SecctionWelcome;
