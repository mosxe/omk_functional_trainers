import Material from './components/Material';
import Image from 'assets/svg/Materials/materials.svg';
import { Material as IMaterial } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IMaterial[];
};

const Materials = ({ data }: Props) => {
  return (
    <section className={styles.materials}>
      <h2 className={styles.materials__title}>
        <span className={styles.materials__title_red}>Материалы</span> для
        <br></br>
        самостоятельного изучения
      </h2>
      <div className={styles.materials__box}>
        <div className={styles.materials__wrapper}>
          <img className={styles.materials__img} src={Image} alt='Картинка' />
          <div className={styles.materials__text}>
            подборка материалов для скачивания
          </div>
        </div>
        <div className={styles.materials__container}>
          {data.map((material, index) => (
            <Material data={material} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
