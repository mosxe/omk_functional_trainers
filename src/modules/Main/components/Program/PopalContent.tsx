import { useState } from 'react';
import TextArea from 'components/TextArea';
import { LoaderContent } from 'components/Loader';
import PopapAlert from './PopapAlert';
import Image1 from 'assets/svg/Program/card_1.svg';
import Image3 from 'assets/svg/Program/card_3.svg';
import Image4 from 'assets/svg/Program/card_4.svg';
import { sendRequest } from '../../utils';
import { Type } from 'types';
import styles from './styles.module.scss';

type Props = {
  id: number | null;
  onClose: (isError: boolean) => void;
};

const PopapContent = ({ id, onClose }: Props) => {
  const [isShowAlert, setShowAlert] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');

  const handleClick = (type: Type) => {
    setLoading(true);
    sendRequest({ type, text: textValue })
      .then((res) => {
        if (res.isError) {
          onClose(true);
        } else {
          setShowAlert(true);
        }
      })
      .catch((e) => {
        console.log(e);
        onClose(true);
      })
      .finally(() => setLoading(false));
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
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
            <TextArea
              value={textValue}
              onChange={onChange}
              placeholder='Введите текст сообщения...'
            />
          </div>
          <button
            className={styles['program__popap-btn']}
            type='button'
            onClick={() => handleClick('diagnostics')}
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
            <TextArea
              value={textValue}
              onChange={onChange}
              placeholder='Введите текст сообщения...'
            />
          </div>
          <button
            className={styles['program__popap-btn']}
            type='button'
            onClick={() => handleClick('training')}
          >
            Записаться
          </button>
        </div>
      );
    case 3:
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
            <TextArea
              value={textValue}
              onChange={onChange}
              placeholder='Введите текст сообщения...'
            />
          </div>
          <button
            className={styles['program__popap-btn']}
            type='button'
            onClick={() => handleClick('certification')}
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
