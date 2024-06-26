import ImageScheme from 'assets/images/Model/scheme.png';
import ImageSchemeSmall from 'assets/images/Model/scheme_small.png';
import { useWindowSize } from 'hooks/useWindowSize';
import styles from './styles.module.scss';

const Scheme = () => {
  const [width] = useWindowSize();
  const srcImage = width < 700 ? ImageSchemeSmall : ImageScheme;

  return (
    <div className={styles.model__scheme}>
      <div className={styles.model__img}>
        <img src={srcImage} alt='Схема' />
      </div>
    </div>
  );
};

export default Scheme;
