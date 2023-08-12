import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import produtos from '@/app/produtos.json';

function Destaque() {
  return (
    <div id='destaque' className={styles.destaque}>
      <Image
        src='/images/destaque.png'
        alt='destaque'
        width={1253}
        height={456}
        className={styles['destaque-img']}
      />
      <h1>PRODUTOS EM DESTAQUE</h1>
      <div className={styles.produtos}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.produto}>
            <span>{produto.categoria}</span>
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width='263'
              height='216'
            />
            <div className={styles.line}></div>
            <p className={styles['produto-nome']}>{produto.nome}</p>
            <div className={styles.price}>
              <p className={styles.valor}>{`R$ ${produto.valor},00`}</p>
              <p
                className={styles.promocional}
              >{`R$ ${produto.promocional},00`}</p>
            </div>
            {produto.parcelas && (
              <p className={styles.parcelas}>{`ou em ${
                produto.parcelas
              }x de R$ ${(
                Number(produto.promocional) / Number(produto.parcelas)
              )
                .toFixed(2)
                .replace('.', ',')}`}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destaque;
