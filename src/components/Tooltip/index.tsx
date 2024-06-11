import { Tooltip as ReactTooltip } from 'react-tooltip';
import styles from './styles.module.scss';

type Props = {
  id: string;
  isOpen: boolean;
  text: string | React.ReactNode;
  onClick: () => void;
  width: number;
};

const Tooltip = ({ id, isOpen, text, onClick, width = 500 }: Props) => {
  return (
    <ReactTooltip
      id={id}
      className={styles.tooltip}
      style={isOpen ? { display: 'block' } : { display: 'none' }}
      isOpen={isOpen}
      opacity={1}
      render={() => (
        <div className={styles.tooltip__wrapper} style={{ maxWidth: width }}>
          <div className={styles.tooltip__text}>{text}</div>
          <div
            role='button'
            onClick={onClick}
            className={styles.tooltip__close}
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 6L1 1M6 6L11 11M6 6L11 1M6 6L1 11'
                stroke='#878A8E'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      )}
    />
  );
};

export default Tooltip;
