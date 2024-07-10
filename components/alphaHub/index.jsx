"use client";
import Image from "next/image";
import styles from "./index.module.css";
export default function Alphahub({ data }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.essentials}>
          <div className={styles.inner}>
            <Image
              width={235}
              height={100}
              priority
              src="/academy-animated-logo.gif"
              alt="intract-academy-bg"
            />
            <Image
              width={235}
              height={100}
              priority
              src="/for-degens.svg"
              alt="intract-academy-bg"
              className={styles.degens}
            />
          </div>
        </div>
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.heading}>
          <p class="_alpha_hub_heading_etypm_7">Recommended Narratives</p>
          <h6>See all</h6>
        </div>
        <div className={styles.body}>
          {data?.map((res, id) => {
            return (
              <div className={styles.smallContainer} key={id}>
                <div className={styles.smallBanner}>
                  <img src={res?.logo} width="114" height="164" />
                  <div className={styles.quest}>{res?.questValue} Quests</div>
                </div>
                <div className={styles.smallInfoContaienr}>
                  <div className={styles.title}>{res?.title}</div>
                  <div className={styles.desc}>{res?.desc}</div>
                  <hr className="hr" />
                  <div className={styles.count}>
                    <img
                      src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                      alt=""
                      width="18"
                      height="16"
                    />
                    390 XPs
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
