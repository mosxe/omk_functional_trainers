import Image from 'assets/svg/KPI/people.svg';
import styles from './styles.module.scss';

const KPI = () => {
  return (
    <section className={styles.kpi}>
      <h2 className={styles.kpi__title}>
        <span className={styles.kpi__title_red}>КПЭ</span> преподавателя
      </h2>
      <div className={styles.kpi__wrapper}>
        <div className={styles.kpi__card}>
          <img src={Image} alt='Картинка' />
          <div className={styles.kpi__card_text}>
            90% всего объема обучения в компании проводится силами внутренних
            преподавателей и функциональных тренеров
          </div>
        </div>
        <div className={styles.kpi__card}>
          <img src={Image} alt='Картинка' />
          <div className={styles.kpi__card_text}>
            Внутренние преподаватели в отличие от внешних обладают необходимой
            экспертизой и могут передать опыт, релевантный именно для площадок
            ОМК
          </div>
        </div>
        <div className={styles.kpi__card}>
          <img src={Image} alt='Картинка' />
          <div className={styles.kpi__card_text}>
            Внутренние преподаватели и функциональные тренеры компании обучают =
            выводят на производство до 100% новых сотрудников
          </div>
        </div>
        <div className={styles.kpi__card}>
          <img src={Image} alt='Картинка' />
          <div className={styles.kpi__card_text}>
            Внутренние преподаватели в отличие от внешних обладают необходимой
            экспертизой и могут передать опыт, релевантный именно для площадок
            ОМК
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPI;
