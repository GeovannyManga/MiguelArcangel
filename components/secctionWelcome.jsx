'use client'
import styles from "../styles/welcome.module.css";

const SecctionWelcome = () => {
  return (
    <div className={styles.containerWelcome}>
      <div className={styles.containerWelcomrDiv}>
        <h2 className={styles.welcome}>BIENVENIDO A MIGUEL ARCANGEL</h2>
        <p className={styles.p1}>
          Hemos construido una relación duradera basada en la confianza.
        </p>
        <p className={styles.p2}>
          La atención personalizada al paciente es lo que distingue a la IPS Miguel Arcangel. Cuando visitas nuestro cuatro de atencion, puedes esperar recibir atención de primera clase. Médicos especialistas expertos y un atento personal clínico le brindan una experiencia de atención médica excepcional. La atención personalizada al paciente es lo que distingue a IPS Miguel Arcangel del resto.
        </p>
        <h6 className={styles.welcomeSubtitle}>INSTALACIONES MÉDICAS MODERNAS</h6>
        <div className={styles.line}></div>
        <p className={styles.p3}>
          Nuestras instalaciones están diseñadas pensando en el bienestar de los pacientes. Creamos un entorno que favorece la comodidad y tranquilidad, con áreas de espera cómodas y privadas, así como espacios dedicados a la consulta y tratamiento que aseguran la máxima privacidad y confidencialidad.
        </p>
      </div>
      <div className={styles.division}></div>
      <a
        href="https://www.google.com/maps/dir//Diagonal+34+%235-49,+Santa+Marta,+Magdalena/@11.2359365,-74.1768856,15z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x8ef4f5d339f5b4dd:0xf7e9534e5237dd87!3e0?gl=co"
        className={styles.contentImgBienvenido}
      >
        <div className={styles.img}></div>
        <p className={styles.imgP}>GUÍA PARA PACIENTE Y VISITANTE</p>
        <span className={styles.imgApan}>Planifica tu visita a nuestra Clínica.</span>
      </a>
    </div>
  );
};

export default SecctionWelcome;
