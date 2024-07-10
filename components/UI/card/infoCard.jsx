import styles from "./index.module.css";
export default function InfoCard({ data }) {
  return (
    <div class={styles.infoCard}>
      <div class={styles.infoContainer}>
        <div class={styles.section}>
          <img src={data?.author} alt="" class={styles.rewardImage} />
        </div>
        <div class={styles.lockWrapper}>
          <img src="/icons/lock-icon.svg" alt="lock icon" />
        </div>
      </div>
      <h6 class={styles.name}> {data?.name}</h6>
      <p
        class={styles.desc}
        dangerouslySetInnerHTML={{ __html: data?.description }}
      />

      <p class={styles.claimBtn} disabled={true}>
        Claim
      </p>
    </div>
  );
}
