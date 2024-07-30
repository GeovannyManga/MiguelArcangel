"use client";
import Image from "next/image";
import styles from "../styles/carrucel.module.css";

export default function Carrucel() {
  const imgArr = ["/img/doctor_blue.jpg", "/img/doctor_white.jpg", "/img/slider-2.jpg"];

  return (
    <div className={styles.divCarrucelContainer}>
      <div className={styles.contentRotation}>
        <Image
          className={styles.imgCarrucel}
          src={imgArr[0]}
          alt="foto"
          width={1080}
          height={1000}
        />
        <Image
          className={styles.imgCarrucel}
          style={{ transform: 'scaleX(-1)' }}
          src={imgArr[1]}
          alt="foto"
          width={1080}
          height={1000}
        />
        <Image
          className={styles.imgCarrucel}
          src={imgArr[2]}
          alt="foto"
          width={1080}
          height={1000}
        />
        <Image
          className={styles.imgCarrucel}
          src={imgArr[0]}
          alt="foto"
          width={1080}
          height={1000}
        />
      </div>
      <div className={styles.publish}>
        <span className={styles.titlePublish}>PLANES FAMILIARES</span>
        <div className={styles.contentSubtitlePublish}>
          <span className={styles.subtitlePublish}>Tu salud es nuestra prioridad</span>
          <div className={styles.linePublish}></div>
        </div>
        <span className={styles.pPublish}>
          Con un enfoque en la prevención y el bienestar, nuestros planes están diseñados para ofrecer tranquilidad y seguridad, permitiéndote disfrutar de los momentos más importantes con la confianza de que la salud de tu familia está en buenas manos.
        </span>
        <a className={styles.botonPublish} href="https://wa.me/+573215937410">LEARN MORE</a>
      </div>
    </div>
  );
}
