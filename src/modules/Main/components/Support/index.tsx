import Image1 from 'assets/svg/Support/svg_1.svg';
import Image2 from 'assets/svg/Support/svg_2.svg';
import Image3 from 'assets/svg/Support/svg_3.svg';
import Image4 from 'assets/svg/Support/svg_4.svg';
import styles from './styles.module.scss';

const Support = () => {
  return (
    <section className={styles.support}>
      <div className={styles.support__wrapper}>
        <h2 className={styles.support__title}>
          <span className={styles.support__title_red}>Какую поддержку</span>{' '}
          преподавателям<br></br> оказывает корпоративный университет?
        </h2>
        {/* <div className={styles.support__container}> */}
        <div className={styles.support__row}>
          <div className={styles.support__card}>
            <img src={Image1} alt='Картинка' />
            <span className={styles.support__card_title}>
              Методологическая помощь
            </span>
            <span className={styles.support__card_text}>
              Методологическая помощь при разработке новых программ или передача
              готовой программы и материалов
            </span>
          </div>
          <div className={styles.support__card}>
            <img src={Image2} alt='Картинка' />
            <span className={styles.support__card_title}>Обучение</span>
            <span className={styles.support__card_text}>
              Обучение по программе развития преподавательских навыков
            </span>
          </div>
        </div>
        <div className={styles.support__row}>
          <div className={styles.support__card}>
            <img src={Image3} alt='Картинка' />
            <span className={styles.support__card_title}>
              Регулярная аттестация
            </span>
            <span className={styles.support__card_text}>
              Регулярная аттестация и переаттестации на программы обучения
            </span>
          </div>
          <div className={styles.support__card}>
            <img src={Image4} alt='Картинка' />
            <span className={styles.support__card_title}>
              Доплата за разработку
            </span>
            <span className={styles.support__card_text}>
              Доплата за разработку и проведение программ обучения
            </span>
          </div>
        </div>
        {/* <div className={styles.support__column}>
            <div className={styles.support__card}>
              <img src={Image1} alt='Картинка' />
              <span className={styles.support__card_title}>
                Методологическая помощь
              </span>
              <span className={styles.support__card_text}>
                Методологическая помощь при разработке новых программ или
                передача готовой программы и материалов
              </span>
            </div>
            <div className={styles.support__card}>
              <img src={Image3} alt='Картинка' />
              <span className={styles.support__card_title}>
                Регулярная аттестация
              </span>
              <span className={styles.support__card_text}>
                Регулярная аттестация и переаттестации на программы обучения
              </span>
            </div>
          </div>
          <div className={styles.support__column}>
            <div className={styles.support__card}>
              <img src={Image2} alt='Картинка' />
              <span className={styles.support__card_title}>Обучение</span>
              <span className={styles.support__card_text}>
                Обучение по программе развития преподавательских навыков
              </span>
            </div>
            <div className={styles.support__card}>
              <img src={Image4} alt='Картинка' />
              <span className={styles.support__card_title}>
                Доплата за разработку
              </span>
              <span className={styles.support__card_text}>
                Доплата за разработку и проведение программ обучения
              </span>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Support;
