import { useState } from 'react';
import Image1 from 'assets/images/Schedule/image_1.png';
import Image2 from 'assets/images/Schedule/image_2.png';
import Image3 from 'assets/images/Schedule/image_3.png';
import Image4 from 'assets/images/Schedule/image_4.png';
import Image5 from 'assets/images/Schedule/image_5.png';
import ImagePhoto from 'assets/svg/Schedule/photo.svg';
import Popap from 'components/Popap';
import PopapContent from './PopalContent';
import styles from './styles.module.scss';

const Schedule = () => {
  const onDownloadFile = () => {
    window.open('yandex.ru', '_blank');
  };
  // const [isShowModal, setShowModal] = useState<boolean>(false);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);
  // const [activeIndex, setActiveIndex] = useState<number>(1);

  // const onShowModalHandler = () => {
  //   setShowModal(!isShowModal);
  // };

  const onShowPopapHandler = () => {
    setShowPopap(!isShowPopap);
  };

  const handleClick = () => {
    onShowPopapHandler();
  };

  return (
    <>
      <section className={styles.schedule}>
        <div className={styles.schedule__wrapper}>
          <div className={styles.schedule__row}>
            <div
              className={`${styles.schedule__content} ${styles['schedule__content_col']}`}
            >
              <h2 className={styles.schedule__title}>
                <span className={styles.schedule__title_red}>Расписание</span>
              </h2>
              <span className={styles.schedule__subtitle}>
                тренингов и мастер-классов для преподавателей и функциональных
                тренеров
              </span>
            </div>
            <div className={styles.schedule__content}>
              <img src={Image1} alt='Картинка' width={217} height={134} />
              <div className={styles['schedule__box-images']}>
                <div className={styles['schedule__row-images']}>
                  <img src={Image2} alt='Картинка' width={92} height={66} />
                  <img src={Image3} alt='Картинка' width={194} height={66} />
                </div>
                <div className={styles['schedule__row-images']}>
                  <img src={Image4} alt='Картинка' width={194} height={66} />
                  <img src={Image5} alt='Картинка' width={92} height={66} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.schedule__border}></div>
          <div className={styles.schedule__container}>
            <div className={styles.schedule__column}>
              <span className={styles['schedule__text-l']}>Расписание</span>
              <span className={styles['schedule__text-m']}>
                обучающих мероприятий
              </span>
              <span className={styles['schedule__text-s']}>
                на 1 полугодие 2024 года
              </span>
            </div>
            <button
              type='button'
              className={styles.schedule__btn}
              onClick={onDownloadFile}
            >
              Скачать расписание
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 7.16675L7 10.7942L11 7.20189M7 1.16675V10.5953M1 13.1667H13'
                  stroke='#8D8E91'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className={styles.schedule__table}>
            <div className={styles.schedule__table_wrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Название мероприятия</th>
                    <th>Дата проведения</th>
                    <th>Время проведения</th>
                    <th>Ведущий</th>
                    <th>Программа</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={styles.schedule__table_col}>
                        <span className={styles['schedule__table_text-l']}>
                          Тренинг для тренеров
                        </span>
                        <button
                          className={styles.schedule__table_btn}
                          type='button'
                          onClick={() => handleClick()}
                        >
                          ЗАПИСАТЬСЯ
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className={styles.schedule__table_col}>
                        <div>
                          <span className={styles['schedule__table_text-m']}>
                            Группа 1
                          </span>
                          <span className={styles['schedule__table_text-s']}>
                            20, 27 февраля, 4 марта
                          </span>
                        </div>
                        <div>
                          <span className={styles['schedule__table_text-m']}>
                            Группа 2, Группа 3, Группа 4
                          </span>
                          <span className={styles['schedule__table_text-s']}>
                            21,28 февраля, 5 марта, 21,28 февраля, 5 марта
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className={styles['schedule__table_text-m']}>
                          09:00 – 17:00
                        </span>
                        <span className={styles['schedule__table_text-s']}>
                          3 дня по 8 часов
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        className={`${styles.schedule__table_col} ${styles['schedule__table_col-s']}`}
                      >
                        <img
                          className={styles.schedule__table_img}
                          src={ImagePhoto}
                          alt='Фото'
                        />
                        <span className={styles['schedule__table_text-m']}>
                          Ирина Гольцова
                        </span>
                        <span className={styles['schedule__table_text-s']}>
                          приглашенный тренер
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className={styles['schedule__table_text-lm']}>
                        <ul>
                          <li>
                            особенности обучения взрослых и эффективные способы
                            донесения информации
                          </li>
                          <li>
                            особенности обучения взрослых и эффективные способы
                            донесения информации
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles.schedule__table_col}>
                        <span className={styles['schedule__table_text-l']}>
                          Тренинг для тренеров
                        </span>
                        <button
                          className={styles.schedule__table_btn}
                          type='button'
                          onClick={() => handleClick()}
                        >
                          ЗАПИСАТЬСЯ
                        </button>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className={styles['schedule__table_text-m']}>
                          Группа 2, Группа 3, Группа 4
                        </span>
                        <span className={styles['schedule__table_text-s']}>
                          21,28 февраля, 5 марта, 21,28 февраля, 5 марта
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className={styles['schedule__table_text-m']}>
                          09:00 – 17:00
                        </span>
                        <span className={styles['schedule__table_text-s']}>
                          3 дня по 8 часов
                        </span>
                      </div>
                    </td>
                    <td>4</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Popap isShow={isShowPopap} onClose={onShowPopapHandler}>
        <PopapContent onClick={onShowPopapHandler} />
      </Popap>
    </>
  );
};

export default Schedule;
