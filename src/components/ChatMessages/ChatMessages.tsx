import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { TMessage } from '../../types';
import Styles from './ChatMessages.module.css';
import Message from '../Message/Message';
import receiveNotification from '../../utils/api';
import { API_URL } from '../../utils/constants';

type Props = {
  currDialog: string;
  messages: TMessage[];
  setMessages: Dispatch<SetStateAction<TMessage[]>>;
};

export default function ChatMessages({ currDialog, messages, setMessages }: Props) {
  const [isReload, setReload] = useState(false);

  const reload = () => {
    setReload(!isReload);
  };

  useEffect(() => {
    const idInstance = sessionStorage.getItem('idInstance');
    const apiTokenInstance = sessionStorage.getItem('apiTokenInstance');

    if (idInstance && apiTokenInstance) {
      receiveNotification(
        API_URL,
        idInstance,
        apiTokenInstance,
        currDialog,
        messages,
        setMessages,
        reload,
      );
    }
  }, [isReload]);

  return (
    <div className={Styles.cnt}>
      {messages.map((item, i) => (
        <Message text={item.text} owner={item.owner} currDialog={currDialog} key={i} />
      ))}
    </div>
  );
}
