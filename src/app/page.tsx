import Banner from './components/banner/Banner';
import Categorias from './components/categorias/Categorias';
import Destaque from './components/destaque/Destaque';
import Header from './components/header/Header';
import Sobre from './components/sobre/Sobre';
import styles from './page.module.css';
import Televendas from './components/televendas/Televendas';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Destaque />
      <Categorias />
      <Sobre />
      {/* <Televendas />
      <Footer /> */}
    </main>
  );
}
