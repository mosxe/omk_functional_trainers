import { useState } from 'react';
import TextArea from 'components/TextArea';
import { LoaderContent } from 'components/Loader';
import PopapAlert from './PopapAlert';
import Image1 from 'assets/svg/Program/card_1.svg';
import Image2 from 'assets/svg/Program/card_2.svg';
import Image3 from 'assets/svg/Program/card_3.svg';
import Image4 from 'assets/svg/Program/card_4.svg';
import { sendRequest } from '../../utils';
import styles from './styles.module.scss';

type Props = {
  id: number | null;
  onClose: (isError: boolean) => void;
  link: string;
};

const PopapContent = ({ id, onClose, link }: Props) => {
  const [isShowAlert, setShowAlert] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    sendRequest('asdas')
      .then((res) => {
        if (res.isError) {
          onClose(true);
        } else {
          setShowAlert(true);
        }
        // onClose(res.isError);
      })
      .catch((e) => {
        console.log(e);
        // onClose(true);
      })
      .finally(() => setLoading(false));
  };

  const onDownloadFile = () => {
    window.open(link, '_blank');
  };

  if (isShowAlert) {
    return (
      <PopapAlert
        title='Спасибо! Ваша заявка отправлена куратору!'
        text='В течение 3 рабочих дней с Вами свяжется куратор проекта, не пропустите письмо по электронной почте!'
      />
    );
  }

  switch (id) {
    case 1:
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
              Хочу записаться на диагностику
            </h2>
          </div>
          <div className={styles['program__popap-content']}>
            <span className={styles['program__popap-text']}>
              В этом окне Вы можете задать любой интересующий Вас вопрос по
              диагностике. Если вопросов нет, просто нажмите кнопку “Записаться”
              и ваш запрос будет отправлен.
            </span>
            <TextArea />
          </div>
          <button
            className={styles['program__popap-btn']}
            type='button'
            onClick={handleClick}
          >
            Записаться
          </button>
        </div>
      );
    case 2:
      return (
        <div className={styles['program__popap-wrapper']}>
          {isLoading && <LoaderContent />}
          <div className={styles['program__popap-header']}>
            <img
              className={styles['program__popap-image']}
              src={Image3}
              alt='Картинка'
            />
            <h2 className={styles['program__popap-title']}>
              Хочу записаться на тренинг
            </h2>
          </div>
          <div className={styles['program__popap-content']}>
            <span className={styles['program__popap-text']}>
              В этом окне Вы можете задать любой интересующий Вас вопрос по
              тренингу. Если вопросов нет, просто нажмите кнопку “Записаться” и
              ваш запрос будет отправлен.
            </span>
            <TextArea />
          </div>
          <button
            className={styles['program__popap-btn']}
            type='button'
            onClick={handleClick}
          >
            Записаться
          </button>
        </div>
      );
    case 3:
      return (
        <div className={styles['program__popap-wrapper']}>
          <div className={styles['program__popap-header']}>
            <img
              className={styles['program__popap-image']}
              src={Image2}
              alt='Картинка'
            />
          </div>
          <div className={styles['program__popap-content']}>
            <span
              className={`${styles['program__popap-text']} ${styles['program__popap-text-gray']}`}
            >
              Чтобы скачать план индивидуального развития нажмите кнопку
            </span>
          </div>
          <button
            className={styles['program__popap-btn']}
            type='button'
            onClick={onDownloadFile}
          >
            <svg
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.16667 10.5L10.5 16.2434L16.8333 10.5556M10.5 1V15.9286M1 20H20'
                stroke='white'
                stroke-width='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            скачать план развития
          </button>
        </div>
      );
    case 4:
      return (
        <div className={styles['program__popap-wrapper']}>
          {isLoading && <LoaderContent />}
          <div className={styles['program__popap-header']}>
            <img
              className={styles['program__popap-image']}
              src={Image4}
              alt='Картинка'
            />
            <h2 className={styles['program__popap-title']}>
              Хочу записаться на сертификацию
            </h2>
          </div>
          <div className={styles['program__popap-content']}>
            <span className={styles['program__popap-text']}>
              В этом окне Вы можете задать любой интересующий Вас вопрос по
              сертификации. Если вопросов нет, просто нажмите кнопку
              “Записаться” и ваш запрос будет отправлен.
            </span>
            <TextArea />
          </div>
          <button
            className={styles['program__popap-btn']}
            type='button'
            onClick={handleClick}
          >
            Записаться
          </button>
        </div>
      );
    default:
      return <></>;
  }
};

export default PopapContent;
