import Image from 'next/image';
import React from 'react';
import styles from './style.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <Image width='1920' height='801' src='/images/banner.png' alt='banner' />
    </div>
  );
}

export default Banner;
