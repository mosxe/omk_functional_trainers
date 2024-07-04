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
          <div className={styles.materials__text}>подборка материалов</div>
        </div>
        <div className={styles.materials__container}>
          {data.map((material, index) => {
            const style: Record<string, string> = {};
            const isEvenData = data.length % 2;
            if (isEvenData > 0 && index === data.length - 1) {
              style.borderBottom = 'none';
            } else if (
              isEvenData === 0 &&
              (index === data.length - 1 || index === data.length - 2)
            ) {
              style.borderBottom = 'none';
            }
            return <Material data={material} key={index} style={style} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Materials;
