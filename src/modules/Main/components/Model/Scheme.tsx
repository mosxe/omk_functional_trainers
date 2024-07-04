import ImageScheme from 'assets/images/Model/scheme.png';
import styles from './styles.module.scss';

const Scheme = () => {
  return (
    <div className={styles.model__scheme}>
      <div className={styles.model__img}>
        <img src={ImageScheme} alt='Схема' />
      </div>
    </div>
  );
};

export default Scheme;
