import Image from 'next/image';
import React from 'react';
import styles from './style.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['banner-content']}>
        <h1>ILUMINE O SEU DIA A DIA!</h1>
        <p>
          Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a
          dia! Temos produtos para toda sua casa com a melhor qualidade e
          atendimento da região!
        </p>
        <button className={styles['yellow-btn']}>VEJA NOSSOS PRODUTOS</button>
        <button className={styles['transparent-btn']}>
          NOS CONHEÇA MELHOR
        </button>
        <a href='#destaque' className={styles['scroll-down']}>
          <span>
            <Image
              src='/images/arrow-down.png'
              width={35}
              height={35}
              alt='down'
            />
          </span>
          Role para ver mais
        </a>
      </div>
    </div>
  );
}

export default Banner;
