"use client";
import styles from "../../styles/services.module.css";
import TopBar from "../../components/TopBar.jsx";
import NavBar from "../../components/NavBar.jsx";
import Footer from "../../components/Footer.jsx";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.mainContent}>
      <TopBar />
      <NavBar />
      <div className={styles.content}>
        <Image
          className={styles.banner}
          src="/img/doctor_blue_left.webp"
          alt="img"
          width={1000}
          height={1000}
        />
        <div className={styles.esquina}>
          <h6 className={styles.title}>DEPARTAMENTOS</h6>
        </div>
        <div className={styles.diagonal}>
          <h6 className={styles.list}>Una lista de todos nuestros departamentos</h6>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/enfermeria.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ENFERMERIA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Enfermería en Consulta Externa de la IPS Miguel Arcángel está diseñado para ofrecer atención de calidad y personalizada a nuestros pacientes. Nuestro equipo de enfermeras altamente capacitadas proporciona una amplia gama de servicios, incluyendo evaluaciones de salud, administración de medicamentos, curaciones y educación para el autocuidado. Nos dedicamos a atender las necesidades de salud de nuestra comunidad con profesionalismo y empatía, asegurando una experiencia positiva y centrada en el paciente en cada visita.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/medicina-general.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>MÉDICINA GENERAL</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Medicina General en Consulta Externa de la IPS Miguel Arcángel está orientado a proporcionar atención médica integral y preventiva a nuestros pacientes. Nuestros médicos generales ofrecen diagnósticos, tratamientos y seguimiento de diversas condiciones de salud, siempre con un enfoque holístico y centrado en el paciente. Estamos comprometidos con la promoción del bienestar y la prevención de enfermedades, brindando cuidados accesibles y de alta calidad en un ambiente acogedor y profesional.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/medicina-interna.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>MÉDICINA INTERNA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Medicina Interna en Consulta Externa de la IPS Miguel Arcángel se especializa en el diagnóstico y tratamiento de enfermedades complejas en pacientes adultos. Nuestros internistas, con amplia experiencia y conocimientos profundos, proporcionan una atención detallada y personalizada, abordando tanto enfermedades agudas como crónicas. Nos enfocamos en la prevención, el tratamiento integral y el manejo a largo plazo de las condiciones médicas, garantizando un cuidado de alta calidad en un entorno profesional y accesible.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/dermatologa.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>DERMATOLOGÍA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Dermatología en la Consulta Externa de la IPS Miguel Arcángel ofrece atención especializada para el diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas. Nuestro equipo de dermatólogos, altamente capacitado, utiliza tecnología avanzada y técnicas innovadoras para abordar una amplia gama de condiciones dermatológicas, desde problemas comunes hasta trastornos complejos. Nos comprometemos a proporcionar un cuidado personalizado y efectivo, siempre enfocándonos en la salud y el bienestar de nuestra comunidad.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/endocrinologia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ENDOCRINOLOGÍA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Endocrinología en la Consulta Externa de la IPS Miguel Arcángel se dedica al diagnóstico y tratamiento de trastornos hormonales y metabólicos. Nuestros endocrinólogos, expertos en su campo, brindan atención integral para condiciones como diabetes, enfermedades tiroideas, trastornos del metabolismo y más. Con un enfoque en la prevención y el manejo a largo plazo, utilizamos tecnología avanzada y conocimientos actualizados para ofrecer un cuidado personalizado y de alta calidad, siempre centrado en el bienestar de nuestros pacientes.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/fisiatra.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>FISIATRÍA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Fisiatría en la Consulta Externa de la IPS Miguel Arcángel se enfoca en la rehabilitación y recuperación funcional de pacientes con discapacidades físicas. Nuestros fisiatras, expertos en medicina física y rehabilitación, trabajan en conjunto con un equipo multidisciplinario para diseñar planes de tratamiento personalizados que incluyen terapias físicas, ocupacionales y ejercicios terapéuticos. Nos dedicamos a mejorar la calidad de vida de nuestros pacientes, promoviendo su independencia y bienestar a través de cuidados integrales y compasivos.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/psiquiatra.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>PSIQUIATRÍA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Psiquiatría en la Consulta Externa de la IPS Miguel Arcángel ofrece atención especializada para la salud mental y el bienestar emocional. Nuestros psiquiatras, altamente calificados y experimentados, proporcionan diagnóstico, tratamiento y seguimiento para una amplia gama de trastornos mentales, incluyendo depresión, ansiedad, trastornos bipolares y esquizofrenia. Con un enfoque integral y personalizado, nos comprometemos a apoyar a nuestros pacientes en su camino hacia la recuperación, brindando un entorno seguro y empático para su cuidado.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/neurologia-pediatrica.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>NEUROLOGÍA PEDIÁTRICA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Neurología Pediátrica en la Consulta Externa de la IPS Miguel Arcángel está dedicado al diagnóstico y tratamiento de trastornos neurológicos en niños y adolescentes. Nuestros especialistas en neurología pediátrica cuentan con amplia experiencia en el manejo de condiciones como epilepsia, trastornos del desarrollo, migrañas y enfermedades neuromusculares. Trabajamos en estrecha colaboración con las familias para proporcionar una atención integral y personalizada, enfocándonos en mejorar la calidad de vida y el bienestar de nuestros jóvenes pacientes en un entorno acogedor y comprensivo.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/reumologia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>REUMATOLOGÍA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Reumatología en la Consulta Externa de la IPS Miguel Arcángel está especializado en el diagnóstico y tratamiento de enfermedades reumáticas que afectan las articulaciones, músculos y tejidos conectivos. Nuestros reumatólogos, con experiencia en el manejo de condiciones como artritis, lupus y fibromialgia, ofrecen un enfoque integral y personalizado para cada paciente. Utilizamos técnicas avanzadas y estrategias de tratamiento innovadoras para aliviar el dolor, mejorar la movilidad y promover la calidad de vida, siempre en un entorno profesional y empático.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/otorrino.webp"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>OTORRINOLARINGOLOGÍA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Otorrinolaringología en la Consulta Externa de la IPS Miguel Arcángel se especializa en el diagnóstico y tratamiento de enfermedades y trastornos de los oídos, nariz y garganta. Nuestros otorrinolaringólogos brindan atención integral para una variedad de condiciones, incluyendo infecciones del oído, sinusitis, trastornos de la voz y problemas de deglución. Utilizando tecnología avanzada y enfoques terapéuticos actualizados, nos comprometemos a proporcionar un cuidado personalizado y efectivo, con el objetivo de mejorar la salud y el bienestar de nuestros pacientes en un entorno profesional y accesible.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/nutricion.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>NUTRICIÓN Y DIETÉTICA</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Nutrición y Dietética en la Consulta Externa de la IPS Miguel Arcángel está dedicado a ofrecer asesoramiento y planificación personalizada para mejorar la salud a través de la alimentación. Nuestros nutricionistas y dietistas trabajan con los pacientes para desarrollar planes dietéticos adaptados a sus necesidades individuales, ya sea para manejar enfermedades crónicas, optimizar el rendimiento deportivo o promover una alimentación saludable. Con un enfoque basado en la evidencia y un compromiso con la educación continua, nos esforzamos por apoyar a nuestros pacientes en la consecución de sus objetivos de salud y bienestar mediante una nutrición adecuada y equilibrada.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/odontologia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ODONTOLOGÍA GENERAL</h6>
          <p className={styles.subtitle}>CONSULTA EXTERNA</p>
          <p className={styles.pText}>
          El servicio de Odontología General en la IPS Miguel Arcángel proporciona atención dental integral para mantener la salud bucal óptima. Nuestros dentistas generales ofrecen una amplia gama de servicios, que incluyen exámenes dentales, limpiezas, tratamientos de caries, extracciones y restauraciones. Con un enfoque preventivo y personalizado, nos dedicamos a asegurar que cada paciente reciba el mejor cuidado posible en un entorno cómodo y profesional, promoviendo una buena salud dental y bienestar general.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/TOMAS.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>TOMA DE MUESTRAS DE LABORATORIO CLÍNICO</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El servicio de Toma de Muestras de Laboratorio Clínico en la IPS Miguel Arcángel está especializado en la recolección precisa y segura de muestras biológicas para análisis diagnósticos. Nuestro equipo de profesionales está capacitado para realizar venopunciones, recogida de muestras de orina, y otros procedimientos de manera eficiente y con el máximo cuidado. Nos enfocamos en garantizar la comodidad del paciente y la integridad de las muestras, colaborando estrechamente con el laboratorio para asegurar resultados precisos y oportunos que son fundamentales para el diagnóstico y seguimiento adecuado de la salud.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/farmacea.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>SERVICIO FARMACÉUTICO</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El Servicio Farmacéutico en la IPS Miguel Arcángel está dedicado a proporcionar una gestión segura y efectiva de los medicamentos para nuestros pacientes. Nuestro equipo de farmacéuticos altamente capacitados ofrece asesoramiento sobre el uso correcto de medicamentos, realiza revisiones de la terapia farmacológica y asegura la correcta dispensación de los medicamentos prescritos. Además, nos enfocamos en educar a los pacientes sobre los posibles efectos secundarios y las interacciones medicamentosas, promoviendo un uso seguro y eficiente de los tratamientos y contribuyendo al bienestar general de la comunidad.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/cancer.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>TAMIZACIÓN DE CÁNCER DE CUELLO UTERINO</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El servicio de Tamización de Cáncer de Cuello Uterino en la IPS Miguel Arcángel está dedicado a la detección temprana y prevención de cáncer cervical mediante pruebas de rutina. Ofrecemos exámenes como el Papanicolaou (Pap) y pruebas de HPV para identificar cambios celulares o infecciones que podrían llevar al desarrollo de cáncer. Nuestro equipo de profesionales brinda una atención cuidadosa y respetuosa, proporcionando asesoramiento sobre el seguimiento y tratamiento necesario. La detección temprana es clave para un manejo eficaz y para mejorar las tasas de éxito del tratamiento, asegurando la salud y el bienestar de nuestras pacientes.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/TERAPIA-RESPIRA.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>TERAPIA RESPIRATORIA</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El servicio de Terapia Respiratoria en la IPS Miguel Arcángel se centra en el diagnóstico y tratamiento de enfermedades respiratorias, ayudando a mejorar la función pulmonar y la calidad de vida de nuestros pacientes. Nuestros terapeutas respiratorios proporcionan cuidados especializados que incluyen la administración de oxígeno, la realización de técnicas de ventilación y la enseñanza de ejercicios respiratorios. Con un enfoque integral y personalizado, trabajamos para gestionar afecciones como el asma, la EPOC y otras enfermedades respiratorias, ofreciendo apoyo continuo y estrategias efectivas para la optimización de la salud respiratoria.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/fisioterapia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>FISIOTERAPIA</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El servicio de Fisioterapia en la IPS Miguel Arcángel está diseñado para ayudar a los pacientes a recuperar y mejorar su movilidad y funcionalidad física. Nuestros fisioterapeutas utilizan una variedad de técnicas, como ejercicios terapéuticos, masajes y manipulaciones, para tratar una amplia gama de condiciones, desde lesiones deportivas hasta dolor crónico y problemas postquirúrgicos. Trabajamos en estrecha colaboración con cada paciente para desarrollar planes de tratamiento personalizados que fomenten la recuperación, mejoren la calidad de vida y prevengan futuras complicaciones.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/psicologia.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>PSICOLOGÍA</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El servicio de Psicología en la IPS Miguel Arcángel se dedica a apoyar la salud mental y emocional de nuestros pacientes a través de intervenciones terapéuticas y evaluaciones psicológicas. Nuestros psicólogos ofrecen terapia individual, de pareja y familiar para abordar una variedad de preocupaciones, como ansiedad, depresión, estrés y problemas interpersonales. Utilizamos enfoques basados en la evidencia para ayudar a nuestros pacientes a comprender y manejar sus emociones, desarrollar habilidades de afrontamiento y mejorar su bienestar general en un entorno seguro y de apoyo.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/fono.webp"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>FONOAUDIOLOGÍA</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El servicio de Fonoaudiología en la IPS Miguel Arcángel está especializado en el diagnóstico, tratamiento y rehabilitación de trastornos de la comunicación y la deglución. Nuestros fonoaudiólogos trabajan con pacientes de todas las edades para abordar problemas como dificultades del habla, trastornos del lenguaje, problemas de voz y disfunciones de la deglución. Utilizamos técnicas y terapias adaptadas a las necesidades individuales de cada paciente para mejorar su capacidad para comunicarse efectivamente y llevar a cabo funciones relacionadas con la alimentación. Nuestro enfoque es integral y personalizado, buscando siempre optimizar la calidad de vida y el bienestar de quienes atendemos.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/tera.webp"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>TERAPIA OCUPACIONAL Y TERAPIA ABA</h6>
          <p className={styles.subtitle}>APOYO DIAGNOSTICO Y COMPLEMENTACION TERAPEUTICA</p>
          <p className={styles.pText}>
          El servicio de Terapia Ocupacional y Terapia ABA en la IPS Miguel Arcángel está dedicado a mejorar la calidad de vida y la funcionalidad de nuestros pacientes. La Terapia Ocupacional ayuda a desarrollar habilidades para las actividades diarias, mientras que la Terapia ABA utiliza principios del análisis conductual para promover habilidades y modificar comportamientos. Ambos enfoques están personalizados para atender las necesidades individuales y apoyar el desarrollo integral y la adaptación social.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/infa.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ATENCIÓN EN SALUD EN LA PRIMERA INFANCIA</h6>
          <p className={styles.subtitle}>RUTAS DE ATENCION INTEGRAL</p>
          <p className={styles.pText}>
          El servicio de Atención en Salud en la Primera Infancia (de 7 días a 5 años, 11 meses y 29 días) en la IPS Miguel Arcángel está enfocado en proporcionar cuidados médicos especializados y preventivos para los niños en sus primeros años de vida. Nuestro equipo de profesionales ofrece exámenes de salud regulares, monitoreo del crecimiento y desarrollo, y vacunación, así como atención para enfermedades comunes y problemas de salud específicos de esta etapa. Nos comprometemos a apoyar el desarrollo óptimo de cada niño en un entorno seguro y adaptado a sus necesidades.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/niñez.webp"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ATENCIÓN EN SALUD EN LA INFANCIA</h6>
          <p className={styles.subtitle}>RUTAS DE ATENCION INTEGRAL</p>
          <p className={styles.pText}>
          El servicio de Atención en Salud en la Infancia (de 6 años a 11 meses y 29 días) en la IPS Miguel Arcángel está diseñado para ofrecer cuidados médicos integrales y preventivos a los niños en esta etapa crucial de desarrollo. Nuestro equipo brinda exámenes de salud regulares, monitoreo del crecimiento y desarrollo, y vacunaciones, así como atención para enfermedades comunes y problemas específicos. Nos enfocamos en asegurar que cada niño reciba el apoyo necesario para su bienestar físico y emocional en un entorno profesional y amigable.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/adole.jpeg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ATENCIÓN EN SALUD EN LA ADOLECENCIA</h6>
          <p className={styles.subtitle}>RUTAS DE ATENCION INTEGRAL</p>
          <p className={styles.pText}>
          El servicio de Atención en Salud en la Adolescencia (de 12 años a 17 años, 11 meses y 29 días) en la IPS Miguel Arcángel ofrece cuidados médicos especializados para apoyar el desarrollo físico y emocional durante esta etapa de cambios significativos. Nuestro equipo proporciona exámenes de salud regulares, asesoramiento sobre prevención de enfermedades, y apoyo para problemas de salud específicos de la adolescencia. Nos enfocamos en fomentar hábitos saludables, abordar preocupaciones relacionadas con el crecimiento y desarrollo.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/juve.jpeg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ATENCIÓN EN SALUD EN LA JUVENTUD</h6>
          <p className={styles.subtitle}>RUTAS DE ATENCION INTEGRAL</p>
          <p className={styles.pText}>
          El servicio de Atención en Salud en la Juventud (de 18 años a 28 años, 11 meses y 29 días) en la IPS Miguel Arcángel está orientado a proporcionar cuidados médicos integrales para apoyar el bienestar durante esta etapa de transición a la adultez. Ofrecemos exámenes de salud regulares, asesoramiento en prevención de enfermedades, y atención para problemas de salud específicos. Nos enfocamos en promover hábitos saludables, gestionar condiciones crónicas y apoyar el desarrollo físico y emocional en esta fase clave de la vida.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/adulto.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ATENCIÓN EN SALUD EN LA ADULTEZ</h6>
          <p className={styles.subtitle}>RUTAS DE ATENCION INTEGRAL</p>
          <p className={styles.pText}>
          El servicio de Atención en Salud en la Adultez (de 29 años a 59 años) en la IPS Miguel Arcángel se dedica a ofrecer cuidados médicos integrales para mantener y mejorar la salud a lo largo de esta etapa de la vida. Proporcionamos exámenes de salud regulares, prevención y manejo de enfermedades crónicas, y asesoramiento sobre hábitos saludables. Nuestro objetivo es apoyar el bienestar físico y emocional, abordar preocupaciones específicas de la edad adulta y ofrecer un enfoque personalizado para promover una vida saludable y activa.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/vejez.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>ATENCIÓN EN SALUD EN LA VEJEZ</h6>
          <p className={styles.subtitle}>RUTAS DE ATENCION INTEGRAL</p>
          <p className={styles.pText}>
          El servicio de Atención en Salud en la Vejez (a partir de los 60 años) en la IPS Miguel Arcángel está enfocado en brindar cuidados médicos especializados para apoyar el bienestar en la tercera edad. Ofrecemos exámenes de salud regulares, manejo de enfermedades crónicas, y prevención de problemas comunes en esta etapa, como caídas y deterioro cognitivo. Nuestro equipo trabaja para mejorar la calidad de vida mediante un enfoque integral que incluye asesoramiento sobre salud, nutrición y ejercicio, en un entorno que promueve la dignidad y el respeto.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <div className={styles.contetServices1}>
        <Image
          className={styles.foto1}
          src="/fotos-servicios/perinatal.jpg"
          alt="img"
          width={800}
          height={200}
        />
        <div className={styles.contentText}>
          <h6 className={styles.title}>RUTA INTEGRAL DE ATENCIÓN PARA LA POBLACION MATERNO PERINATAL </h6>
          <p className={styles.subtitle}>RUTAS DE ATENCION INTEGRAL</p>
          <p className={styles.pText}>
          La Ruta Integral de Atención para la Población Materno-Perinatal en la IPS Miguel Arcángel ofrece cuidados desde la atención preconcepcional hasta el control prenatal, garantizando una experiencia saludable durante el embarazo. Incluye evaluación antes de la concepción y seguimiento regular durante el embarazo para el bienestar de la madre y el bebé.
          </p>
          <a
            href="https://wa.me/+573215937410"
            className={styles.botom}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
