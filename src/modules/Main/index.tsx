import Header from 'components/Header';
import Footer from 'components/Footer';
import Advantages from './components/Advantages';
import Definitions from './components/Definitions';
import Importants from './components/Importants';
import Criteria from './components/Criteria';
import Starting from './components/Starting';
import Teaching from './components/Teaching';
import KPI from './components/KPI';
import Support from './components/Support';
import Model from './components/Model';
import Program from './components/Program';
import Schedule from './components/Schedule';
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
        <Starting />
        <Teaching />
        <KPI />
        <Support />
        <Model />
        <Program />
        <Schedule />
      </main>
      <Footer />
    </>
  );
};

export default Main;
