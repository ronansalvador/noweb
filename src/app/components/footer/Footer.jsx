import React from 'react'
import styles from './style.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
   
      <div className={styles.sociais}>
        <div className={styles.slogan}>
      <Image src='/images/logo_footer.png' alt='logo' width={145} height={51} />
      <p>Venha na Elétrica J. Santos e garanta a melhor opção para sua casa!</p>
      </div>
      <div className={styles.midias}>
        <p>NOS SIGA NAS REDES</p>
        <div className={styles.icons}>
        <Image src='/images/logo-whatsapp.svg' alt='whatsapp' width={22} height={22} />
        <Image src='/images/logo-instagram.svg' alt='instagram' width={22} height={22} />
        <Image src='/images/logo-facebook.svg' alt='facebook' width={22} height={22} />
        </div>
      </div>      
      </div>
      
      <div className={styles.copyright}>
        <p>© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados</p>
        <p className={styles.noweb}>Desenvolvido por 
        <a href="https://www.noweb.io/"><Image src='/images/logo_noweb.png' alt='logo noweb' width={28} height={18}/></a></p>
      </div>
      
     
      <Image src='/images/circles_footer.png' alt='bolhas' width={100} height={100} className={styles.circles} />
    
    </footer>
  )
}

export default Footer