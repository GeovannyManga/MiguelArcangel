'use client'
import {} from "../styles/medicalDepartaments.css";
import Image from "next/image";


const MedicalDepartaments = () => {





  return (
    <div className="content-medical">
      <h1 className="title-medical">DEPARTAMENTOS MÉDICOS</h1>
      <span className="sub-title-medical">La Base de Nuestra Clinica</span>
      <div className="container-card-text-medical">
      <div className="div-container-cards-medical">
        <div className="cards-medical">
          <Image
            className="img-medical"
            src="/img/psicologia.jpg"
            alt="imagen"
            width={1000}
            height={1000}
          />
          <span className="span1-medical">PSICOLOGIA</span>
          <span className="span2-medical">Apoyo Emocional y Bienestar Mental</span>
        </div>
        <div className="cards-medical">
          <Image
            className="img-medical"
            src="/img/fonoaudiologia.jpg"
            alt="imagen"
            width={1000}
            height={1000}
          />
          <span className="span1-medical">FONOAUDIOLOGIA</span>
          <span className="span2-medical">Mejora de la Comunicación</span>
        </div>
        <div className="cards-medical">
          <Image
            className="img-medical"
            src="/img/terapia.jpg"
            alt="imagen"
            width={1000}
            height={1000}
          />
          <span className="span1-medical">TERAPIA OCUPACIONAL</span>
          <span className="span2-medical">Mejorando la Vida con Actividad</span>
        </div>
      </div>
      <div>
        <div className="line-content-medical" >
        <h6 className="title-medical-h6" >INSTALACIONES MODERNAS</h6>
        <div className="line-medical" ></div>
        </div>
        <p className="p-medical">
        En la IPS Miguel Arcángel, no solo nos destacamos por nuestro equipamiento moderno, sino también por nuestras hermosas y cómodas instalaciones. Nos hemos esforzado por crear un ambiente acogedor y cálido, donde cada detalle está diseñado para ofrecer la máxima comodidad a nuestros pacientes. Desde salas de espera amplias y agradables hasta habitaciones bien equipadas y acogedoras, cada espacio en nuestra IPS está pensado para hacer que su experiencia sea lo más cómoda y agradable posible.
        </p>
      <div className="rectangle-content-medical" >
        <div className="im-medical" ></div>
        <a href="/services" className="check-medical">VISITA NUESTROS DEPARTAMENTOS</a>
      </div>
      </div>
      </div>
    </div>
  );
};

export default MedicalDepartaments;
