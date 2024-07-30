"use client";
import {} from "../../styles/services.css";
import TopBar from "../../components/TopBar.jsx";
import NavBar from "../../components/NavBar.jsx";
import Footer from "../../components/Footer.jsx";
import Image from "next/image";
const Services = () => {
  return (
    <div className="main-content">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <div className="content">
        <Image
          className="banner"
          src="/img/doctor_blue_left.webp"
          alt="img"
          width={1000}
          height={1000}
        ></Image>
        <div className="esquina">
          <h6 className="title">DEPARTAMENTOS</h6>
        </div>
        <div className="diagonal">
          <h6 className="list">Una lista de todos nuestros departamentos</h6>
        </div>
      </div>
      <div id="a1" className="contet-services1">
        <Image
          className="foto1"
          src="/img/servicio1.jpg"
          alt="img"
          width={800}
          height={200}
        ></Image>
        <div className="content-text">
          <h6 className="title">DEPARTAMENTO DE CITOLOGÍA</h6>
          <p className="subtitle">Expertos en Diagnóstico Celular</p>
          <p className="p-text">
            Nuestro Departamento de Citología se especializa en el análisis
            detallado de células para la detección temprana y el diagnóstico
            preciso de diversas enfermedades. Utilizando tecnología de
            vanguardia y técnicas avanzadas, garantizamos resultados confiables
            y de alta calidad para apoyar la salud y el bienestar de nuestros
            pacientes.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className="botom"
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className="contet-services1">
        <Image
          className="foto1"
          src="/img/laboratorio.png"
          alt="img"
          width={800}
          height={200}
        ></Image>
        <div className="content-text">
          <h6 className="title">EXAMENES DE LABORATORIO</h6>
          <p className="subtitle">
            Resultados Confiables para un Diagnóstico Preciso
          </p>
          <p className="p-text">
            Nuestro servicio de Exámenes de Laboratorio utiliza tecnología
            avanzada para ofrecer análisis clínicos precisos y confiables. Con
            una amplia gama de pruebas, aseguramos resultados rápidos y exactos
            que apoyan el diagnóstico y tratamiento efectivo de nuestros
            pacientes. Su salud es nuestra prioridad.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className="botom"
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className="contet-services1">
        <Image
          className="foto1"
          src="/img/certificado.jpg"
          alt="img"
          width={800}
          height={200}
        ></Image>
        <div className="content-text">
          <h6 className="title">CERTIFICADOS MÉDICOS</h6>
          <p className="subtitle">
          Garantía de Salud y Bienestar
          </p>
          <p className="p-text">
          Nuestro servicio de emisión de Certificados Médicos proporciona documentación oficial que certifica su estado de salud para diversos propósitos. Ya sea para empleo, estudios, actividades deportivas o viajes, nuestros certificados cumplen con todos los requisitos legales y profesionales. Con un equipo médico altamente capacitado y una evaluación minuciosa, aseguramos la exactitud y validez de cada certificado emitido. Su bienestar y cumplimiento son nuestra prioridad.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className="botom"
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className="contet-services1">
        <Image
          className="foto1"
          src="/img/terapia.jpg"
          alt="img"
          width={800}
          height={200}
        ></Image>
        <div className="content-text">
          <h6 className="title">TERAPIA OCUPACIONAL</h6>
          <p className="subtitle">
          Mejorando la Vida a Través de la Actividad
          </p>
          <p className="p-text">
          La terapia ocupacional se dedica a ayudar a las personas a participar en las actividades cotidianas que son importantes para ellas. Nuestros terapeutas ocupacionales trabajan con personas de todas las edades para superar barreras físicas, emocionales o sociales, permitiéndoles vivir de manera más independiente y satisfactoria. Ya sea recuperando habilidades motoras después de una lesión, adaptando entornos para mayor accesibilidad o desarrollando estrategias para el manejo de la vida diaria, nuestro objetivo es mejorar la calidad de vida a través de la ocupación significativa y personalizada.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className="botom"
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className="contet-services1">
        <Image
          className="foto1"
          src="/img/psicologia.jpg"
          alt="img"
          width={800}
          height={200}
        ></Image>
        <div className="content-text">
          <h6 className="title">PSICOLOGIA</h6>
          <p className="subtitle">
          Apoyo Emocional y Bienestar Mental
          </p>
          <p className="p-text">
          Nuestro servicio de Psicología se dedica a ofrecer apoyo emocional y promover el bienestar mental de nuestros pacientes. Contamos con un equipo de profesionales calificados que utilizan enfoques terapéuticos basados en evidencia para abordar una variedad de problemas, desde el manejo del estrés y la ansiedad hasta la superación de traumas y el desarrollo personal. Nuestro objetivo es proporcionar un espacio seguro y confidencial donde cada individuo pueda explorar sus pensamientos y emociones, desarrollar habilidades de afrontamiento y alcanzar un mayor equilibrio emocional en su vida diaria.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className="botom"
          >
            Contáctanos
          </a>
        </div>
      </div><div className="contet-services1">
        <Image
          className="foto1"
          src="/img/fonoaudiologia.jpg"
          alt="img"
          width={800}
          height={200}
        ></Image>
        <div className="content-text">
          <h6 className="title">FONOAUDIOLOGIA</h6>
          <p className="subtitle">
          Mejora de la Comunicación y Deglución
          </p>
          <p className="p-text">
          La fonoaudiología se dedica a evaluar, diagnosticar y tratar trastornos de la comunicación y la deglución en personas de todas las edades. Nuestros fonoaudiólogos especializados trabajan con pacientes que presentan dificultades en el habla, el lenguaje, la voz y la audición, así como problemas para tragar. Utilizamos técnicas y terapias basadas en la evidencia para ayudar a nuestros pacientes a mejorar sus habilidades comunicativas y deglutorias, promoviendo una mejor calidad de vida y bienestar general.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className="botom"
          >
            Contáctanos
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Services;
