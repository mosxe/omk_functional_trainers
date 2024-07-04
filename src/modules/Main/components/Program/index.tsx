import Card from './Card';
import Image1 from 'assets/svg/Program/card_1.svg';
import Image2 from 'assets/svg/Program/card_2.svg';
import Image3 from 'assets/svg/Program/card_3.svg';
import Image4 from 'assets/svg/Program/card_4.svg';
import { Program as IProgram } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IProgram[];
};

const Program = ({ data }: Props) => {
  return (
    <section className={styles.program}>
      <div className={styles.program__wrapper}>
        <div className={styles.program__row}>
          <div className={styles.program__content}>
            <h2 className={styles.program__title}>
              <span className={styles.program__title_red}>
                Программа развития
              </span>{' '}
              преподавателей и тренеров
            </h2>
          </div>
          <div
            className={`${styles.program__content} ${styles.program__content_end}`}
          >
            <span className={styles.program__subtitle}>
              или как стать функциональным тренером
            </span>
          </div>
        </div>
        <div className={styles.program__row}>
          <div className={styles.program__content}>
            <Card
              data={data}
              index={1}
              type='diagnostics'
              title='Диагностика'
              text='Диагностика базовых навыков передачи информации позволяет
                    понять, на чем необходимо будет сфокусироваться при развитии
                    тренерских навыков. Для новых кандидатов в преподаватели
                    диагностика может стать ответом на вопрос «действительно ли
                    я готов и хочу обучать других?».'
              image={Image1}
            />
          </div>
          <div className={styles.program__content}>
            <Card
              data={data}
              index={2}
              type='training'
              title='Трехдневный тренинг'
              text='Тренинг для тренеров и преподавателей по развитию навыков
                    обучения взрослых. Проводится в мини-группах по 8-10
                    человек. Проводит тренинг внешний эксперт с тренерским
                    стажем в 25+ лет. Тренинговые дни имеют недельные перерывы
                    для того, чтобы группа могла отработать полученные знания на
                    практике и не отрываться от работы на три дня подряд.'
              image={Image3}
            />
          </div>
        </div>
        <div className={styles.program__row}>
          <div className={styles.program__content}>
            <Card
              data={data}
              type='development_plan'
              index={4}
              title='Работа с индивидуальным планом развития'
              text='Самым важным в процессе развития любого навыка является
                    практика и самостоятельная работа. По итогам тренинга мы
                    предлагаем нашим участникам выбрать 1-3 компетенции/навыка,
                    составить индивидуальный план развития и в ходе проведения
                    собственных обучающих программ развивать эти навыки в
                    сопровождении опытного куратора от корпоративного
                    университета.'
              image={Image2}
            />
          </div>
          <div className={styles.program__content}>
            <Card
              data={data}
              index={3}
              type='certification'
              title='Сертификация на функционального тренера'
              text='Сертификация на функционального тренера подтверждает
                    владение навыками проведения обучения высокого уровня
                    качества.'
              image={Image4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
