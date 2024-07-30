"use client";
import Image from "next/image";
import "../styles/carrucel.css";


export default function Carrucel() {

  const imgArr = ["/img/doctor_blue.jpg","/img/doctor_white.jpg","/img/slider-2.jpg" ];

  
  return (
    <div className="div-carrucel-container">
      <div className="content-rotation">
      <Image
    className="img-carrucel"
    src={imgArr[0]}
    alt="foto"
    width={1080}
    height={1000}
/>
<Image
    className="img-carrucel"
    style={{ transform: 'scaleX(-1)' }}
    src={imgArr[1]}
    alt="foto"
    width={1080}
    height={1000}
/>
<Image
    className="img-carrucel"
    
    src={imgArr[2]}
    alt="foto"
    width={1080}
    height={1000}
/>
<Image
    className="img-carrucel"
    src={imgArr[0]}
    alt="foto"
    width={1080}
    height={1000}
/>
</div>
<div className="publish">
  <span className="title-publish">PLANES FAMILIARES</span>
  <div className="content-subtitle-publish">
    <span className="subtitle-publish">Tu salud es nuestra prioridad</span>
    <div className="line-publish"></div>
  </div>
  <span className="p-publish">Con un enfoque en la prevención y el bienestar, nuestros planes están diseñados para ofrecer tranquilidad y seguridad, permitiéndote disfrutar de los momentos más importantes con la confianza de que la salud de tu familia está en buenas manos.</span>
  <a className="boton-publish" href="https://wa.me/+573215937410">LEARN MORE</a>
</div>
    </div>
  );
}
