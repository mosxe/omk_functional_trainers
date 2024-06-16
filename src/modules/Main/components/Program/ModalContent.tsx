import Modal, { ButtonClose } from 'components/Modal';
import Image1 from 'assets/svg/Program/card_1.svg';
import Image2 from 'assets/svg/Program/card_2.svg';
import Image3 from 'assets/svg/Program/card_3.svg';
import Image4 from 'assets/svg/Program/card_4.svg';
import styles from './styles.module.scss';

type Props = {
  id: number | null;
  onClick: () => void;
  onShowPopap: () => void;
};

const ModalContent = ({ id, onClick, onShowPopap }: Props) => {
  const handleClick = () => {
    onClick();
    onShowPopap();
  };

  switch (id) {
    case 1:
      return (
        <>
          <Modal.Header>
            <div className={styles['program__modal-header']}>
              <div className={styles['program__modal-row']}>
                <img src={Image1} alt='Картинка' />
                <span className={styles['program__modal-title']}>
                  Диагностика
                </span>
              </div>
              <ButtonClose onClick={onClick} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className={styles['program__modal-content']}>
              <p className={styles['program__modal-text']}>
                Разнообразный и богатый опыт социально-экономическое развитие
                играет важную роль в формировании всесторонне сбалансированных
                нововведений! Задача организации, в особенности же выбранный
                нами инновационный путь играет важную роль в формировании
                экономической целесообразности принимаемых решений! Повседневная
                практика показывает, что рамки и место обучения кадров влечет за
                собой процесс внедрения и модернизации дальнейших направлений
                развитая системы массового участия. Дорогие друзья, начало
                повседневной работы по формированию позиции обеспечивает
                актуальность всесторонне сбалансированных нововведений. Задача
                организации, в особенности же постоянный количественный рост и
                сфера нашей активности обеспечивает широкому кругу специалистов
                участие в формировании всесторонне сбалансированных
                нововведений. Равным образом реализация намеченного плана
                развития требует от нас анализа дальнейших направлений развитая
                системы массового участия? Соображения высшего порядка, а также
                постоянный количественный рост и сфера нашей активности влечет
                за собой процесс внедрения и модернизации позиций, занимаемых
                участниками в отношении поставленных задач!
              </p>
            </div>
            <button
              className={`${styles.program__card_btn} ${styles['program__card_btn-center']}`}
              type='button'
              onClick={handleClick}
            >
              Записаться на диагностику
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
          </Modal.Body>
        </>
      );
    case 2:
      return (
        <>
          <Modal.Header>
            <div className={styles['program__modal-header']}>
              <div className={styles['program__modal-row']}>
                <img src={Image3} alt='Картинка' />
                <span className={styles['program__modal-title']}>
                  Трехдневный тренинг
                </span>
              </div>
              <ButtonClose onClick={onClick} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className={styles['program__modal-content']}>
              <p className={styles['program__modal-text']}>
                Разнообразный и богатый опыт социально-экономическое развитие
                играет важную роль в формировании всесторонне сбалансированных
                нововведений! Задача организации, в особенности же выбранный
                нами инновационный путь играет важную роль в формировании
                экономической целесообразности принимаемых решений! Повседневная
                практика показывает, что рамки и место обучения кадров влечет за
                собой процесс внедрения и модернизации дальнейших направлений
                развитая системы массового участия. Дорогие друзья, начало
                повседневной работы по формированию позиции обеспечивает
                актуальность всесторонне сбалансированных нововведений. Задача
                организации, в особенности же постоянный количественный рост и
                сфера нашей активности обеспечивает широкому кругу специалистов
                участие в формировании всесторонне сбалансированных
                нововведений. Равным образом реализация намеченного плана
                развития требует от нас анализа дальнейших направлений развитая
                системы массового участия? Соображения высшего порядка, а также
                постоянный количественный рост и сфера нашей активности влечет
                за собой процесс внедрения и модернизации позиций, занимаемых
                участниками в отношении поставленных задач!
              </p>
            </div>
            <button
              className={`${styles.program__card_btn} ${styles['program__card_btn-center']}`}
              type='button'
              onClick={handleClick}
            >
              Записаться на тренинг
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
          </Modal.Body>
        </>
      );
    case 3:
      return (
        <>
          <Modal.Header>
            <div className={styles['program__modal-header']}>
              <div className={styles['program__modal-row']}>
                <img src={Image2} alt='Картинка' />
                <span className={styles['program__modal-title']}>
                  Работа с индивидуальным планом развития
                </span>
              </div>
              <ButtonClose onClick={onClick} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className={styles['program__modal-content']}>
              <p className={styles['program__modal-text']}>
                Разнообразный и богатый опыт социально-экономическое развитие
                играет важную роль в формировании всесторонне сбалансированных
                нововведений! Задача организации, в особенности же выбранный
                нами инновационный путь играет важную роль в формировании
                экономической целесообразности принимаемых решений! Повседневная
                практика показывает, что рамки и место обучения кадров влечет за
                собой процесс внедрения и модернизации дальнейших направлений
                развитая системы массового участия. Дорогие друзья, начало
                повседневной работы по формированию позиции обеспечивает
                актуальность всесторонне сбалансированных нововведений. Задача
                организации, в особенности же постоянный количественный рост и
                сфера нашей активности обеспечивает широкому кругу специалистов
                участие в формировании всесторонне сбалансированных
                нововведений. Равным образом реализация намеченного плана
                развития требует от нас анализа дальнейших направлений развитая
                системы массового участия? Соображения высшего порядка, а также
                постоянный количественный рост и сфера нашей активности влечет
                за собой процесс внедрения и модернизации позиций, занимаемых
                участниками в отношении поставленных задач!
              </p>
            </div>
            <button
              className={`${styles.program__card_btn} ${styles['program__card_btn-center']}`}
              type='button'
              onClick={handleClick}
            >
              скачать план развития
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
          </Modal.Body>
        </>
      );
    case 4:
      return (
        <>
          <Modal.Header>
            <div className={styles['program__modal-header']}>
              <div className={styles['program__modal-row']}>
                <img src={Image4} alt='Картинка' />
                <span className={styles['program__modal-title']}>
                  Сертификация на функционального тренера
                </span>
              </div>
              <ButtonClose onClick={onClick} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className={styles['program__modal-content']}>
              <p className={styles['program__modal-text']}>
                Разнообразный и богатый опыт социально-экономическое развитие
                играет важную роль в формировании всесторонне сбалансированных
                нововведений! Задача организации, в особенности же выбранный
                нами инновационный путь играет важную роль в формировании
                экономической целесообразности принимаемых решений! Повседневная
                практика показывает, что рамки и место обучения кадров влечет за
                собой процесс внедрения и модернизации дальнейших направлений
                развитая системы массового участия. Дорогие друзья, начало
                повседневной работы по формированию позиции обеспечивает
                актуальность всесторонне сбалансированных нововведений. Задача
                организации, в особенности же постоянный количественный рост и
                сфера нашей активности обеспечивает широкому кругу специалистов
                участие в формировании всесторонне сбалансированных
                нововведений. Равным образом реализация намеченного плана
                развития требует от нас анализа дальнейших направлений развитая
                системы массового участия? Соображения высшего порядка, а также
                постоянный количественный рост и сфера нашей активности влечет
                за собой процесс внедрения и модернизации позиций, занимаемых
                участниками в отношении поставленных задач!
              </p>
            </div>
            <button
              className={`${styles.program__card_btn} ${styles['program__card_btn-center']}`}
              type='button'
              onClick={handleClick}
            >
              Записаться на сертификацию
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
          </Modal.Body>
        </>
      );
    default:
      return <></>;
  }
};

export default ModalContent;
