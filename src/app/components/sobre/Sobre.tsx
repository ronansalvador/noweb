import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

function Sobre() {
  return (
    <section className={styles.sobre}>
      <h1>SUA MELHOR OPÇÃO</h1>
      <div className={styles.container}>
        <Image
          width='945'
          height='625'
          src='/images/fachada.png'
          alt='fachada loja'
        />

        <div className={styles['texto-sobre']}>
          <p>
            Desde 1970 somos especializados em materiais elétricos, sendo uma
            das principais distribuidoras do setor.
          </p>
          <p>
            Oferecemos os melhores produtos, com o preço que cabe no seu bolso e
            atende todas as necessidades do seu dia a dia.
          </p>
          <p>
            Aqui você irá encontrar lustres, luminárias, utilidades domésticas,
            ferramentas, acessórios, lâmpadas, fios e cabos, quadros de
            distribuição, caixas de entrada padrão Eletropaulo, materiais
            elétricos em geral, equipamentos de segurança e comunicação.
          </p>
          <button>Saiba mais sobre nós</button>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
