import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

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
      const listElement = document.getElementById("list");
      const list2Element = document.getElementById("list2");
      if (window.innerWidth > 1055 && listElement && list2Element) {
        listElement.style.display = "flex";
        list2Element.style.display = "none";
        setCliker(false);
      } else if (window.innerWidth <= 1055 && listElement) {
        listElement.style.display = "none";
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
    <nav className={`${styles.navContainerNavbar} ${isTopBarVisible ? "" : styles.scrolled}`}>
      <div className={styles.divContainerContentNav}>
        <h1 className={styles.imgLogo}>
          MIGUEL <span>ARCANGEL</span>
        </h1>
        <Image
          onClick={toogleMenu}
          className={styles.menu}
          src="/img/menu.png"
          alt="menu"
          width={40}
          height={40}
        />
        <ul id="list" className={styles.ulNavbar}>
          <li className={styles.ulNavbarItem}><a className={styles.navLink} href="/">HOME</a></li>
          <li className={styles.ulNavbarItem}><a className={styles.navLink} href="/services">SERVICIOS</a></li>
          <li className={styles.ulNavbarItem}><a className={styles.navLink} href="/team">EQUIPO</a></li>
          <li className={styles.ulNavbarItem}><a className={styles.navLink} href="/about">SOBRE NOSOTROS</a></li>
          <li className={styles.ulNavbarItem}><a className={styles.navLink} href="https://wa.me/573215937410" target="_blank" rel="noopener noreferrer">CONTACTANOS</a></li>
        </ul>
      </div>
      <ul id="list2" className={styles.ulNavbar2} style={{ display: 'none' }}>
        <li className={styles.ulNavbar2Item}><a className={styles.navLink} href="/">HOME</a></li>
        <li className={styles.ulNavbar2Item}><a className={styles.navLink} href="/services">SERVICIOS</a></li>
        <li className={styles.ulNavbar2Item}><a className={styles.navLink} href="/team">EQUIPO</a></li>
        <li className={styles.ulNavbar2Item}><a className={styles.navLink} href="/about">SOBRE NOSOTROS</a></li>
        <li className={styles.ulNavbar2Item}><a className={styles.navLink} href="https://wa.me/573215937410">CONTACTANOS</a></li>
      </ul>
    </nav>
  );
}
