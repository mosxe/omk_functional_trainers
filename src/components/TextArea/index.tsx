import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const TextArea = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>('');

  const hadnleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  return (
    <textarea
      className={styles.textarea}
      ref={textareaRef}
      value={value}
      onChange={hadnleChange}
      placeholder='Введите текст сообщения...'
      rows={1}
    />
  );
};

export default TextArea;
