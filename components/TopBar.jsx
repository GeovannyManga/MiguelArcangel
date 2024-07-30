import React, { useState, useEffect } from "react";
import "../styles/topbar.css";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5 ;
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
    <div className={`div-main-topbar ${isVisible ? "" : "hidden"}`}>
      <div className="div-container-topbar">
        <ul className="ul-container-topbar ul-left">
          <li className="list-topbar"><a className="link" target="_blank" href="https://wa.me/573215937410">Preguntas Frecuentes</a></li>
          <li className="list-topbar"><a className="link" target="_blank" href="https://wa.me/573215937410">Solicitar una Cita</a></li>
        </ul>
        <ul className="ul-container-topbar ul-right">
          <li className="list-topbar"><a className="link" target="_blank" href="https://wa.me/573215937410">Numero de contacto: +57 (321) 5937410</a></li>
        </ul>
      </div>
    </div>
  );
}
