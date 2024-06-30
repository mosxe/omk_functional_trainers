import Image1 from 'assets/images/Schedule/image_1.png';
import Image2 from 'assets/images/Schedule/image_2.png';
import Image3 from 'assets/images/Schedule/image_3.png';
import Image4 from 'assets/images/Schedule/image_4.png';
import Image5 from 'assets/images/Schedule/image_5.png';
import ImagePhoto from 'assets/svg/Schedule/photo.svg';
import { Event } from 'types';
import { getLink, getLinkFile } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: Event[];
  link: string;
};

const Schedule = ({ data, link }: Props) => {
  const handleClick = (eventLink: string) => {
    const linkPage = getLink(eventLink);
    window.open(linkPage, '_blank');
  };

  const onDownloadFile = () => {
    const linkFile = getLinkFile(link);
    const a = document.createElement('a');
    a.href = linkFile;
    a.download = 'Расписание мероприятий';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
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
          <div
            className={`${styles.schedule__content} ${styles.schedule__content_img}`}
          >
            <div className={styles.schedule__image_1}>
              <img src={Image1} alt='Картинка' />
            </div>
            <div className={styles['schedule__box-images']}>
              <div className={styles['schedule__row-images']}>
                <div className={styles.schedule__image_2}>
                  <img src={Image2} alt='Картинка' />
                </div>
                <div className={styles.schedule__image_3}>
                  <img src={Image3} alt='Картинка' />
                </div>
              </div>
              <div className={styles['schedule__row-images']}>
                <div className={styles.schedule__image_4}>
                  <img src={Image4} alt='Картинка' />
                </div>
                <div className={styles.schedule__image_5}>
                  <img src={Image5} alt='Картинка' />
                </div>
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
                          {event.link && (
                            <button
                              className={styles.schedule__table_btn}
                              type='button'
                              onClick={() => handleClick(event.link)}
                            >
                              ЗАПИСАТЬСЯ
                            </button>
                          )}
                        </div>
                      </td>
                      <td
                        dangerouslySetInnerHTML={{ __html: event.start_date }}
                      ></td>
                      <td
                        dangerouslySetInnerHTML={{ __html: event.start_time }}
                      ></td>
                      <td>
                        <div
                          className={`${styles.schedule__table_col} ${styles['schedule__table_col-s']}`}
                        >
                          <img
                            className={styles.schedule__table_img}
                            src={srcPhoto}
                            alt='Фото'
                          />
                          <span className='text-m'>{event.fullname}</span>
                          <span className='text-s'>{event.position_name}</span>
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
  );
};

export default Schedule;
