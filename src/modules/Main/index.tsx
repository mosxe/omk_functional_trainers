import { useState, useEffect, useRef, useCallback } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Error from 'components/Error';
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
import Materials from './components/Materials';
import Contacts from './components/Contacts';
import styles from './styles.module.scss';
import { ResponseData } from 'types';
import { getFetchData, initialData } from './utils';

const Main = () => {
  const [data, setData] = useState<ResponseData>(initialData);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const criteriaRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const hancleClickSection = useCallback((isTeaching: boolean) => {
    if (isTeaching) {
      criteriaRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      supportRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    getFetchData()
      .then((res) => {
        if (res.isError) {
          setError(true);
          return;
        }
        setData(res);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return (
      <>
        <Header onClick={hancleClickSection} />
        <main className={styles.main}>
          <Loader />
        </main>
        <Footer />
      </>
    );
  }

  if (isError || data.isError) {
    return (
      <>
        <Header onClick={hancleClickSection} />
        <main className={styles.main}>
          <Error />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header onClick={hancleClickSection} />
      <main className={styles.main}>
        <Advantages />
        <Definitions />
        <Importants />
        <Criteria ref={criteriaRef} />
        <Starting />
        <Teaching />
        <KPI />
        <Support ref={supportRef} />
        <Model link={data.data.link_model_competence} />
        <Program link={data.data.link_development_plan} />
        <Schedule data={data.data.events} link={data.data.link_events} />
        <Materials data={data.data.materials} />
        <Contacts data={data.data.contacts} />
      </main>
      <Footer />
    </>
  );
};

export default Main;
