import ImagePopap from 'assets/svg/Schedule/popap.svg';
import styles from './styles.module.scss';

type Props = {
  title: string;
  text: string;
  isImageLarge?: boolean;
};

const PopapAlert = ({ title, text, isImageLarge }: Props) => {
  const classNameImage = isImageLarge
    ? `${styles['program__popap-image']} ${styles['program__popap-image-l']}`
    : styles['program__popap-image'];
  return (
    <div className={styles['program__popap-wrapper']}>
      <div className={styles['program__popap-header']}>
        <img className={classNameImage} src={ImagePopap} alt='Картинка' />
        <h2
          className={`${styles['program__popap-title']} ${styles['program__popap-title-db']}`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
      </div>
      <div className={styles['program__popap-content']}>
        <span
          className={`${styles['program__popap-text']} ${styles['program__popap-text-l']} ${styles['program__popap-text-gray']}`}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default PopapAlert;
