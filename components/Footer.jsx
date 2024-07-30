"use client";
import Image from "next/image";
import {  } from "../styles/footer.css";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="content1-footer" >
        <h6 className="title-footer">MIGUEL <span>ARCANGEL</span></h6>
        <p className="desciption-footer">Nuestro equipo está plenamente comprometido con ofrecerte un servicio excepcional y garantizar que tus necesidades sean atendidas con la mayor eficacia posible. Valoramos profundamente tu confianza y tu interés en nuestros servicios, y nos esforzamos constantemente por superar tus expectativas.</p>
        <div className="contactos">
          <Image className="img-footer" src="/img/icons8-phone-50.png" alt="contact"  width={100} height={100} />
          <span>(+57) 321 5937410</span>
        </div>
        <div className="contactos">
        <Image  className="img-footer" src="/img/icons8-correo-24.png" alt="contact"  width={100} height={100} />
          <span>ipsmiguelarcangelsas@gmail.com</span>
        </div>
        <div className="contactos">
        <Image className="img-footer" src="/img/icons8-enviar-50.png" alt="contact"  width={100} height={100} />
          <span >Diagonal 34 #5-49</span>
        </div>
      </div>
      <div className="content2-footer" >
        <div className="subtitle-footler" >
          <span className="span-title-footer">QUICK LINKS</span>
          <div className="line-footer"></div>
        </div>
        <ul className="lista-footer">
          <a href="/services"><li>TODOS NUESTROS SERVICIOS</li></a>
          <a href="https://wa.me/573215937410"><li>FAQ</li></a>
          <a href="https://wa.me/573215937410"><li>TARIFAS Y SEGUROS</li></a>
          <a href="https://wa.me/573215937410"><li>OFERTAS DE CHEQUEO</li></a>
          <a href="/about"><li>SOBRE NOSOTROS</li></a>
        </ul>
        <ul className="socialMedia" >
          <a  href="https://www.facebook.com/profile.php?id=100089845926460" target="_blanck">
          <li className="img-socialMedia solis1"></li>
          </a>
          <a  href="mailto:ipsmiguelarcangelsas@gmail.com">
          <li className="img-socialMedia solis2"></li>
          </a>
          <a  href="https://wa.me/573215937410">
          <li className="img-socialMedia solis3"></li>
          </a>
          <a  href="/contact">
          <li className="img-socialMedia solis4"></li>
          </a>
        </ul>
      </div>
    </div>
  );
}
