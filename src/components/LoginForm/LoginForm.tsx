import { useState, FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './LoginForm.module.css';
import { API_URL } from '../../utils/constants';
import { checkResponse } from '../../utils/utils';

export default function LoginForm() {
  const [idValue, setIdValue] = useState('');
  const [tokenValue, setTokenValue] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const router = useRouter();

  const errText = 'Пользователь не существует или не авторизован.';

  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/waInstance${idValue}/getStateInstance/${tokenValue}`)
      .then((res) => checkResponse(res, errText))
      .then((res) => {
        if (res.stateInstance === 'authorized') {
          sessionStorage.setItem('idInstance', idValue);
          sessionStorage.setItem('apiTokenInstance', tokenValue);
          return router.push('/');
        }
        return Promise.reject(new Error(errText));
      })
      .catch((err) => setErrMessage(err.message));
  };

  return (
    <form className={Styles.form} onSubmit={submitForm}>
      <label htmlFor='idInstance' className={Styles.label}>
        idInstance
        <input
          type='text'
          name='idInstance'
          onChange={(e) => setIdValue(e.target.value)}
          value={idValue}
          className={Styles.input}
          required
        />
      </label>

      <label htmlFor='apiTokenInstance' className={Styles.label}>
        apiTokenInstance
        <input
          type='text'
          name='apiTokenInstance'
          onChange={(e) => setTokenValue(e.target.value)}
          value={tokenValue}
          className={Styles.input}
          required
        />
      </label>

      <button type='submit' className={Styles.button}>Войти</button>

      <p className={Styles.err}>{errMessage}</p>
    </form>
  );
}
