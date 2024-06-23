import Modal, { ButtonClose } from 'components/Modal';
import Image1 from 'assets/svg/Program/card_1.svg';
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
                <strong>Формат проведения диагностики</strong> следующий:
                кандидат в преподаватели готовит короткий обучающий блок по
                теме, в которой он чувствует себя экспертом, и проводит его
                онлайн для группы представителей корпоративного университета. В
                группу входят тренеры с большим тренерским стажем, методологи по
                разработке программ.
              </p>
              <p className={styles['program__modal-text']}>
                По завершении обучающего блока куратор программы развития
                преподавателей возвращается с развернутой обратной связью к
                кандидату на предмет сильных сторон и зон развития навыков
                обучения.
              </p>
              <p className={styles['program__modal-text']}>
                Сутью диагностики является именно определение сильных сторон
                кандидата в преподаватели и областей для развития тренерских
                навыков.
              </p>
              <br></br>
              <p className={styles['program__modal-text']}>
                Как подготовиться к диагностике. При подготовке блока обучения к
                диагностике важно выбрать тему, в которой Вы чувствуете себя
                экспертом и ответить себе на вопросы:
              </p>
              <p className={styles['program__modal-text']}>
                <strong>- Чему</strong> должны люди <strong>научиться</strong>,
                посетив блок обучения?
              </p>
              <p className={styles['program__modal-text']}>
                <strong>- О чем</strong> Вы должны <strong>рассказать</strong>,
                чтобы люди научились?
              </p>
              <p className={styles['program__modal-text']}>
                <strong>- Как Вы проверите</strong>, что люди научились?
              </p>
              <p className={styles['program__modal-text']}>
                Опираясь на ответы подготовьте обучающий блок на 30 минут
                максимум. В эти 30 минут должны входить как представление
                тренера и целей обучения, так и финальные вопросы по проверке
                знаний и завершение обучающего блока.
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
                Тренинг для тренеров и преподавателей по развитию навыков
                обучения взрослых. Проводится с мини-группах по 8-10 человек.
                Проводит тренинг внешний эксперт с тренерским стажем в 25+ лет.
                Тренинговые дни имеют недельные перерывы для того, чтобы группа
                могла отработать полученные знания на практике и не отрываться
                от работы на три дня подряд.
              </p>
              <br></br>
              <p className={styles['program__modal-text']}>Цели тренинга</p>
              <ol>
                <li className={styles['program__modal-text']}>
                  Формирование методического тренерского инструментария и
                  систематизация теоретических представлений об обучении
                  взрослых.
                </li>
                <li className={styles['program__modal-text']}>
                  Совершенствование презентационных навыков преподавателей и
                  функциональных тренеров.
                </li>
                <li className={styles['program__modal-text']}>
                  Развитие навыка работы с групповой динамикой и сложными
                  участниками.
                </li>
              </ol>
              <p className={styles['program__modal-text']}>
                Соотношение теоретического и практического блоков, планируется
                из расчета 30%(теория) – 70%
              </p>
              <p className={styles['program__modal-text']}>
                В рамках тренинга участники осваивают темы:
              </p>
              <ul>
                <li className={styles['program__modal-text']}>
                  Принципы обучения взрослых;
                </li>
                <li className={styles['program__modal-text']}>
                  Структура обучающей программы;
                </li>
                <li className={styles['program__modal-text']}>
                  Навыки успешной презентации;
                </li>
                <li className={styles['program__modal-text']}>
                  Способы проверки освоения материала;
                </li>
                <li className={styles['program__modal-text']}>
                  Вовлечение участников. Работа со сложными участниками
                </li>
              </ul>
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
                Что дает сертификация:
              </p>
              <ol>
                <li className={styles['program__modal-text']}>
                  повышающий коэффициент при оплате
                </li>
                <li className={styles['program__modal-text']}>
                  приоритет при выборе из пула преподавателей, проводящих
                  конкретное обучение
                </li>
                <li className={styles['program__modal-text']}>
                  детальную обратную связь об уровне развития тренерских
                  навыков.
                </li>
              </ol>
              <br></br>
              <p className={styles['program__modal-text']}>
                Цели сертификации:
              </p>
              <ol>
                <li className={styles['program__modal-text']}>
                  объективная оценка компетенций тренера
                </li>
                <li className={styles['program__modal-text']}>
                  развитие тренерских навыков по результатам обратной связи
                </li>
                <li className={styles['program__modal-text']}>
                  подтверждение статуса тренера внутри компании
                </li>
              </ol>
              <br></br>
              <p className={styles['program__modal-text']}>
                Виды сертификации в корпоративном университете:
              </p>
              <ul>
                <li className={styles['program__modal-text']}>
                  сертификация на функционального тренера ОМК 1-3 уровней.
                </li>
              </ul>
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
