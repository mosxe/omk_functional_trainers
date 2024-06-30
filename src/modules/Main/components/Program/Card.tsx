import { useState } from 'react';
import Modal from 'components/Modal';
import Popap from 'components/Popap';
import { toast } from 'react-toastify';
import ModalContent from './ModalContent';
import PopapContent from './PopalContent';
import { Program, Type } from 'types';
import { getProgram, getActionProgram, onActionProgram } from 'helpers';
import styles from './styles.module.scss';

type Props = {
  data: Program[];
  index: number;
  title: string;
  text: string;
  image: string;
  type: Type;
};

const Card = ({ data, index, title, text, image, type }: Props) => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [isShowPopap, setShowPopap] = useState<boolean>(false);

  const program = getProgram(data, type);
  const actionButton = getActionProgram(program);

  const onShowModalHandler = () => {
    setShowModal(!isShowModal);
  };

  const onShowPopapHandler = () => {
    setShowPopap(!isShowPopap);
  };

  const onClosePopap = (isErrorFetch: boolean) => {
    setShowPopap(false);
    if (isErrorFetch) {
      toast('Произошла ошибка');
    }
  };

  return (
    <>
      <div className={styles.program__card}>
        <img className={styles.program__card_img} src={image} alt='Картинка' />
        <div className={styles.program__card_wrapper}>
          <span className={styles.program__card_title}>{title}</span>
          <p className={styles.program__card_text}>
            {text}{' '}
            {index !== 4 && (
              <button
                className={styles.program__card_link}
                type='button'
                onClick={onShowModalHandler}
              >
                читать далее
              </button>
            )}
          </p>
          {actionButton !== undefined && program !== undefined && (
            <button
              className={styles.program__card_btn}
              type='button'
              onClick={() =>
                onActionProgram(program, actionButton, onShowPopapHandler)
              }
            >
              {program.button_name}
              <svg
                width='52'
                height='12'
                viewBox='0 0 52 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 11H51L35.322 1'
                  stroke='#E1251B'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <Modal isShow={isShowModal} onClose={onShowModalHandler} width={800}>
        <ModalContent
          id={index}
          onClick={onShowModalHandler}
          onShowPopap={onShowPopapHandler}
          program={program}
          actionButton={actionButton}
        />
      </Modal>
      <Popap isShow={isShowPopap} onClose={onShowPopapHandler}>
        <PopapContent
          id={index}
          onClose={onClosePopap}
          notificationId={program?.notification_type_id}
        />
      </Popap>
    </>
  );
};

export default Card;
