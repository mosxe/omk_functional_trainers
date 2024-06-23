import { useState } from 'react';
import Popap from 'components/Popap';
import Form from './components/Form';
import PopapAlert from '../Program/PopapAlert';
import { toast } from 'react-toastify';
import Image1 from 'assets/svg/Starting/number_1.svg';
import Image2 from 'assets/svg/Starting/number_2.svg';
import Image3 from 'assets/svg/Starting/number_3.svg';
import Image4 from 'assets/svg/Starting/number_4.svg';
import { ResponseForm } from 'types';
import { getFetchForm, initialForm } from '../../utils';
import styles from './styles.module.scss';

const Starting = () => {
  const [data, setData] = useState<ResponseForm>(initialForm);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);
  const [isShowAlert, setShowAlert] = useState<boolean>(false);

  const onShowPopap = () => {
    setShowPopap(!isShowPopap);
  };

  const handleClick = () => {
    setShowAlert(false);
    setShowPopap(!isShowPopap);
    if (!data.data.length) {
      setLoading(true);
      getFetchForm()
        .then((res) => {
          if (res.isError) {
            setError(true);
            return;
          }
          setData(res);
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        })
        .finally(() => setLoading(false));
    }
  };

  const onCloseForm = (isErrorFetch: boolean) => {
    if (isErrorFetch) {
      setShowPopap(false);
      toast('Произошла ошибка');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <section className={styles.starting}>
        <div className={styles.starting__wrapper}>
          <h2 className={styles.starting__title}>
            <span className={styles.starting__title_red}>Как начать</span>{' '}
            преподавать и стать<br></br> функциональным тренером?
          </h2>
          <div className={styles.starting__container}>
            <div className={styles.starting__card}>
              <div className={styles.starting__card_wrapper}>
                <img
                  className={styles.starting__card_img}
                  src={Image1}
                  alt='Картинка'
                />
                <div className={styles.starting__card_title}>
                  Заполни анкету
                </div>
                <div className={styles.starting__card_text}>
                  Нажми на ссылку, заполни и отправь анкету куратору
                </div>
              </div>
              <button
                className={styles.starting__card_btn}
                type='button'
                onClick={handleClick}
              >
                Заполнить анкету
              </button>
            </div>
            <div className={styles.starting__card}>
              <div className={styles.starting__card_wrapper}>
                <img
                  className={styles.starting__card_img}
                  src={Image2}
                  alt='Картинка'
                />
                <div className={styles.starting__card_title}>
                  Жди письма<br></br> от куратора проекта
                </div>
                <div className={styles.starting__card_text}>
                  Анкету получит куратор проекта, запросит рекомендации от
                  руководителя и пригласит тебя на установочную встречу
                </div>
              </div>
            </div>
            <div className={styles.starting__card}>
              <div className={styles.starting__card_wrapper}>
                <img
                  className={styles.starting__card_img}
                  src={Image3}
                  alt='Картинка'
                />
                <div className={styles.starting__card_title}>
                  Пройди диагностику
                </div>
                <div className={styles.starting__card_text}>
                  Диагностика базовых навыков передачи информации позволит
                  понять, какие компетенции преподавания тебе необходимо
                  развивать
                </div>
              </div>
            </div>
            <div className={styles.starting__card}>
              <div className={styles.starting__card_wrapper}>
                <img
                  className={styles.starting__card_img}
                  src={Image4}
                  alt='Картинка'
                />
                <div className={styles.starting__card_title}>
                  Обучайся и готовься<br></br> к аттестации
                </div>
                <div className={styles.starting__card_text}>
                  На программе развития внутренних преподавателей ты обучишься и
                  подготовишься к аттестации на проведение обучающей программы
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Popap isShow={isShowPopap} onClose={onShowPopap} width={750}>
        {!isShowAlert ? (
          <Form
            isLoading={isLoading}
            isError={isError}
            data={data}
            onClose={onCloseForm}
          />
        ) : (
          <PopapAlert
            title='Спасибо за заполнение формы!</br> Ваши ответы отправлены!'
            text='В течение 3 рабочих дней с Вами свяжется куратор проекта, не пропустите письмо по электронной почте.'
            isImageLarge
          />
        )}
      </Popap>
    </>
  );
};

export default Starting;
