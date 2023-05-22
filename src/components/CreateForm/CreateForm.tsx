import { useState } from 'react';
import Styles from './CreateForm.module.css';

export default function CreateForm() {
  const [telValue, setTelValue] = useState('');

  return (
    <form className={Styles.form}>
      <label htmlFor='telephone' className={Styles.label}>
        Введите номер телефона
        <input
          type='tel'
          name='telephone'
          min={11}
          max={11}
          placeholder='например 7xxxxxxxxxx'
          onChange={(e) => setTelValue(e.target.value)}
          value={telValue}
          className={Styles.input}
        />
      </label>

      <button
        type='submit'
        disabled={telValue.length !== 11}
        className={Styles.submitBtn}
      >Создать</button>
    </form>
  );
}
