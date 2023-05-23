import { useState } from 'react';
import Styles from './Chat.module.css';

export default function Chat() {
  const [messageValue, setMessageValue] = useState('');

  return (
    <div className={Styles.chat}>
      <form className={Styles.form}>
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
        >Отправить</button>
      </form>
    </div>
  );
}
