import styles from './styles.module.scss';
import ImageTest from 'assets/images/Definitions/def_1.png';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__wrapper}>
        <h2 className={styles.contacts__title}>
          <span className={styles.contacts__title_red}>Контакты</span>
        </h2>
        <div className={styles.contacts__container}>
          <img className={styles.contacts__img} src={ImageTest} alt='Фото' />
          <div className={styles.contacts__col}>
            <span className={styles.contacts__text}>Юлия Орешкина</span>
            <span className={styles.contacts__desc}>
              Куратор проекта по развитию внутренних преподавателей
            </span>
            <a
              className={styles.contacts__email}
              type='email'
              href='mailto:ORESHKINA_IUN@omk.ru'
            >
              ORESHKINA_IUN@omk.ru
            </a>
          </div>
          <div className={styles.contacts__col}>
            <span className={styles.contacts__text}>Электронная почта</span>
            <span className={styles.contacts__desc}>
              Корпоративного университета
            </span>
            <a
              className={styles.contacts__email}
              type='email'
              href='mailto:university@omk.ru'
            >
              university@omk.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
