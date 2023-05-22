import Styles from './Messenger.module.css';
import CreateForm from '../CreateForm/CreateForm';
import Dialog from '../Dialog/Dialog';

export default function Messenger() {
  return (
    <div className={Styles.window}>
      <CreateForm />
      <div></div>
      <ul className={Styles.dialogsList}>
          <Dialog isChecked={false} />
      </ul>
      <div className={Styles.chat}>
      </div>
    </div>
  );
}
