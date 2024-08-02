"use client";
import styles from "../../styles/team.module.css";
import TopBar from "../../components/TopBar.jsx";
import NavBar from "../../components/NavBar.jsx";
import Footer from "../../components/Footer.jsx";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.mainContent}>
      <TopBar />
      <NavBar />
      <div className={styles.content}>
        <Image
          className={styles.banner}
          src="/img/banner-about.jpg"
          alt="img"
          width={1000}
          height={1000}
        />
        <div className={styles.esquina}>
          <h6 className={styles.title}>TALENTO HUMANO</h6>
        </div>
        <div className={styles.diagonal}>
          <h6 className={styles.list}>Conoce a Nuestro Personal</h6>
        </div>
      </div>
      <div id="a1" className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/img/file.jpg"
          alt="img"
          width={1000}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>NUESTRO TALENTO HUMANO</h6>
          <p className={styles.subtitle}>Trabajando Por Una Gran Experiencia</p>
          <p className={styles.pText}>
            En la IPS Miguel Arcángel, nos enorgullecemos profundamente de nuestro equipo de trabajo. Nuestro personal está compuesto por profesionales altamente calificados y dedicados, comprometidos con brindar atención de la más alta calidad. Desde médicos especializados y enfermeras expertas hasta técnicos y personal administrativo, cada miembro de nuestro equipo juega un papel esencial en asegurar que nuestros pacientes reciban el mejor cuidado posible. En Miguel Arcángel, la excelencia y la empatía son los pilares de nuestro servicio, y estamos aquí para hacer la diferencia en cada etapa de su bienestar.
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
          src="/img/grupo.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>CALIDEZ HUMANA</h6>
          <p className={styles.subtitle}>
            Tu Atención Es lo Más Importante
          </p>
          <p className={styles.pText}>
            En la IPS Miguel Arcángel, destacamos por la calidez humana de nuestros empleados. Nos enorgullecemos de contar con un equipo no solo excelentemente preparado y con amplia experiencia, sino también profundamente comprometido con el bienestar de nuestros pacientes. Cada miembro de nuestro personal, desde médicos y enfermeras hasta el equipo administrativo, aporta un trato humano y empático en cada interacción. Creemos que la combinación de competencia profesional y calidez humana es fundamental para ofrecer una atención de calidad y crear un ambiente de confianza y comodidad para todos nuestros pacientes.
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
          src="/img/cap.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>CAPACITACIÓN CONSTANTE</h6>
          <p className={styles.subtitle}>
            Garantía de Salud y Bienestar
          </p>
          <p className={styles.pText}>
            En la IPS Miguel Arcángel, nos aseguramos de que nuestro equipo de trabajo esté en constante capacitación. Entendemos que la medicina y la atención al paciente están en continua evolución, por lo que nos comprometemos a mantener a nuestros profesionales al día con las últimas técnicas y conocimientos del sector. Desde médicos y enfermeras hasta el personal administrativo, todos nuestros empleados participan regularmente en programas de formación y desarrollo. Esta dedicación a la capacitación constante garantiza que podamos ofrecer un servicio de excelencia, adaptándonos a los avances y brindando siempre la mejor atención posible a nuestros pacientes.
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

export default About;
