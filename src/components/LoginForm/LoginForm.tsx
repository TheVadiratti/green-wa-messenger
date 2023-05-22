import Styles from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form className={Styles.form}>
      <label htmlFor='idInstance' className={Styles.label}>
        idInstance
        <input type='text' name='idInstance' className={Styles.input}></input>
      </label>

      <label htmlFor='apiTokenInstance' className={Styles.label}>
        apiTokenInstance
        <input type='text' name='apiTokenInstance' className={Styles.input}></input>
      </label>

      <button type='submit' className={Styles.button}>Войти</button>
    </form>
  );
}
