"use client";
import styles from "../../styles/services.module.css";
import TopBar from "../../components/TopBar.jsx";
import NavBar from "../../components/NavBar.jsx";
import Footer from "../../components/Footer.jsx";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.mainContent}>
      <TopBar />
      <NavBar />
      <div className={styles.content}>
        <Image
          className={styles.banner}
          src="/img/doctor_blue_left.webp"
          alt="img"
          width={1000}
          height={1000}
        />
        <div className={styles.esquina}>
          <h6 className={styles.title}>DEPARTAMENTOS</h6>
        </div>
        <div className={styles.diagonal}>
          <h6 className={styles.list}>Una lista de todos nuestros departamentos</h6>
        </div>
      </div>
      <div id="a1" className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/img/servicio1.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>DEPARTAMENTO DE CITOLOGÍA</h6>
          <p className={styles.subtitle}>Expertos en Diagnóstico Celular</p>
          <p className={styles.pText}>
            Nuestro Departamento de Citología se especializa en el análisis
            detallado de células para la detección temprana y el diagnóstico
            preciso de diversas enfermedades. Utilizando tecnología de
            vanguardia y técnicas avanzadas, garantizamos resultados confiables
            y de alta calidad para apoyar la salud y el bienestar de nuestros
            pacientes.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/img/laboratorio.png"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>EXAMENES DE LABORATORIO</h6>
          <p className={styles.subtitle}>Resultados Confiables para un Diagnóstico Preciso</p>
          <p className={styles.pText}>
            Nuestro servicio de Exámenes de Laboratorio utiliza tecnología
            avanzada para ofrecer análisis clínicos precisos y confiables. Con
            una amplia gama de pruebas, aseguramos resultados rápidos y exactos
            que apoyan el diagnóstico y tratamiento efectivo de nuestros
            pacientes. Su salud es nuestra prioridad.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/img/certificado.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>CERTIFICADOS MÉDICOS</h6>
          <p className={styles.subtitle}>Garantía de Salud y Bienestar</p>
          <p className={styles.pText}>
            Nuestro servicio de emisión de Certificados Médicos proporciona documentación oficial que certifica su estado de salud para diversos propósitos. Ya sea para empleo, estudios, actividades deportivas o viajes, nuestros certificados cumplen con todos los requisitos legales y profesionales. Con un equipo médico altamente capacitado y una evaluación minuciosa, aseguramos la exactitud y validez de cada certificado emitido. Su bienestar y cumplimiento son nuestra prioridad.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/img/terapia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>TERAPIA OCUPACIONAL</h6>
          <p className={styles.subtitle}>Mejorando la Vida a Través de la Actividad</p>
          <p className={styles.pText}>
            La terapia ocupacional se dedica a ayudar a las personas a participar en las actividades cotidianas que son importantes para ellas. Nuestros terapeutas ocupacionales trabajan con personas de todas las edades para superar barreras físicas, emocionales o sociales, permitiéndoles vivir de manera más independiente y satisfactoria. Ya sea recuperando habilidades motoras después de una lesión, adaptando entornos para mayor accesibilidad o desarrollando estrategias para el manejo de la vida diaria, nuestro objetivo es mejorar la calidad de vida a través de la ocupación significativa y personalizada.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/img/psicologia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>PSICOLOGÍA</h6>
          <p className={styles.subtitle}>Apoyo Emocional y Bienestar Mental</p>
          <p className={styles.pText}>
            Nuestro servicio de Psicología se dedica a ofrecer apoyo emocional y promover el bienestar mental de nuestros pacientes. Contamos con un equipo de profesionales calificados que utilizan enfoques terapéuticos basados en evidencia para abordar una variedad de problemas, desde el manejo del estrés y la ansiedad hasta la superación de traumas y el desarrollo personal. Nuestro objetivo es proporcionar un espacio seguro y confidencial donde cada individuo pueda explorar sus pensamientos y emociones, desarrollar habilidades de afrontamiento y alcanzar un mayor equilibrio emocional en su vida diaria.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/img/fonoaudiologia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>FONOAUDIOLOGÍA</h6>
          <p className={styles.subtitle}>Mejora de la Comunicación y Deglución</p>
          <p className={styles.pText}>
            La fonoaudiología se dedica a evaluar, diagnosticar y tratar trastornos de la comunicación y la deglución en personas de todas las edades. Nuestros fonoaudiólogos especializados trabajan con pacientes que presentan dificultades en el habla, el lenguaje, la voz y la audición, así como problemas para tragar. Utilizamos técnicas y terapias basadas en la evidencia para ayudar a nuestros pacientes a mejorar sus habilidades comunicativas y deglutorias, promoviendo una mejor calidad de vida y bienestar general.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
