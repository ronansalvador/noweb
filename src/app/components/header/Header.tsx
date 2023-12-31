'use client';
import React, { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import categorias from '@/app/categorias.json';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { ImMenu4 } from 'react-icons/im';
import MobileMenu from '../mobilemenu/MobileMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  console.log(isOpen);

  return (
    <>
      <header className={styles.header}>
        <div className={styles['detalhe-header']}>
          <Image
            src='/images/header.png'
            alt='detalhe-header'
            width='156'
            height='80'
          />
        </div>
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
                <Image
                  src='/images/down.png'
                  alt='down'
                  width='30'
                  height='30'
                />
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
            {categorias.map((categoria) => (
              <Link href={categoria.link} key={categoria.id}>
                <div>
                  <Image
                    src={categoria.image}
                    width='54'
                    height='54'
                    alt={categoria.nome}
                  />
                </div>

                <p>{categoria.nome}</p>
              </Link>
            ))}
          </ul>
          <ul className={styles['menu-mobile']}>
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {!mobileMenu ? <HiMenu /> : <ImMenu4 />}
            </button>
          </ul>
        </nav>
      </header>
      {mobileMenu && <MobileMenu />}
    </>
  );
}

export default Header;
