import { useRef, useEffect, useState, ReactNode, useCallback } from 'react';
import PopapHeader from './PopapHeader';
import PopapBody from './PopapBody';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

type Props = {
  isShow: boolean;
  onClose: (isShow: boolean) => void;
  children: ReactNode;
  width?: number;
};

const Popap = ({ isShow, onClose, children, width }: Props) => {
  const [render, setRender] = useState(isShow);
  const popapRef = useRef<HTMLDivElement>(null);
  const className = isShow
    ? `${styles.popap} ${styles.show}`
    : `${styles.popap} ${styles.hide}`;

  useEffect(() => {
    if (isShow) {
      setRender(true);
      // document.body.style.overflow = 'hidden';
    }
    return () => {
      // document.body.style.overflow = 'auto';
    };
  }, [isShow]);

  const handleUserKeyPress = useCallback(
    (event: any) => {
      if (event.key === 'Escape') {
        onClose(true);
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isShow) {
      window.addEventListener('keydown', handleUserKeyPress);
    }
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress, isShow]);

  const onAnimationEnd = () => {
    if (!isShow) {
      setRender(false);
    }
  };

  return (
    render &&
    createPortal(
      <div className={className} ref={popapRef} onAnimationEnd={onAnimationEnd}>
        <div className={styles.popap__wrapper} style={{ maxWidth: width }}>
          <div className={styles.popap__content}>
            <PopapHeader onClick={onClose} />
            <PopapBody>{children}</PopapBody>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default Popap;
