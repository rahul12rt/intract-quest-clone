import Image from "next/image";
import styles from "./index.module.css";
import { useRouter, useSearchParams } from "next/navigation";
export default function DegenGlossary() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const newParam = searchParam.get("tab");
  const toggleActive = (value) => {
    router.push(`?tab=${value}`, undefined, { shallow: true });
  };
  return (
    <div className="mainContainer">
      <div className="heading">
        <h6>Crypto Dictionary</h6>
        <p>Your one-stop to catch up on all crypto terms</p>
        <div className={styles.bannerWrap}>
          <div className={styles.banner}>
            <div className={styles.rellWrapper}>
              <Image
                src="/icons/reel-video.svg"
                width={22}
                height={22}
                priority
              />
            </div>
            <div className={styles.describe}>
              <h5>Web3 + Degen Glossary</h5>
              <h6>Your own crypto dictionary</h6>
            </div>
            <img src="/banner.svg" className="layerBlur" />
          </div>
        </div>
      </div>
      <div style={{ height: "20vh" }}></div>
      <div className={styles.switchContainer}>
        <div className={styles.switch}>
          <div
            className={`${styles.tabSwitch} ${
              newParam == "essentials" ? styles.active : ""
            }`}
            onClick={() => toggleActive("essentials")}
          >
            Essentials
          </div>
          <div
            className={`${styles.tabSwitch} ${
              newParam == "alpha-hub" ? styles.active : ""
            }`}
            onClick={() => toggleActive("alpha-hub")}
          >
            Alpha Hub
          </div>
        </div>
      </div>
    </div>
  );
}
