import Styles from './Dialog.module.css';

type Props = {
  isChecked: boolean;
};

export default function Dialog({ isChecked }: Props) {
  return (
    <li className={`${Styles.cnt} ${isChecked && Styles.cntChecked}`}>
      <p className={Styles.tel}>79122223505</p>
    </li>
  );
}
