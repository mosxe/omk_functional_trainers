﻿import { useFormContext, Controller } from 'react-hook-form';
import Checkbox from 'components/Checkbox';
import TextArea from 'components/TextArea';
import { Poll } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: Poll;
  index: number;
};
const Question = ({ data, index }: Props) => {
  const { register, control } = useFormContext();

  return (
    <div className={styles.form__item}>
      <div className={styles.form__item_header}>Вопрос {index + 1}</div>
      <div className={styles.form__item_wrapper}>
        <div>
          <div className={styles.form__item_text}>{data.title}</div>
          {data.type === 'select' && (
            <div className={styles.form__item_help}>
              (выделите один или несколько пунктов)
            </div>
          )}
        </div>
        <div className={styles.form__item_container}>
          {data.type === 'text' && (
            <Controller
              control={control}
              name={data.id}
              defaultValue=''
              render={({ field: { onChange, value } }) => (
                <TextArea
                  {...(register(data.id), { required: true })}
                  value={value}
                  onChange={onChange}
                  placeholder='Введите текст сообщения...'
                />
              )}
            />
          )}
          {data.type === 'select' &&
            data.entries.map((entry, indexEntry) => {
              return (
                <Controller
                  key={entry.id}
                  control={control}
                  name={`${data.id}.${indexEntry}._${entry.id}`}
                  rules={{ required: true }}
                  defaultValue={false}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      id={`${data.id}.${indexEntry}._${entry.id}`}
                      checked={value}
                      label={entry.title}
                      onChange={onChange}
                    />
                  )}
                />
              );
            })}
          {data.type === 'select' && data.is_comment && (
            <>
              <Controller
                control={control}
                name={`${data.id}.${index}.other`}
                rules={{ required: true }}
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    id={`${data.id}_other`}
                    checked={value}
                    label='другое'
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={`${data.id}.${index}.text`}
                rules={{ required: true }}
                defaultValue=''
                render={({ field: { onChange, value } }) => (
                  <TextArea
                    {...register(`${data.id}.${index}.text`)}
                    value={value}
                    onChange={onChange}
                    style={{ marginTop: '8px' }}
                    placeholder='Здесь укажите, что именно...'
                  />
                )}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;