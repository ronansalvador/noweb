import React, { useState } from 'react';
import styles from './style.module.css';
import categorias from '@/app/categorias.json';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles['menu-mobile']}>
      {!isOpen && (
        <ul className={styles.menu}>
          <li>Home</li>
          <li
            className={styles.categoria}
            onClick={() => setIsOpen(true)}
            // onMouseLeave={() => setIsOpen(true)}
          >
            Categorias
            <span className={styles['line-right']}>
              <AiOutlineRight />
            </span>
          </li>
          <li>Sobre</li>
          <li>Localização</li>
          <li className={styles.contato}>Contato</li>
        </ul>
      )}

      {isOpen && (
        <div className={styles['container-categorias']}>
          <ul className={styles.categorias}>
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
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
