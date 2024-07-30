import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/navbar.css";

export default function NavBar() {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [cliker, setCliker] = useState(false);

  const toogleMenu = () => {
    const elemento = document.getElementById("list2");
    if (elemento) {
      elemento.style.display = !cliker ? "flex" : "none";
      setCliker(!cliker);
    }
  };

  useEffect(() => {
    const handleScreenResize = () => {
      const elemento = document.getElementById("list2");
      if (window.innerWidth > 1055 && elemento) {
        elemento.style.display = "none";
        setCliker(false);
      }
    };

    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setIsTopBarVisible(!isScrolled);
    };

    const handleTopBarVisibilityChange = (event) => {
      setIsTopBarVisible(event.detail.isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener('topbarVisibilityChange', handleTopBarVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('topbarVisibilityChange', handleTopBarVisibilityChange);
    };
  }, []);

  return (
    <nav className={`nav-container-navbar ${isTopBarVisible ? "" : "scrolled"}`}>
      <div className="div-container-content-nav">
        <h1 className="img-logo">
          MIGUEL <span>ARCANGEL</span>
        </h1>
        <Image
          onClick={toogleMenu}
          className="menu"
          src="/img/menu.png"
          alt="menu"
          width={40}
          height={40}
        />
        <ul id="list" className="ul-navbar">
          <a className="li" href="/">
            <li>HOME</li>
          </a>
          <a className="li" href="/services">
            <li>SERVICIOS</li>
          </a>
          <a className="li" href="/team">
            <li>EQUIPO</li>
          </a>
          <a className="li" href="/about">
            <li>SOBRE NOSOTROS</li>
          </a>
          <a className="li" href="https://wa.me/573215937410" target="_blank" >
            <li>CONTACTANOS</li>
          </a>
        </ul>
      </div>
      <ul id="list2" className="ul-navbar2">
        <a className="li2" href="/">
          <li>HOME</li>
        </a>
        <a className="li2" href="/services">
          <li>SERVICIOS</li>
        </a>
        <a className="li2" href="/team">
          <li>EQUIPO</li>
        </a>
        <a className="li2" href="/about">
          <li>SOBRE NOSOTROS</li>
        </a>
        <a className="li2" href="/contact">
          <li>CONTACTANOS</li>
        </a>
      </ul>
    </nav>
  );
}
