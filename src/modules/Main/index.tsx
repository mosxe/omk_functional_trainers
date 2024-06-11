import Header from 'components/Header';
import Footer from 'components/Footer';
import Advantages from './components/Advantages';
import styles from './styles.module.scss';

const Main = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Advantages />
      </main>
      <Footer />
    </>
  );
};

export default Main;
