import Modal, { ButtonClose } from 'components/Modal';
import Image1 from 'assets/svg/Program/card_1.svg';
import Image2 from 'assets/svg/Program/card_2.svg';
import Image3 from 'assets/svg/Program/card_3.svg';
import Image4 from 'assets/svg/Program/card_4.svg';
import styles from './styles.module.scss';

type Props = {
  id: number | null;
  onClick: () => void;
};

const ModalContent = ({ id, onClick }: Props) => {
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
          <Modal.Body>asdas</Modal.Body>
        </>
      );
    case 2:
      return (
        <div className={styles['factors-internal__modal-content']}>
          <p className={basicStyles['basic-text']}>
            Эмоциональные факторы — это внимание к внутренним переживаниям. При
            отсутствии душевного равновесия фокус нашего внутреннего внимания
            переключается на переживания по поводу наших проблем и способность
            сосредотачивать внимание на задаче значительно снижается.
          </p>
          <p className={basicStyles['basic-text']}>
            <strong>Как контролировать</strong>: попробуйте снизить градус
            эмоций и отрегулировать их – сделайте{' '}
            <a
              target='_blank'
              className={basicStyles['basic-link-text']}
              href='https://lifehacker.ru/6-dykhatelnykh-tekhnik-kotorye-pomogayut-rasslabitsya-za-10-minut/ '
            >
              дыхательную технику
            </a>
            , выговоритесь или дайте выход эмоциям.
          </p>
          <p className={styles['factors-internal__modal-content--footer']}>
            эмоциональные внутренние факторы
          </p>
        </div>
      );
    case 3:
      return (
        <div className={styles['factors-internal__modal-content']}>
          <p className={basicStyles['basic-text']}>
            Самый распространенный когнитивный «отвлекатор» — это наш внутренний
            голос, который тревожится и критикует. Второй когнитивный
            «отвлекатор» — это каша из мыслей, идей и обрывочных воспоминаний. А
            еще мешает беспорядочность мышления — когда на работе мы думаем об
            отпуске, а в отпуске о работе. Текущие задачи становятся
            неинтересными, вы смещаете фокус вперед, в будущее.
          </p>
          <p className={basicStyles['basic-text']}>
            <strong>Как контролировать</strong>: попробуйте «выгружать» мысли,
            которые вас отвлекают. Сформулируйте, что вы хотите обдумать или что
            вас беспокоит, и запишите в специальный блокнот. Дайте себе
            установку «Я вернусь к этой мысли позже» и обдумайте после
            завершения задачи.
          </p>
          <p className={styles['factors-internal__modal-content--footer']}>
            когнитивные внутренние факторы
          </p>
        </div>
      );
    default:
      return <></>;
  }
};

export default ModalContent;
