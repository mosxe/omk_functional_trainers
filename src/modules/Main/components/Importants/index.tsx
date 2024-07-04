import Image1 from 'assets/svg/Importants/imp_1.svg';
import Image2 from 'assets/svg/Importants/imp_2.svg';
import Image3 from 'assets/svg/Importants/imp_3.svg';
import styles from './styles.module.scss';

const Importants = () => {
  return (
    <section className={styles.importants}>
      <div className={styles.importants__wrapper}>
        <h2 className={styles.importants__title}>
          <span className={styles.importants__title_red}>Почему</span> работа
          <br></br>
          внутренних преподавателей<br></br> и функциональных тренеров важна для
          компании?
        </h2>
        <div className={styles.importants__container}>
          <div className={styles.importants__card}>
            <img
              className={styles.importants__img}
              src={Image1}
              alt='Картинка'
            />
            <div className={styles.importants__text}>
              <span className={styles.importants__text_black}>
                80% всего объема обучения
              </span>{' '}
              в компании проводится силами внутренних преподавателей и
              функциональных тренеров
            </div>
          </div>
          <div className={styles.importants__card}>
            <img
              className={styles.importants__img}
              src={Image2}
              alt='Картинка'
            />
            <div className={styles.importants__text}>
              <span className={styles.importants__text_black}>
                Внутренние преподаватели и функциональные тренеры
              </span>{' '}
              компании обучают, а значит выводят на производство,{' '}
              <span className={styles.importants__text_black}>
                новых сотрудников,
              </span>{' '}
              проводят{' '}
              <span className={styles.importants__text_black}>
                курсы повышения квалификации и переквалификации
              </span>
            </div>
          </div>
          <div className={styles.importants__card}>
            <img
              className={styles.importants__img}
              src={Image3}
              alt='Картинка'
            />
            <div className={styles.importants__text}>
              Внутренние преподаватели в отличие от внешних{' '}
              <span className={styles.importants__text_black}>
                обладают необходимой экспертизой
              </span>{' '}
              и могут передать{' '}
              <span className={styles.importants__text_black}>
                опыт, релевантный именно для площадок ОМК
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importants;
