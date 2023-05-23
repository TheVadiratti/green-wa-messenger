import Styles from './ChatInfo.module.css';

type Props = {
  currDialog: string;
};

export default function ChatInfo({ currDialog }: Props) {
  return (
    <div className={Styles.info}>
      <p className={Styles.chatName}>{currDialog && `Чат с ${currDialog}`}</p>
    </div>
  );
}
