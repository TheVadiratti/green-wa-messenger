import { useState } from 'react';
import Styles from './Messenger.module.css';
import CreateForm from '../CreateForm/CreateForm';
import Dialog from '../Dialog/Dialog';
import { TDialog } from '../../types';

export default function Messenger() {
  const [dialogs, setDialogs] = useState<TDialog[]>([]);
  const [currDialog, setCurrDialog] = useState('');

  return (
    <div className={Styles.window}>
      <CreateForm dialogs={dialogs} addDialog={setDialogs} setCurrentDialog={setCurrDialog} />
      <div></div>
      <ul className={Styles.dialogsList}>
        {dialogs.map((dialog, i) => (
          <Dialog
            tel={dialog.tel}
            isChecked={dialog.tel === currDialog}
            setCurrDialog={setCurrDialog}
            key={i}
          />
        ))}
      </ul>
      <div className={Styles.chat}>
      </div>
    </div>
  );
}
