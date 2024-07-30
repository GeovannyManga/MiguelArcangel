'use client';
import styles from '../styles/medicalDepartaments.module.css';
import Image from 'next/image';

const MedicalDepartaments = () => {
  return (
    <div className={styles.contentMedical}>
      <h1 className={styles.titleMedical}>DEPARTAMENTOS MÉDICOS</h1>
      <span className={styles.subTitleMedical}>La Base de Nuestra Clinica</span>
      <div className={styles.containerCardTextMedical}>
        <div className={styles.divContainerCardsMedical}>
          <div className={styles.cardsMedical}>
            <Image
              className={styles.imgMedical}
              src="/img/psicologia.jpg"
              alt="imagen"
              width={1000}
              height={1000}
            />
            <span className={styles.span1Medical}>PSICOLOGIA</span>
            <span className={styles.span2Medical}>Apoyo Emocional y Bienestar Mental</span>
          </div>
          <div className={styles.cardsMedical}>
            <Image
              className={styles.imgMedical}
              src="/img/fonoaudiologia.jpg"
              alt="imagen"
              width={1000}
              height={1000}
            />
            <span className={styles.span1Medical}>FONOAUDIOLOGIA</span>
            <span className={styles.span2Medical}>Mejora de la Comunicación</span>
          </div>
          <div className={styles.cardsMedical}>
            <Image
              className={styles.imgMedical}
              src="/img/terapia.jpg"
              alt="imagen"
              width={1000}
              height={1000}
            />
            <span className={styles.span1Medical}>TERAPIA OCUPACIONAL</span>
            <span className={styles.span2Medical}>Mejorando la Vida con Actividad</span>
          </div>
        </div>
        <div>
          <div className={styles.lineContentMedical}>
            <h6 className={styles.titleMedicalH6}>INSTALACIONES MODERNAS</h6>
            <div className={styles.lineMedical}></div>
          </div>
          <p className={styles.pMedical}>
            En la IPS Miguel Arcángel, no solo nos destacamos por nuestro equipamiento moderno, sino también por nuestras hermosas y cómodas instalaciones. Nos hemos esforzado por crear un ambiente acogedor y cálido, donde cada detalle está diseñado para ofrecer la máxima comodidad a nuestros pacientes. Desde salas de espera amplias y agradables hasta habitaciones bien equipadas y acogedoras, cada espacio en nuestra IPS está pensado para hacer que su experiencia sea lo más cómoda y agradable posible.
          </p>
          <div className={styles.rectangleContentMedical}>
            <div className={styles.imMedical}></div>
            <a href="/services" className={styles.checkMedical}>VISITA NUESTROS DEPARTAMENTOS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDepartaments;
