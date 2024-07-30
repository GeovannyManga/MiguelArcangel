"use client";
import {} from "../../styles/about.css";
import TopBar from "../../components/TopBar.jsx";
import NavBar from "../../components/NavBar.jsx";
import Footer from "../../components/Footer.jsx";
import Image from "next/image";
const About = () => {
  return (
    <div className="main-content">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <div className="content">
        <Image
          className="banner"
          src="/img/help_desk.jpg"
          alt="img"
          width={1000}
          height={1000}
        ></Image>
        <div className="esquina">
          <h6 className="title">SOBRE NOSOTROS</h6>
        </div>
        <div className="diagonal">
          <h6 className="list">Conoce Un Poco Mas Sobre Nuestra I.P.S</h6>
        </div>
      </div>
      <div id="a1" className="contet-services1">
        <video
          src="/img/video1.webm"
          className="foto1"
          controls
          loop
          autoPlay
          width="600"
        >
          Your browser does not support the video tag.
        </video>
        <div className="content-text">
          <h6 className="title">QUIENES SOMOS</h6>
          <p className="subtitle">Conoce Nuestra Clínica</p>
          <p className="p-text">
            IPS MIGUEL ARCANGEL S.A.S, Es una entidad prestadora de servicios de
            salud de consulta externa, terapéutica, convencional y/o
            complementaria; proyectados a la comunidad en general, propendiendo
            al mejoramiento de la calidad de vida humana a través de estrategias
            eficaces y altamente confiables que conlleven a la rehabilitación
            del individuo y su contexto familiar. <br></br> <br></br>
            En la Clínica Miguel Arcángel, nos enorgullece ofrecer atención
            médica de alta calidad centrada en el bienestar integral de nuestros
            pacientes. Fundada con la misión de proporcionar servicios de salud
            accesibles y de excelencia, nuestra clínica combina tecnología de
            vanguardia con un enfoque humano y compasivo.
          </p>
          <a href="https://wa.me/+573215937410" className="botom">
            Contáctanos
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default About;
