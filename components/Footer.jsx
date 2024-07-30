'use client';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.content1Footer}>
        <h6 className={styles.titleFooter}>MIGUEL <span>ARCANGEL</span></h6>
        <p className={styles.descriptionFooter}>
          Nuestro equipo está plenamente comprometido con ofrecerte un servicio excepcional y garantizar que tus necesidades sean atendidas con la mayor eficacia posible. Valoramos profundamente tu confianza y tu interés en nuestros servicios, y nos esforzamos constantemente por superar tus expectativas.
        </p>
        <div className={styles.contactos}>
          <Image className={styles.imgFooter} src="/img/icons8-phone-50.png" alt="contact" width={100} height={100} />
          <span>(+57) 321 5937410</span>
        </div>
        <div className={styles.contactos}>
          <Image className={styles.imgFooter} src="/img/icons8-correo-24.png" alt="contact" width={100} height={100} />
          <span>ipsmiguelarcangelsas@gmail.com</span>
        </div>
        <div className={styles.contactos}>
          <Image className={styles.imgFooter} src="/img/icons8-enviar-50.png" alt="contact" width={100} height={100} />
          <span>Diagonal 34 #5-49</span>
        </div>
      </div>
      <div className={styles.content2Footer}>
        <div className={styles.subtitleFooter}>
          <span className={styles.spanTitleFooter}>QUICK LINKS</span>
          <div className={styles.lineFooter}></div>
        </div>
        <ul className={styles.listaFooter}>
          <a className={styles.link} href="/services"><li>TODOS NUESTROS SERVICIOS</li></a>
          <a className={styles.link} href="https://wa.me/573215937410"><li>FAQ</li></a>
          <a className={styles.link} href="https://wa.me/573215937410"><li>TARIFAS Y SEGUROS</li></a>
          <a className={styles.link} href="https://wa.me/573215937410"><li>OFERTAS DE CHEQUEO</li></a>
          <a className={styles.link} href="/about"><li>SOBRE NOSOTROS</li></a>
        </ul>
        <ul className={styles.socialMedia}>
          <a className={styles.link} href="https://www.facebook.com/profile.php?id=100089845926460" target="_blank" rel="noopener noreferrer">
            <li className={`${styles.imgSocialMedia} ${styles.solis1}`}></li>
          </a>
          <a className={styles.link} href="mailto:ipsmiguelarcangelsas@gmail.com">
            <li className={`${styles.imgSocialMedia} ${styles.solis2}`}></li>
          </a>
          <a className={styles.link}  href="https://wa.me/573215937410">
            <li className={`${styles.imgSocialMedia} ${styles.solis3}`}></li>
          </a>
          <a className={styles.link}  href="/contact">
            <li className={`${styles.imgSocialMedia} ${styles.solis4}`}></li>
          </a>
        </ul>
      </div>
    </div>
  );
}
