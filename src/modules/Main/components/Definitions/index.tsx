import Image1 from 'assets/images/Definitions/def_1.png';
import Image2 from 'assets/images/Definitions/def_2.png';
import styles from './styles.module.scss';

const Definitions = () => {
  return (
    <section className={styles.definitions}>
      <h2 className={styles.definitions__title}>
        <span className={styles.definitions__title_red}>Кто такие</span>{' '}
        внутренние преподаватели<br></br> и функциональные тренеры?
      </h2>
      <div className={styles.definitions__wrapper}>
        <div className={styles.definitions__container}>
          <div className={styles.definitions__img}>
            <img src={Image1} alt='Картинка' />
          </div>
          <div className={styles.definitions__content}>
            <span className={styles['definitions__text-red']}>
              Внутренний преподаватель
            </span>{' '}
            — это сотрудник компании
            <ul>
              <li>
                совмещает свою основную трудовую деятельность на предприятии с
                проведением обучающих мероприятий
              </li>
              <li>
                прошел аттестацию на проведение обучающей программы в
                установленном порядке
              </li>
              <li>получает доплату за проведение обучения.</li>
            </ul>
          </div>
        </div>
        <div className={styles.definitions__container}>
          <div className={styles.definitions__img}>
            <img src={Image2} alt='Картинка' />
          </div>
          <div className={styles.definitions__content}>
            <span className={styles['definitions__text-red']}>
              Функциональный тренер
            </span>{' '}
            — это сотрудник компании
            <ul>
              <li>
                совмещает свою основную трудовую деятельность на предприятии с
                проведением обучающих мероприятий
              </li>
              <li>
                прошел аттестацию на проведение обучающей программы в
                установленном порядке
              </li>
              <li className={styles['definitions__text-black']}>
                прошел программу развития тренеров и подтвердил уровень владения
                навыками обучения пройдя процедуру сертификации
              </li>
              <li className={styles['definitions__text-black']}>
                получает доплату за проведение обучения с повышенным
                коэффициентом.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definitions;
