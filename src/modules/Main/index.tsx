import Header from 'components/Header';
import Footer from 'components/Footer';
import Advantages from './components/Advantages';
import Definitions from './components/Definitions';
import Importants from './components/Importants';
import Criteria from './components/Criteria';
import styles from './styles.module.scss';

const Main = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Advantages />
        <Definitions />
        <Importants />
        <Criteria />
      </main>
      <Footer />
    </>
  );
};

export default Main;
