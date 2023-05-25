import { Dispatch, SetStateAction } from 'react';
import Styles from './Dialog.module.css';

type Props = {
  tel: string;
  setCurrDialog: Dispatch<SetStateAction<string>>;
  isChecked: boolean;
};

export default function Dialog({ tel, setCurrDialog, isChecked }: Props) {
  const setCurr = () => {
    setCurrDialog(tel);
  };

  return (
    <li className={`${Styles.cnt} ${isChecked && Styles.cntChecked}`} onClick={setCurr}>
      <p className={Styles.tel}>{tel}</p>
    </li>
  );
}
