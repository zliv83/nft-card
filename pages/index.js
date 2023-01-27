import Head from 'next/head';

import styles from './Home.module.scss';
import NftCard from '../components/NftCard';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
      <NftCard />
    </div>
  );
}
