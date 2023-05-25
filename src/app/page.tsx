'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Messenger from '../components/Messenger/Messenger';
import Styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const apiTokenInstance = sessionStorage.getItem('apiTokenInstance') || null;

    if (!apiTokenInstance) {
      router.push('/login');
    }
  }, []);

  return (
    <main className={Styles.main}>
      <Messenger />
    </main>
  );
}
