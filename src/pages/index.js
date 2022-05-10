import React from 'react';
import { Link } from 'react-router-dom';
import HabiLogo from '../components/icons/habiLogo';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <section className={styles.heroBox}>
      <div className="container z-1 absolute">
        <div className={`${styles.heroInformation} flex`}>
          <HabiLogo />
          <p className="mt-0">¿PENSANDO EN VENDER?</p>
          <h1 className="strong nm fs-52 lh-50">
            Compramos tu vivienda en 10 días*
          </h1>
          <p className="f16">
            Solicita una oferta gratis ingresando la dirección, características
            del inmueble y tus datos de contacto. Uno de nuestros expertos te
            hará una oferta.
          </p>
          <div className="flex flex-center">
            <button className="btn-purple mt-20" aria-label="vender">
              <Link to="/registry">Vender</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heroBg}>
        <img
          className={styles.heroBgImg}
          src="/images/hero-background.jpeg"
          alt="apartamento"
        />
      </div>
    </section>
  );
}

export default HomePage;
