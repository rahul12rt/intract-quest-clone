import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";
export default function Card({ data, id }) {
  const [iframe, setIframe] = useState(false);
  const handleVideo = () => {
    setIframe(!iframe);
  };
  return (
    <div className={styles.cardWrapper}>
      {!iframe ? (
        <div
          className={styles.card}
          key={id}
          style={{ backgroundImage: `url(${data?.bgImage})` }}
          onClick={handleVideo}
        >
          <div className={styles.overLay} />
          <div className={styles.rellWrapper}>
            <Image
              src="/icons/reel-video.svg"
              width={22}
              height={22}
              priority
            />
          </div>
          <div className={styles.videoWrapper}>
            <Image src="/icons/play.png" width={28} height={28} priority />
          </div>
          <img src={data?.bgImage} className="layerBlur" />
          <p>{data?.title}</p>
        </div>
      ) : (
        <div className={styles.iframeWrap}>
          <iframe
            width={"100%"}
            height={"100%"}
            src={data?.youtubeUrl}
          ></iframe>
          <div className={styles.close} onClick={handleVideo}>
            <Image src="/icons/close.svg" width={16} height={16} priority />
          </div>
        </div>
      )}
    </div>
  );
}
