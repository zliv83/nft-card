import Image from 'next/image';

import styles from './NftCard.module.scss';

export default function NftCard() {
  return (
    <div className={styles.nftCard}>
      <div className={styles.cardContent}>
        <div className={styles.image} />
        <div className={styles.content}>
          <div className={styles.title}>Equilibrium #3429</div>
          <div className={styles.subTitle}>
            Our Equilibrium collection promotes balance and calm.
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.ethereum}>
              <Image
                alt="ethereum"
                src="/icon-ethereum.svg"
                width={11}
                height={18}
              />
              <span className={styles.text}>0.041 ETH</span>
            </div>
            <div className={styles.time}>
              <Image src="/icon-clock.svg" width={16} height={16} />
              <span className={styles.timeText}>3 days left</span>
            </div>
          </div>
          <hr className={styles.divider} />
          <div className={styles.bottom}>
            <div className={styles.avatar} />
            <div className={styles.textContainer}>
              <span className={styles.firstText}>Creation of</span>
              <span className={styles.secondText}>Jules Wyvern</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
