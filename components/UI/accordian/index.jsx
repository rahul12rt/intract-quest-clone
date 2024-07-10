import Image from "next/image";
import styles from "./indes.module.css";
export default function Accordian({ data }) {
  return (
    <div className={styles.layer}>
      <div className={styles.header}>
        <div className={styles.headInfo}>
          <div className={styles.iconCollapse}>
            <Image src="/icons/collapse.png" width={24} height={24} priority />
          </div>
          <div class={styles.headerImage}>
            <img src={data?.image} alt="" />
            <div class={styles.quest}>{data?.quests} Quests</div>
          </div>
          <div class={styles.info}>
            <div class={styles.infoTitle}>{data?.title}</div>
            <div class={styles.subdescription}>{data?.description}</div>
            <hr class={styles.hr} />
            <div class={styles.rewards}>
              <div class={styles.count}>
                <img
                  src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                  alt=""
                  width="18"
                  height="16"
                />
                <p>{data?.xps} XPs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {data?.tasks?.map((res, id) => {
          return (
            <div class={styles.questContainer} key={id}>
              <div class={styles.questImage}>
                <img src={res.avatar} alt={res.name} />
              </div>
              <div class={styles.author}>
                <p class={styles.name}>{res.name}</p>
                <hr class={styles.hr} />
                <div class={styles.questInfo}>
                  <p class={styles.questTasks}>{res.task} Tasks</p>
                  <div style={{ width: "100%" }}>
                    <div class={styles.progressBarContainer}>
                      <div className={styles.bar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
