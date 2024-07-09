import { Material as IMaterial } from 'types';
import { getLink, getLinkFile } from 'helpers';
import styles from '../../styles.module.scss';

type Props = {
  data: IMaterial;
  style?: React.CSSProperties;
};

const Material = ({ data, style }: Props) => {
  const handleClick = () => {
    if (data.is_download === 'true') {
      const linkFile = getLinkFile(data.link);
      const a = document.createElement('a');
      a.href = linkFile;
      a.download = 'Материал';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      const linkPage = getLink(data.link);
      window.open(linkPage, '_blank');
    }
  };

  return (
    <div className={styles.materials__card} onClick={handleClick} style={style}>
      <span className={styles.materials__card_desc}>{data.type}</span>
      <div className={styles.materials__card_wrapper}>
        <span className={styles.materials__card_title}>{data.title}</span>
        <div className={styles.materials__card_aside}>
          {data.is_download === 'true' ? (
            <>
              <div className={styles.materials__card_help}>
                материал для скачивания
              </div>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.50975 9.60834L9.99994 14.5872L15.4901 9.65658M9.99994 1.37305V14.3142M1.76465 17.8436H18.2352'
                  stroke='#1A222C'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </>
          ) : (
            <>
              <div className={styles.materials__card_help}>
                перейти по ссылке
              </div>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.09082 1H14.9999V9.90909'
                  stroke='#1A222C'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 14.9999L14.3636 1.63623'
                  stroke='#1A222C'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <span className={styles.materials__card_text}>{data.desc}</span>
    </div>
  );
};

export default Material;
