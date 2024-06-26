﻿import { Contact } from 'types';
import { getLink } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: Contact;
};

const Contacts = ({ data }: Props) => {
  const linkPhoto = data.photo ? getLink(data.photo) : '';
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__wrapper}>
        <h2 className={styles.contacts__title}>
          <span className={styles.contacts__title_red}>Контакты</span>
        </h2>
        <div className={styles.contacts__container}>
          {linkPhoto && (
            <img className={styles.contacts__img} src={linkPhoto} alt='Фото' />
          )}
          <div className={styles.contacts__col}>
            <span className={styles.contacts__text}>{data.fullname}</span>
            <span className={styles.contacts__desc}>{data.position_name}</span>
            <a
              className={styles.contacts__email}
              type='email'
              href={`mailto:${data.email}`}
            >
              {data.email}
            </a>
          </div>
          <div className={styles.contacts__col}>
            <span className={styles.contacts__text}>Электронная почта</span>
            <span className={styles.contacts__desc}>
              Корпоративного университета
            </span>
            <a
              className={styles.contacts__email}
              type='email'
              href='mailto:university@omk.ru'
            >
              university@omk.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
