import { TMessage } from '../../types';
import Styles from './Message.module.css';

export default function Message({ text, owner, currDialog }: TMessage) {
  return (
    <div className={Styles.cnt}>
      <div className={`${Styles.textCnt} ${owner === 'me' ? Styles.textCntMy : Styles.textCntNotMy}`}>
        <p className={Styles.text}>{text}</p>
        <p className={Styles.owner}>{owner === 'me' ? 'Я' : currDialog}</p>
      </div>
    </div>
  );
}
