import { useState } from 'react';
import Image1 from 'assets/svg/Program/card_1.svg';
import ImagePopap from 'assets/svg/Schedule/popap.svg';
import styles from '../Program/styles.module.scss';

type Props = {
  onClick: () => void;
};

const PopapContent = ({ onClick }: Props) => {
  const [isShowAlert, setShowAlert] = useState<boolean>(false);
  const handleClick = () => {
    //Идет запрос на сервер
    setShowAlert(true);
  };

  if (isShowAlert) {
    return (
      <div className={styles['program__popap-wrapper']}>
        <div className={styles['program__popap-header']}>
          <img
            className={styles['program__popap-image']}
            src={ImagePopap}
            alt='Картинка'
          />
          <h2
            className={`${styles['program__popap-title']} ${styles['program__popap-title-db']}`}
          >
            Спасибо! Ваша заявка отправлена куратору!
          </h2>
        </div>
        <div className={styles['program__popap-content']}>
          <span
            className={`${styles['program__popap-text']} ${styles['program__popap-text-l']} ${styles['program__popap-text-gray']}`}
          >
            В течение 3 рабочих дней с Вами свяжется куратор проекта, не
            пропустите письмо по электронной почте!
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['program__popap-wrapper']}>
      <div className={styles['program__popap-header']}>
        <img
          className={styles['program__popap-image']}
          src={Image1}
          alt='Картинка'
        />
        <h2 className={styles['program__popap-title']}>
          Хочу записаться на мероприятие
        </h2>
      </div>
      <button
        className={styles['program__popap-btn']}
        type='button'
        onClick={handleClick}
      >
        отправить заявку
      </button>
    </div>
  );
};

export default PopapContent;
