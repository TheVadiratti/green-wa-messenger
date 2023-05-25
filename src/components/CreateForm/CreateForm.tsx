import {
  useState,
  Dispatch,
  SetStateAction,
  FormEventHandler,
} from 'react';
import Styles from './CreateForm.module.css';
import { TDialog } from '../../types';

type Props = {
  dialogs: TDialog[];
  addDialog: Dispatch<SetStateAction<TDialog[]>>;
  setCurrentDialog: Dispatch<SetStateAction<string>>;
};

export default function CreateForm({
  dialogs,
  addDialog,
  setCurrentDialog,
}: Props) {
  const [telValue, setTelValue] = useState('');

  const createDialog: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    addDialog([{ tel: telValue }, ...dialogs]);
    setCurrentDialog(telValue);
    setTelValue('');
  };

  return (
    <form className={Styles.form} onSubmit={createDialog}>
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
        disabled={telValue.length !== 11 || dialogs.some((item) => item.tel === telValue)}
        className={Styles.submitBtn}
      >Создать</button>
    </form>
  );
}
