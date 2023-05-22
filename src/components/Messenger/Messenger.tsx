import Styles from './Messenger.module.css';
import CreateForm from '../CreateForm/CreateForm';

export default function Messenger() {
  return (
    <div className={Styles.window}>
      <div className={Styles.dialogsList}>
        <CreateForm />
      </div>
      <div className={Styles.dialog}></div>
    </div>
  );
}
