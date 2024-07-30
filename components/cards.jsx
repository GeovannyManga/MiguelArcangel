"use client";
import Image from "next/image";
import styles from "../styles/cards.module.css"; // Asegúrate de que la ruta sea correcta

export default function Cards() {
  return (
    <div className={styles.cardsContainer}>
      <a href="/services" className={styles.card + " " + styles.card1}>
        <Image src={"/img/icon_tree_white.png"} alt="arbol" width={100} height={100} />
        <p className={styles.text1}>DEPARTAMENTOS</p>
        <p className={styles.text2}>La base de Nuestra Clinica</p>
      </a>
      <a href="https://wa.me/573215937410" target="_blank" className={styles.card + " " + styles.card2}>
        <Image src={"/img/icon_med_book_white.png"} alt="arbol" width={100} height={100} />
        <p className={styles.text1}>SERVICIOS MEDICOS</p>
        <p className={styles.text2}>Contacta Nuestros Servicios</p>
      </a>
      <a href="https://wa.me/573215937410" target="_blank" className={styles.card + " " + styles.card3}>
        <Image src={"/img/icon_doctor1.png"} alt="arbol" width={100} height={100} />
        <p className={styles.text1}>ENCUENTRA UN DOCTOR</p>
        <p className={styles.text2}>Nuestro Equipo de Trabajo</p>
      </a>
      <a href="https://wa.me/573215937410" target="_blank" className={styles.card + " " + styles.card4}>
        <Image src={"/img/icon_help_desk1.png"} alt="arbol" width={100} height={100} />
        <p className={styles.text1}>SOLICITAR UNA CITA</p>
        <p className={styles.text2}>Llamanos o Llena un Formulario</p>
      </a>
    </div>
  );
}
