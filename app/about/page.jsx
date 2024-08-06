"use client";
import styles from "../../styles/about.module.css";
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
          src="/img/help_desk.jpg"
          alt="img"
          width={1000}
          height={1000}
        />
        <div className={styles.esquina}>
          <h6 className={styles.title}>SOBRE NOSOTROS</h6>
        </div>
        <div className={styles.diagonal}>
          <h6 className={styles.list}>
            Conoce Un Poco Mas Sobre Nuestra I.P.S
          </h6>
        </div>
      </div>
      <div id="a1" className={styles.contetServices1}>
        <video
          src="/img/video1.webm"
          className={styles.foto1}
          controls
          loop
          autoPlay
          width="600"
        >
          Your browser does not support the video tag.
        </video>
        <div className={styles.contentText}>
          <h6 className={styles.title}>QUIENES SOMOS</h6>
          <p className={styles.subtitle}>Conoce Nuestra Clínica</p>
          <p className={styles.pText}>
            IPS MIGUEL ARCANGEL S.A.S, Es una entidad prestadora de servicios de
            salud de consulta externa, terapéutica, convencional y/o
            complementaria; proyectados a la comunidad en general, propendiendo
            al mejoramiento de la calidad de vida humana a través de estrategias
            eficaces y altamente confiables que conlleven a la rehabilitación
            del individuo y su contexto familiar. <br /> <br />
            <h2 className={styles.subtitle}>Mision</h2>
            <br />
            IPS MIGUEL ARCANGEL S.A.S, Es una entidad prestadora de servicios de
            salud de consulta externa, terapéutica, convencional y/o
            complementaria; proyectados a la comunidad en general, propendiendo
            al mejoramiento de la calidad de vida humana a través de estrategias
            eficaces y altamente confiables que conlleven a la rehabilitación
            del individuo y su contexto familiar. <br />
            <br />
            <h2 className={styles.subtitle}>Vision</h2>
            <br />
            CIPS MIGUEL ARCANGEL S.A.S, estamos comprometidos con la prestación
            de servicios de atención integral en salud (Consulta Externa,
            Rehabilitación y/o Habilitación), satisfaciendo cabalmente las
            necesidades y expectativas de nuestros usuarios, cumpliendo con las
            citas programadas, desarrollando procesos confiables, garantizando
            una atención humana, confiable y oportuna. Ofrecemos atención
            integral, oportuna y eficaz, con calidad y calidez humana y
            científica en todos nuestros servicios. <br /> <br />
            <h2 className={styles.subtitle}>Politica De Calidad</h2>
            <br />
            Con la guía de Dios Todopoderoso, para el año 2030 seremos una
            entidad reconocida en el departamento del Magdalena como una IPS que
            presta servicios de salud, de consulta externa, rehabilitación y
            habilitación con calidad y excelencia, con el apoyo de un equipo
            multidisciplinario capacitado, que busca el mejoramiento de la
            calidad de vida de la población adscrita a ella.
          </p>

          <a href="https://wa.me/+573215937410" className={styles.botom}>
            Contáctanos
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
