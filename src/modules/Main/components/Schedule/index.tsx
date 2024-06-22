import { useState } from 'react';
import Alert from 'components/Alert';
import { toast } from 'react-toastify';
import Image1 from 'assets/images/Schedule/image_1.png';
import Image2 from 'assets/images/Schedule/image_2.png';
import Image3 from 'assets/images/Schedule/image_3.png';
import Image4 from 'assets/images/Schedule/image_4.png';
import Image5 from 'assets/images/Schedule/image_5.png';
import ImagePhoto from 'assets/svg/Schedule/photo.svg';
import Popap from 'components/Popap';
import PopapContent from './PopalContent';
import { Event } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: Event[];
  link: string;
};

const Schedule = ({ data, link }: Props) => {
  const onDownloadFile = () => {
    window.open(link, '_blank');
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

  // toast('Произошла ошибка');
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
            {link && (
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
            )}
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
                  {data.map((event, index) => {
                    const srcPhoto = event.photo || ImagePhoto;
                    return (
                      <tr key={index}>
                        <td>
                          <div className={styles.schedule__table_col}>
                            <span className={styles['schedule__table_text-l']}>
                              {event.title}
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
                              {event.start_date_name}
                            </span>
                            <span className={styles['schedule__table_text-s']}>
                              {event.start_date_desc}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span className={styles['schedule__table_text-m']}>
                              {event.time_name}
                            </span>
                            <span className={styles['schedule__table_text-s']}>
                              {event.time_desc}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div
                            className={`${styles.schedule__table_col} ${styles['schedule__table_col-s']}`}
                          >
                            <img
                              className={styles.schedule__table_img}
                              src={srcPhoto}
                              alt='Фото'
                            />
                            <span className={styles['schedule__table_text-m']}>
                              {event.fullname}
                            </span>
                            <span className={styles['schedule__table_text-s']}>
                              {event.position_name}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div
                            className={styles['schedule__table_text-lm']}
                            dangerouslySetInnerHTML={{ __html: event.desc }}
                          ></div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Popap isShow={isShowPopap} onClose={onShowPopapHandler}>
        <PopapContent onClick={onShowPopapHandler} />
      </Popap>
      <Alert />
    </>
  );
};

export default Schedule;
