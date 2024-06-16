import { useState } from 'react';
import Modal from 'components/Modal';
import ModalContent from './ModalContent';
import PopapContent from './PopalContent';
import Popap from 'components/Popap';
import Image1 from 'assets/svg/Program/card_1.svg';
import Image2 from 'assets/svg/Program/card_2.svg';
import Image3 from 'assets/svg/Program/card_3.svg';
import Image4 from 'assets/svg/Program/card_4.svg';
import styles from './styles.module.scss';

const Program = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const onShowModalHandler = () => {
    setShowModal(!isShowModal);
  };

  const onShowPopapHandler = () => {
    setShowPopap(!isShowPopap);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onShowModalHandler();
  };

  return (
    <>
      <section className={styles.program}>
        <div className={styles.program__wrapper}>
          <div className={styles.program__row}>
            <div className={styles.program__content}>
              <h2 className={styles.program__title}>
                <span className={styles.program__title_red}>
                  Программа развития
                </span>
                <br></br> преподавателей тренеров
              </h2>
            </div>
            <div
              className={`${styles.program__content} ${styles.program__content_end}`}
            >
              <span className={styles.program__subtitle}>
                или как стать функциональным тренером
              </span>
            </div>
          </div>
          <div className={styles.program__row}>
            <div className={styles.program__content}>
              <div className={styles.program__card}>
                <img
                  className={styles.program__card_img}
                  src={Image1}
                  alt='Картинка'
                />
                <div className={styles.program__card_wrapper}>
                  <span className={styles.program__card_title}>
                    Диагностика
                  </span>
                  <p className={styles.program__card_text}>
                    Здесь будет короткое описание в три строки, которое будет
                    открывать поп-ап/вкладку с подробным описанием по клику на
                    ссылку читать далее
                  </p>
                  <button
                    className={styles.program__card_btn}
                    type='button'
                    onClick={() => handleClick(1)}
                  >
                    Записаться на диагностику
                    <svg
                      width='52'
                      height='12'
                      viewBox='0 0 52 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 11H51L35.322 1'
                        stroke='#E1251B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.program__content}>
              <div className={styles.program__card}>
                <img
                  className={styles.program__card_img}
                  src={Image3}
                  alt='Картинка'
                />
                <div className={styles.program__card_wrapper}>
                  <span className={styles.program__card_title}>
                    Трехдневный тренинг
                  </span>
                  <p className={styles.program__card_text}>
                    Здесь будет короткое описание в три строки, которое будет
                    открывать поп-ап/вкладку с подробным описанием по клику на
                    ссылку читать далее
                  </p>
                  <button
                    className={styles.program__card_btn}
                    type='button'
                    onClick={() => handleClick(2)}
                  >
                    Записаться на тренинг
                    <svg
                      width='52'
                      height='12'
                      viewBox='0 0 52 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 11H51L35.322 1'
                        stroke='#E1251B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.program__row}>
            <div className={styles.program__content}>
              <div className={styles.program__card}>
                <img
                  className={styles.program__card_img}
                  src={Image2}
                  alt='Картинка'
                />
                <div className={styles.program__card_wrapper}>
                  <span className={styles.program__card_title}>
                    Работа с индивидуальным планом развития
                  </span>
                  <p className={styles.program__card_text}>
                    Здесь будет короткое описание в три строки, которое будет
                    открывать поп-ап/вкладку с подробным описанием по клику на
                    ссылку читать далее
                  </p>
                  <button
                    className={styles.program__card_btn}
                    type='button'
                    onClick={() => handleClick(3)}
                  >
                    скачать план развития
                    <svg
                      width='52'
                      height='12'
                      viewBox='0 0 52 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 11H51L35.322 1'
                        stroke='#E1251B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.program__content}>
              <div className={styles.program__card}>
                <img
                  className={styles.program__card_img}
                  src={Image4}
                  alt='Картинка'
                />
                <div className={styles.program__card_wrapper}>
                  <span className={styles.program__card_title}>
                    Сертификация на функционального тренера
                  </span>
                  <p className={styles.program__card_text}>
                    Здесь будет короткое описание в три строки, которое будет
                    открывать поп-ап/вкладку с подробным описанием по клику на
                    ссылку читать далее
                  </p>
                  <button
                    className={styles.program__card_btn}
                    type='button'
                    onClick={() => handleClick(4)}
                  >
                    Записаться на сертификацию
                    <svg
                      width='52'
                      height='12'
                      viewBox='0 0 52 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 11H51L35.322 1'
                        stroke='#E1251B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isShow={isShowModal} onClose={onShowModalHandler} width={800}>
        <ModalContent
          id={activeIndex}
          onClick={onShowModalHandler}
          onShowPopap={onShowPopapHandler}
        />
      </Modal>
      <Popap isShow={isShowPopap} onClose={onShowPopapHandler}>
        <PopapContent id={activeIndex} onClick={onShowPopapHandler} />
      </Popap>
    </>
  );
};

export default Program;
