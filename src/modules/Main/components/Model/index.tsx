import Scheme from './Scheme';
import ImageFooter1 from 'assets/images/Teaching/img_2.png';
import ImageFooter2 from 'assets/images/Teaching/img_1.png';
import ImageFooter3 from 'assets/images/Teaching/card_3.png';
import { getLink, getLinkFile } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  link: string;
  video: string;
};

const Model = ({ link, video }: Props) => {
  const handleClick = () => {
    const linkFile = getLinkFile(link);
    const a = document.createElement('a');
    a.href = linkFile;
    a.download = 'Модель компетенций';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const linkVideo = getLink(video);

  const descClassName = video
    ? styles.model__content
    : `${styles.model__content} ${styles.model__content_w}`;

  return (
    <section className={styles.model}>
      <div className={styles.model__wrapper}>
        <div className={styles.model__row}>
          <div className={styles.model__content}>
            <h2 className={styles.model__title}>
              <span className={styles.model__title_red}>
                Модель компетенций
              </span>{' '}
              функционального тренера
            </h2>
          </div>
          <div
            className={`${styles.model__content} ${styles.model__content_end}`}
          >
            <span className={styles.model__subtitle}>
              или как обучать взрослых эффективно
            </span>
          </div>
        </div>
        <div className={styles.model__row}>
          <div className={descClassName}>
            <p className={styles.model__text}>
              Модель компетенций — это описание навыков, которыми должен
              обладать преподаватель, чтобы{' '}
              <span className={styles.model__text_black}>
                обучать эффективно. Именно этим навыкам мы обучаем на программе
                подготовки функциональных тренеров.
              </span>
            </p>
            <p className={styles.model__text}>
              Модель состоит из четырех компетенций, каждая из которых описана в
              деталях таким образом, что становится понятно, какие компетенции
              важны в преподавании. Эта простая модель позволяет оценить, какие
              компетенции у преподавателя развиты хорошо, а какие требуют
              развития.
            </p>
          </div>
          {video && (
            <div className={styles.model__content}>
              <div className={styles.model__video}>
                <video controls>
                  <source src={linkVideo} />
                </video>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className={styles.model__container}>
            <div className={styles.model__box}>
              <span className={styles.model__header}>Модель компетенций</span>
              {link && (
                <button
                  className={styles.model__btn}
                  type='button'
                  onClick={handleClick}
                >
                  <span>Скачать</span>
                  <svg
                    width='13'
                    height='14'
                    viewBox='0 0 13 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2.5 7.16667L6.5 10.7941L10.5 7.20181M6.5 1.16667V10.5952M0.5 13.1667H12.5'
                      stroke='#8D8E91'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              )}
            </div>
            <Scheme />
          </div>
          <div className={styles.model__footer}>
            <div className={styles.model__footer_text}>
              Эти навыки обучения взрослых людей мы помогаем освоить на{' '}
              <span className={styles['model__footer_text-black']}>
                программе развития для преподавателей
              </span>
            </div>
            <div className={styles.model__footer_images}>
              <div className={styles.model__footer_image}>
                <img src={ImageFooter1} alt='Картинка' />
              </div>
              <div className={styles.model__footer_image}>
                <img src={ImageFooter2} alt='Картинка' />
              </div>
              <div className={styles.model__footer_image}>
                <img src={ImageFooter3} alt='Картинка' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
