import {
  useState,
  FormEventHandler,
} from 'react';
import Styles from './Chat.module.css';
import API_URL from '../../utils/constants';
import checkResponse from '../../utils/utils';
import ChatMessages from '../ChatMessages/ChatMessages';
import { TMessage } from '../../types';

type Props = {
  currDialog: string;
};

export default function Chat({ currDialog }: Props) {
  const [messageValue, setMessageValue] = useState('');
  const idInstance = sessionStorage.getItem('idInstance');
  const apiTokenInstance = sessionStorage.getItem('apiTokenInstance');
  const [messages, setMessages] = useState<TMessage[]>([]);

  const sendMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setMessageValue('');

    fetch(`${API_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
      method: 'POST',
      body: JSON.stringify({
        chatId: `${currDialog}@c.us`,
        message: messageValue,
      }),
    })
      .then((res) => checkResponse(res, 'Не удалось отправить сообщение.'))
      .then(() => {
        const newMessages = messages;
        messages.unshift({ text: messageValue, owner: 'me' });
        setMessages(newMessages);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.chat}>
      {currDialog && (
        <>
          <ChatMessages
            currDialog={currDialog}
            messages={messages}
            setMessages={setMessages}
          />
          <form className={Styles.form} onSubmit={sendMessage}>
            <input
              type='text'
              placeholder='Type a message'
              onChange={(e) => setMessageValue(e.target.value)}
              value={messageValue}
              className={Styles.input}
            />
            <button
              type='submit'
              disabled={messageValue.length === 0}
              className={Styles.submitBtn}
            >
              Отправить
            </button>
          </form>
        </>
      )}
    </div>
  );
}
