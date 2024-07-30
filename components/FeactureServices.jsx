'use client'
import {} from "../styles/FeactureServices.css";
import Image from "next/image";

const FeactureServices = () => {
  return (
    <div className="Feacture-services-container">
      <div>
        <h6 className="title-feacture-services">SERVICIOS DESTACADOS</h6>
        <span className="span-feacture-services">
          Cubrimos una gran variedad de servicios médicos
        </span>
      </div>
      <div className="all-card-text">
        <div className="prime-card-content">
          <div className="cards-content">
            <div className="cards-feactures">
              <Image
                className="img-feactures"
                src={
                  "https://healthflex.plethorathemes.com/wp-content/uploads/2015/09/strive-test.png"
                }
                alt="hola"
                width={120}
                height={140}
              />
              <span className="spna1-feactures">EXÁMENS</span>
              <span className="span2-feactures">Certifica tu salud</span>
            </div>
            <div className="cards-feactures">
              <Image
                className="img-feactures"
                src={
                  "https://healthflex.plethorathemes.com/wp-content/uploads/2015/09/strive-cardiology.png"
                }
                alt="hola"
                width={120}
                height={140}
              />
              <span className="spna1-feactures">CONSULTAS</span>
              <span className="span2-feactures">Para tu bienestar</span>
            </div>
            <div className="cards-feactures">
              <Image
                className="img-feactures"
                src={
                  "https://healthflex.plethorathemes.com/wp-content/uploads/2015/09/strive-dna.png"
                }
                alt="hola"
                width={120}
                height={140}
              />
              <span className="spna1-feactures">CITOLOGIA</span>
              <span className="span2-feactures">Diagnostica</span>
            </div>
          </div>
          <div className="text-content-below">
            <p>
            En la IPS Miguel Arcángel, ofrecemos una amplia gama de servicios médicos para garantizar tu salud y bienestar. Nuestro equipo de médicos expertos y personal clínico dedicado se comprometen a brindar una atención excepcional. Cuando visitas cualquiera de nuestras ubicaciones, puedes esperar una atención personalizada y servicios médicos de alta calidad.
            </p>
            <div className="content-rectangle">
              <div className="logo"></div>
              <span className="checkout">VISITA TODOS NUESTROS SERVICIOS</span>
            </div>
          </div>
        </div>
        <div className="second-card-content">
          <div className="title-second-cards-container">
            <span className="title-second">HORARIO LABORAL</span>
            <div className="separador-second"></div>
          </div>
          <div className="container-hours">
            <div className="hours">
              <span className="day">LUNES</span>
              <span className="hour">08:00AM-06:00PM</span>
            </div>
            <div className="hours">
              <span className="day">MARTES</span>
              <span className="hour">08:00AM-06:00PM</span>
            </div>
            <div className="hours">
              <span className="day">MIERCOLES</span>
              <span className="hour">08:00AM-06:00PM</span>
            </div>
            <div className="hours">
              <span className="day">JUEVES</span>
              <span className="hour">08:00AM-06:00PM</span>
            </div>
            <div className="hours">
              <span className="day">VIERNES</span>
              <span className="hour">08:00AM-06:00PM</span>
            </div>
            <div className="hours">
              <span className="day">SABADO</span>
              <span className="hour">08:00AM-02:00PM</span>
            </div>
          </div>
          <div className="title-second-cards-container">
            <span className="title-second">INSURANCE</span>
            <div className="separador-second"></div>
          </div>
          <p className="text" >Nuestro personal está comprometido a proporcionar el mejor servicio posible, asegurando que cada paciente reciba una atención personalizada y eficiente.</p>
        </div>
      </div>
    </div>
  );
};

export default FeactureServices;
