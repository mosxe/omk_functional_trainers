import Image1 from 'assets/svg/Advantages/adv_1.svg';
import Image2 from 'assets/svg/Advantages/adv_2.svg';
import Image3 from 'assets/svg/Advantages/adv_3.svg';
import Image4 from 'assets/svg/Advantages/adv_4.svg';
import styles from './styles.module.scss';

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <h2 className={styles.advantages__title}>
        <span className={styles.advantages__title_red}>Преимущества</span>{' '}
        преподавания
      </h2>
      <div className={styles.advantages__text}>
        Преподавание – это возможность развиваться самому и развивать других.
      </div>
      <div className={styles.advantages__wrapper}>
        <div className={styles.advantages__card}>
          <img
            className={styles.advantages__card_img}
            src={Image1}
            alt='Картинка'
          />
          <div className={styles.advantages__card_wrapper}>
            <span className={styles.advantages__card_title}>
              Признание экспертизы
            </span>
            <span className={styles.advantages__card_text}>
              Высокая экспертиза в направлении, которое преподаешь — одно из
              основных преимуществ наших преподавателей.
            </span>
          </div>
        </div>
        <div className={styles.advantages__card}>
          <img
            className={styles.advantages__card_img}
            src={Image2}
            alt='Картинка'
          />
          <div className={styles.advantages__card_wrapper}>
            <span className={styles.advantages__card_title}>
              Профессиональное развитие
            </span>
            <span className={styles.advantages__card_text}>
              Преподаватели проходят комплексную программу обучения и развития
              навыков преподавания.
            </span>
          </div>
        </div>
        <div className={styles.advantages__card}>
          <img
            className={styles.advantages__card_img}
            src={Image3}
            alt='Картинка'
          />
          <div className={styles.advantages__card_wrapper}>
            <span className={styles.advantages__card_title}>
              Удовольствие от обучения других
            </span>
            <span className={styles.advantages__card_text}>
              Делиться собственным опытом и экспертизой и приятно, и очень
              полезно.
            </span>
          </div>
        </div>
        <div className={styles.advantages__card}>
          <img
            className={styles.advantages__card_img}
            src={Image4}
            alt='Картинка'
          />
          <div className={styles.advantages__card_wrapper}>
            <span className={styles.advantages__card_title}>
              Материальное поощрение
            </span>
            <span className={styles.advantages__card_text}>
              за проведение обучающих программ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
