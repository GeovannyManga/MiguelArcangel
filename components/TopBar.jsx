import React, { useState, useEffect } from "react";
import styles from "../styles/topbar.module.css";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setIsVisible(!isScrolled);
      const event = new CustomEvent('topbarVisibilityChange', { detail: { isVisible: !isScrolled } });
      window.dispatchEvent(event);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.divMainTopbar} ${isVisible ? "" : styles.hidden}`}>
      <div className={styles.divContainerTopbar}>
        <ul className={`${styles.ulContainerTopbar} ${styles.ulLeft}`}>
          <li className={styles.listTopbar}>
            <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://wa.me/573215937410">Preguntas Frecuentes</a>
          </li>
          <li className={styles.listTopbar}>
            <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://wa.me/573215937410">Solicitar una Cita</a>
          </li>
        </ul>
        <ul className={`${styles.ulContainerTopbar} ${styles.ulRight}`}>
          <li className={styles.listTopbar}>
            <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://wa.me/573215937410">Numero de contacto: +57 (321) 5937410</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
