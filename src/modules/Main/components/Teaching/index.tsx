import ImageCard1 from 'assets/images/Teaching/card_1.png';
import ImageCard2 from 'assets/images/Teaching/card_2.png';
import ImageCard3 from 'assets/images/Teaching/card_3.png';
import ImageCard4 from 'assets/images/Teaching/card_4.png';
import Image1 from 'assets/images/Teaching/img_1.png';
import Image2 from 'assets/images/Teaching/img_2.png';
import Image3 from 'assets/images/Teaching/img_3.png';
import Image4 from 'assets/images/Teaching/img_4.png';
import Image5 from 'assets/images/Teaching/img_5.png';
import Image6 from 'assets/images/Teaching/img_6.png';
import styles from './styles.module.scss';

const Teaching = () => {
  return (
    <section className={styles.teaching}>
      <div className={styles.teaching__wrapper}>
        <h2 className={styles.teaching__title}>
          <span className={styles.teaching__title_red}>Что я могу</span>{' '}
          преподавать?
        </h2>
        <div className={styles.teaching__text}>
          Потребность в преподавателях очень высокая — ОМК увеличивает обороты,
          строит новые производства, нужны подготовленные для работы кадры, а
          значит — нужны преподаватели, готовые и умеющие:
        </div>
        <div className={styles.teaching__container}>
          <div className={styles.teaching__card}>
            <img
              className={styles.teaching__card_img}
              src={ImageCard1}
              alt='Картинка'
            />
            <span className={styles.teaching__card_text}>
              проводить обучение по охране труда и безопасности
            </span>
          </div>
          <div className={styles.teaching__card}>
            <img
              className={styles.teaching__card_img}
              src={ImageCard2}
              alt='Картинка'
            />
            <span className={styles.teaching__card_text}>
              обучать новичков по профессии
            </span>
          </div>
          <div className={styles.teaching__card}>
            <img
              className={styles.teaching__card_img}
              src={ImageCard3}
              alt='Картинка'
            />
            <span className={styles.teaching__card_text}>
              осуществлять функциональное обучение по своему экспертному
              направлению
            </span>
          </div>
          <div className={styles.teaching__card}>
            <img
              className={styles.teaching__card_img}
              src={ImageCard4}
              alt='Картинка'
            />
            <span className={styles.teaching__card_text}>
              проводить курсы повышения квалификации или переобучения
            </span>
          </div>
        </div>
        <div className={styles.teaching__content}>
          <div className={styles.teaching__subtitle}>
            <span className={styles.teaching__subtitle_red}>Вместе</span> мы
            точно найдем программу, которую ты можешь<br></br> проводить, или в
            разработке которой ты можешь участвовать.
          </div>
          <div className={styles.teaching__images}>
            <div className={styles.teaching__image}>
              <img src={Image1} alt='Картинка' />
            </div>
            <div className={styles.teaching__image}>
              <img src={Image2} alt='Картинка' />
            </div>
            <div className={styles.teaching__image}>
              <img src={Image3} alt='Картинка' />
            </div>
            <div className={styles.teaching__image}>
              <img src={Image4} alt='Картинка' />
            </div>
            <div className={styles.teaching__image}>
              <img src={Image5} alt='Картинка' />
            </div>
            <div className={styles.teaching__image}>
              <img src={Image6} alt='Картинка' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
