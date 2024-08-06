'use client';
import styles from "../styles/feactureServices.module.css";
import Image from "next/image";

const FeactureServices = () => {
  return (
    <div className={styles.feactureServicesContainer}>
      <div>
        <h6 className={styles.titleFeactureServices}>SERVICIOS DESTACADOS</h6>
        <span className={styles.spanFeactureServices}>
          Cubrimos una gran variedad de servicios médicos
        </span>
      </div>
      <div className={styles.allCardText}>
        <div className={styles.primeCardContent}>
          <div className={styles.cardsContent}>
            <a href="https://wa.me/573215937410" className={styles.cardsFeactures}>
              <Image
                className={styles.imgFeactures}
                src="https://healthflex.plethorathemes.com/wp-content/uploads/2015/09/strive-test.png"
                alt="hola"
                width={120}
                height={140}
              />
              <span className={styles.spna1Feactures}>EXÁMENES</span>
              <span className={styles.span2Feactures}>Certifica tu salud</span>
            </a>
            <a href="https://wa.me/573215937410" className={styles.cardsFeactures}>
              <Image
                className={styles.imgFeactures}
                src="https://healthflex.plethorathemes.com/wp-content/uploads/2015/09/strive-cardiology.png"
                alt="hola"
                width={120}
                height={140}
              />
              <span className={styles.spna1Feactures}>CONSULTAS</span>
              <span className={styles.span2Feactures}>Para tu bienestar</span>
            </a>
            <a href="https://wa.me/573215937410" className={styles.cardsFeactures}>
              <Image
                className={styles.imgFeactures}
                src="https://healthflex.plethorathemes.com/wp-content/uploads/2015/09/strive-dna.png"
                alt="hola"
                width={120}
                height={140}
              />
              <span className={styles.spna1Feactures}>CITOLOGIA</span>
              <span className={styles.span2Feactures}>Diagnostica</span>
            </a>
          </div>
          <div className={styles.textContentBelow}>
            <p>
              En la IPS Miguel Arcángel, ofrecemos una amplia gama de servicios médicos para garantizar tu salud y bienestar. Nuestro equipo de médicos expertos y personal clínico dedicado se comprometen a brindar una atención excepcional. Cuando visitas cualquiera de nuestras ubicaciones, puedes esperar una atención personalizada y servicios médicos de alta calidad.
            </p>
            <a href="/services" className={styles.contentRectangle}>
              <div className={styles.logo}></div>
              <span className={styles.checkout}>IR A SERVICIOS</span>
            </a>
          </div>
        </div>
        <div className={styles.secondCardContent}>
          <div className={styles.titleSecondCardsContainer}>
            <span className={styles.titleSecond}>HORARIO LABORAL</span>
            <div className={styles.separadorSecond}></div>
          </div>
          <div className={styles.containerHours}>
            <div className={styles.hours}>
              <span className={styles.day}>LUNES</span>
              <span className={styles.hour}>8AM-12PM-2PM-6PM</span>
            </div>
            <div className={styles.hours}>
              <span className={styles.day}>MARTES</span>
              <span className={styles.hour}>8AM-12PM-2PM-6PM</span>
            </div>
            <div className={styles.hours}>
              <span className={styles.day}>MIERCOLES</span>
              <span className={styles.hour}>8AM-12PM-2PM-6PM</span>
            </div>
            <div className={styles.hours}>
              <span className={styles.day}>JUEVES</span>
              <span className={styles.hour}>8AM-12PM-2PM-6PM</span>
            </div>
            <div className={styles.hours}>
              <span className={styles.day}>VIERNES</span>
              <span className={styles.hour}>8AM-12PM-2PM-6PM</span>
            </div>
            <div className={styles.hours}>
              <span className={styles.day}>SABADO</span>
              <span className={styles.hour}>8AM-12PM</span>
            </div>
          </div>
          <div className={styles.titleSecondCardsContainer}>
            <span className={styles.titleSecond}>GARANÍA</span>
            <div className={styles.separadorSecond}></div>
          </div>
          <p className={styles.text}>
            Nuestro personal está comprometido a proporcionar el mejor servicio posible, asegurando que cada paciente reciba una atención personalizada y eficiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeactureServices;
