import { useState } from 'react';
import Image1 from 'assets/images/Schedule/image_1.png';
import Image2 from 'assets/images/Schedule/image_2.png';
import Image3 from 'assets/images/Schedule/image_3.png';
import Image4 from 'assets/images/Schedule/image_4.png';
import Image5 from 'assets/images/Schedule/image_5.png';
// import Modal from 'components/Modal';
// import ModalContent from './ModalContent';
// import PopapContent from './PopalContent';
// import Popap from 'components/Popap';
import styles from './styles.module.scss';

const Schedule = () => {
  const onDownloadFile = () => {
    window.open('yandex.ru', '_blank');
  };
  // const [isShowModal, setShowModal] = useState<boolean>(false);
  // const [isShowPopap, setShowPopap] = useState<boolean>(false);
  // const [activeIndex, setActiveIndex] = useState<number>(1);

  // const onShowModalHandler = () => {
  //   setShowModal(!isShowModal);
  // };

  // const onShowPopapHandler = () => {
  //   setShowPopap(!isShowPopap);
  // };

  // const handleClick = (index: number) => {
  //   setActiveIndex(index);
  //   onShowModalHandler();
  // };

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
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>задачи</th>
                  <th>Важность</th>
                  <th>Срочность</th>
                  <th>вознаграждение</th>
                  <th>Влияние на окружающих</th>
                  <th>Итог</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Закончить дизайн презентации и отдать её в вёрстку</td>
                  <td>4</td>
                  <td>4</td>
                  <td>3</td>
                  <td>4</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Сформировать коммерческое предложение для клиента</td>
                  <td>4</td>
                  <td>2</td>
                  <td>4</td>
                  <td>4</td>
                  <td>14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* <Modal isShow={isShowModal} onClose={onShowModalHandler} width={800}>
        <ModalContent
          id={activeIndex}
          onClick={onShowModalHandler}
          onShowPopap={onShowPopapHandler}
        />
      </Modal>
      <Popap isShow={isShowPopap} onClose={onShowPopapHandler}>
        <PopapContent id={activeIndex} onClick={onShowPopapHandler} />
      </Popap> */}
    </>
  );
};

export default Schedule;
