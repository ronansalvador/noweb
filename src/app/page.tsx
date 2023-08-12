import Banner from './components/banner/Banner';
import Destaque from './components/destaque/Destaque';
import Header from './components/header/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Destaque />
    </main>
  );
}
