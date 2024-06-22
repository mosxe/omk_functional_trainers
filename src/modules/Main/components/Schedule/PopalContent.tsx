import { useState } from 'react';
import { LoaderContent } from 'components/Loader';
import PopapAlert from '../Program/PopapAlert';
import Image1 from 'assets/svg/Program/card_1.svg';
import styles from '../Program/styles.module.scss';

type Props = {
  onClick: () => void;
};

const PopapContent = ({ onClick }: Props) => {
  const [isShowAlert, setShowAlert] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    onClick();
    //Идет запрос на сервер
    setShowAlert(true);
  };

  if (isShowAlert) {
    return (
      <PopapAlert
        title='Спасибо! Ваша заявка отправлена куратору!'
        text='В течение 3 рабочих дней с Вами свяжется куратор проекта, не пропустите письмо по электронной почте!'
      />
    );
  }

  return (
    <div className={styles['program__popap-wrapper']}>
      {isLoading && <LoaderContent />}
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
