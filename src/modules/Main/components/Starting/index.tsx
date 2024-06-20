import { useState } from 'react';
import Popap from 'components/Popap';
import Image1 from 'assets/svg/Starting/number_1.svg';
import Image2 from 'assets/svg/Starting/number_2.svg';
import Image3 from 'assets/svg/Starting/number_3.svg';
import Image4 from 'assets/svg/Starting/number_4.svg';
import styles from './styles.module.scss';

const Starting = () => {
  const formData = [1, 2];
  const [form, setForm] = useState([]);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);
  const [values, setValues] = useState<any>({});

  const onShowPopap = () => {
    setShowPopap(!isShowPopap);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    console.log(values);
  };

  const handleInputChange = (e, id) => {
    const newForm = form.map((item) => {
      return item.id === id ? { ...item, data: e.target.value } : item;
    });

    setForm(newForm);
  };

  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
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
                onClick={onShowPopap}
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
      <Popap isShow={isShowPopap} onClose={onShowPopap}>
        <form onSubmit={onSubmit}>
          {formData.map((item, index) => {
            return (
              <input
                key={index}
                id={`${index}`}
                name={`${index}`}
                value={values[index]}
                onChange={(e) => fieldChanged(index, e.target.value)}
              />
            );
          })}
          <button type='submit'>submit</button>
        </form>
      </Popap>
    </>
  );
};

export default Starting;
