'use client';
import React, { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  console.log(isOpen);

  return (
    <header className={styles.header}>
      <Image
        src='/images/header.png'
        alt='detalhe-header'
        width='156'
        height='80'
        className={styles['detalhe-header']}
      />
      <Image
        src='/images/logo.png'
        alt='logo'
        width='145'
        height='51'
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li onMouseEnter={() => setIsOpen(true)}>Home</li>
          <li
            className={styles.categoria}
            onMouseEnter={() => setIsOpen(false)}
            // onMouseLeave={() => setIsOpen(true)}
          >
            Categorias
            <span>
              <Image src='/images/down.png' alt='down' width='30' height='30' />
            </span>
          </li>
          <li onMouseEnter={() => setIsOpen(true)}>Sobre</li>
          <li onMouseEnter={() => setIsOpen(true)}>Localização</li>
          <li className={styles.contato}>Contato</li>
        </ul>
        <ul
          className={isOpen ? styles.hidden : styles.categorias}
          onMouseLeave={() => setIsOpen(true)}
        >
          <li>cat1</li>
          <li>cat2</li>
          <li>cat3</li>
          <li>cat4</li>
          <li>cat5</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
