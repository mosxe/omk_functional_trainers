import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Question from './Question';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { ResponseForm } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: ResponseForm;
  isLoading: boolean;
  isError: boolean;
};
const Form = ({ data, isLoading, isError }: Props) => {
  const methods = useForm({
    mode: 'onChange'
  });

  console.log(methods.formState.isDirty);
  console.log(methods.formState.isValid);

  const onSubmit: SubmitHandler<Record<string, string | boolean>> = (data) =>
    console.log(data);

  if (isLoading) {
    return (
      <form className={styles.form}>
        <div className={styles.form__header}>
          <h2>Анкета</h2>
        </div>
        <div className={styles.form__wrapper}>
          <Loader />
        </div>
      </form>
    );
  }

  if (isError || data.isError) {
    return (
      <form>
        <div className={styles.form__header}>
          <h2>Анкета</h2>
        </div>
        <div className={styles.form__wrapper}>
          <Error />
        </div>
      </form>
    );
  }

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={styles.form__header}>
          <h2>Анкета</h2>
        </div>
        <div className={styles.form__text}>
          Уважаемый коллега, ответьте на 5 вопросов - так нам проще будет
          определиться с Вашими ожиданиями от преподавательской деятельности.
        </div>
        {data.data.map((item, index) => (
          <Question data={item} index={index} key={index} />
        ))}
        <button
          type='submit'
          className={styles.form__btn}
          disabled={methods.formState.isValid}
        >
          Отправить ответы
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
