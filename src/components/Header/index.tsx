import { useWindowSize } from 'hooks/useWindowSize';
import HeaderImage from 'assets/images/header.png';
import HeaderImageMobile from 'assets/images/header_mobile.png';
import styles from './styles.module.scss';

type Props = {
  onClick: (isTeaching: boolean) => void;
};
const Header = ({ onClick }: Props) => {
  const [width] = useWindowSize();
  const srcImage = width < 768 ? HeaderImageMobile : HeaderImage;

  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__image}>
          <img src={srcImage} alt='Картинка' />
        </div>
        <div className={styles.header__container}>
          <h1 className={styles.header__title}>
            <span className={styles.header__title_red}>РАЗВИТИЕ</span>{' '}
            ВНУТРЕННИХ ПРЕПОДАВАТЕЛЕЙ И ФУНКЦИОНАЛЬНЫХ ТРЕНЕРОВ ОМК
          </h1>
          <div className={styles.header__btns}>
            <button
              className={styles.header__btn}
              type='button'
              onClick={() => onClick(true)}
            >
              Хочу обучать других
              <svg
                width='62'
                height='11'
                viewBox='0 0 62 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 10.5H61L42.1864 0.5'
                  stroke='#E1251B'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button
              className={styles.header__btn}
              type='button'
              onClick={() => onClick(false)}
            >
              Уже преподаю
              <svg
                width='62'
                height='11'
                viewBox='0 0 62 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 10.5H61L42.1864 0.5'
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
  );
};

export default Header;
