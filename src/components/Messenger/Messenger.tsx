import { useState } from 'react';
import Styles from './Messenger.module.css';
import CreateForm from '../CreateForm/CreateForm';
import Dialog from '../Dialog/Dialog';
import { TDialog } from '../../types';
import ChatInfo from '../ChatInfo/ChatInfo';
import Chat from '../Chat/Chat';

export default function Messenger() {
  const [dialogs, setDialogs] = useState<TDialog[]>([]);
  const [currDialog, setCurrDialog] = useState('');

  return (
    <div className={Styles.window}>
      <CreateForm
        dialogs={dialogs}
        addDialog={setDialogs}
        setCurrentDialog={setCurrDialog}
      />
      <ChatInfo currDialog={currDialog} />
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
      <Chat
        currDialog={currDialog}
      />
    </div>
  );
}
