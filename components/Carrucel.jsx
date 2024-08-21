"use client";
import Image from "next/image";
import { useEffect, useRef, useMemo } from "react";
import styles from "../styles/carrucel.module.css";

export default function Carrucel() {
  const imgArr = useMemo(() => [
    "/img/doctor_blue.jpg",
    "/img/doctor_white.jpg",
    "/img/slider-2.jpg",
    "/img/doctor_blue.jpg"
  ], []);

  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    let index = 0;

    const rotateImages = () => {
      if (index >= imgArr.length) {
        index = 0;
        content.style.transition = "none"; // Quita la animación para reiniciar
        content.style.transform = `translateX(0%)`;
        setTimeout(() => {
          content.style.transition = "transform 1s ease";
          content.style.transform = `translateX(-100%)`;
        }, 50); // Permite que el navegador refluya y aplique la transición
      } else {
        content.style.transform = `translateX(-${index * 100}%)`;
      }
      index++;
    };

    const intervalId = setInterval(rotateImages, 10000); // Cambiado a 5000ms para un cambio más lento

    return () => clearInterval(intervalId);
  }, [imgArr]);

  return (
    <div className={styles.divCarrucelContainer}>
      <div ref={contentRef} className={styles.contentRotation}>
        {imgArr.map((src, idx) => (
          <div key={idx} className={styles.imgContainer}>
            <Image
              className={styles.imgCarrucel}
              src={src}
              alt={`Carrucel image ${idx}`}
              width={1080}
              height={1000}
            />
          </div>
        ))}
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
