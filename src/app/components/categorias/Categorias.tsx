import React from 'react';
import styles from './style.module.css';
import categorias from '@/app/categorias.json';
import Image from 'next/image';

function Categorias() {
  return (
    <div id='categorias' className={styles.categorias}>
      <Image
        src='/images/categorias.png'
        alt='categorias'
        width={1920}
        height={456}
      />
      <p className={styles.title}>CATEGORIAS</p>
      <div className={styles['grid-categorias']}>
        {categorias.map((categoria) => (
          <div key={categoria.id} className={styles.categoria}>
            <p>{categoria.nome}</p>
            <div>
              <Image
                src={categoria.image}
                width='122'
                height='122'
                alt={categoria.nome}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
