import styles from './styles.module.scss';

const Criteria = () => {
  return (
    <section className={styles.criteria}>
      <div className={styles.criteria__wrapper}>
        <h2 className={styles.criteria__title}>
          <span className={styles.criteria__title_red}>Кто может</span>{' '}
          преподавать и стать функциональным тренером?
        </h2>
        <div className={styles.criteria__subtitle}>Входные критерии просты</div>
        <div className={styles.criteria__container}>
          <div className={styles.criteria__card}>
            <div className={styles.criteria__card_title}>
              Уже <span className={styles.criteria__text_red}>эксперт</span> в
              своем направлении
            </div>
            <ul>
              <li>
                Образование{' '}
                <span className={styles.criteria__text}>
                  не ниже средне-профессионального в рамках текущей профессии и
                </span>{' '}
                опыт работы от года{' '}
                <span className={styles.criteria__text}>в рамках ОМК.</span>
              </li>
              <li>
                <span className={styles.criteria__text}>
                  По рекомендации руководителя готовы рассмотреть и кандидатов с
                  иным профилем образования, но имеющих
                </span>{' '}
                высокий уровень экспертизы в текущей или смежной профессии{' '}
                <span className={styles.criteria__text}>
                  благодаря большому релевантному опыту работы на ОМК.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.criteria__card}>
            <div className={styles.criteria__card_title}>
              Готов выделять время на обучение других
            </div>
            <div className={styles.criteria__text}>
              <span className={styles.criteria__text_black}>
                Готов выделять время на обучение других,
              </span>{' '}
              а руководитель готов к тому, что часть времени сотрудник будет
              посвящать время обучению и развитию себя как
              тренера/преподавателя. Программы обучения имеют разную
              длительность: в среднем от недели до месяца с вовлечением
              преподавателя/тренера до 50% времени ежедневно. Частота
              привлечения преподавателя/тренера обязательно обсуждается и
              согласуется с руководителем.
            </div>
          </div>
          <div className={styles.criteria__card}>
            <div className={styles.criteria__card_title}>
              Готов делиться опытом
            </div>
            <div className={styles.criteria__text}>
              Готов делиться опытом и легко{' '}
              <span className={styles.criteria__text_black}>
                находит контакт с людьми
              </span>
              , способен объяснить доступно, обучить другого.
            </div>
          </div>
          <div className={styles.criteria__card}>
            <div className={styles.criteria__card_title}>
              Имеет рекомендации
            </div>
            <div className={styles.criteria__text}>
              Руководитель готов дать рекомендации на сотрудника:{' '}
              <span className={styles.criteria__text_black}>
                по экспертной части и в плане общего соответствия модели
                компетенций
              </span>{' '}
              сотрудника ОМК.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
