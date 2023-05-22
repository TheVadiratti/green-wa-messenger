'use client';

import Messenger from '../components/Messenger/Messenger';
import Styles from './page.module.css';

export default function Home() {
  return (
    <main className={Styles.main}>
      <Messenger />
    </main>
  );
}
