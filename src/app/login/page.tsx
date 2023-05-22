import Styles from './page.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <main className={Styles.main}>
      <h2>Вход</h2>
      <LoginForm />
    </main>
  );
}
