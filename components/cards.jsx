"use client";
import Image from "next/image";
import {} from "../styles/cards.css";

export default function Cards() {
  return (
    <div className="div-cards-container">
     <a href="/services" className="card1">
      <Image src={"/img/icon_tree_white.png"} alt="arbol" width={100} height={100} />
      <p className="text1">DEPARTAMENTOS</p>
      <p className="text2">La base de Nuestra Clinica</p>
     </a>
     <a href="https://wa.me/573215937410" target="_blank" className="card2">
     <Image src={"/img/icon_med_book_white.png"} alt="arbol" width={100} height={100} />
     <p className="text1">SERVICIOS MEDICOS</p>
      <p className="text2">Contacta Nuestros Servicios</p>
     </a>
     <a href="https://wa.me/573215937410" target="_blank" className="card3">
     <Image src={"/img/icon_doctor1.png"} alt="arbol" width={100} height={100} />
     <p className="text1">ECUENTRA UN DOCTOR</p>
      <p className="text2">Nuestro Equipo de Trabajo</p>
     </a>
     <a href="https://wa.me/573215937410" target="_blank" className="card4">
     <Image src={"/img/icon_help_desk1.png"} alt="arbol" width={100} height={100} />
     <p className="text1">SOLICITAR UNA CITA</p>
      <p className="text2">Llamanos o Llena un Formulario</p>
     </a>
     
    </div>
  );
}
