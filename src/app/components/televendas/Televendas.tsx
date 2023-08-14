import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

function Televendas() {
  return (
    <div className={styles.televendas}>
      <Image
        width='1920'
        height='801'
        src='/images/televenda.png'
        alt='banner'
      />
      <button>ACIONE NOSSO TELEVENDAS</button>
    </div>
  );
}

export default Televendas;
