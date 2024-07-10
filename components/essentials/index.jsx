"use client";
import Image from "next/image";
import styles from "./index.module.css";
import Accordian from "../UI/accordian";
import {
  basicCryptoData,
  infoData1,
  airDropData,
  infoData2,
} from "../../utils/data";
import InfoCard from "../UI/card/infoCard";
export default function Essentials() {
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
            <p>
              <span>Intract users</span> have together made more than{" "}
              <span> $100 million</span> in web3.
              <br />
              Join them and <span>learn how to earn crypto!</span>
            </p>
            <div className={styles.button}>
              Get Started{" "}
              <Image
                width={16}
                height={13}
                priority
                src="/icons/arrow-right.svg"
                alt="right arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cryptoLayer}>
        <div className={styles.AccordianLayer}>
          <Accordian data={basicCryptoData} />
          <InfoCard data={infoData1} />
        </div>
        <div className={styles.layer}>
          <div style={{ flex: "30%" }} className={styles.alignBottom}>
            <InfoCard data={infoData2} />
          </div>
          <div style={{ flex: "70%" }}>
            <Accordian data={airDropData} />
          </div>
        </div>
        <div style={{ position: "relative" }} className={styles.layerFlex}>
          <div className={styles.timerLayer}>
            <div className={styles.timeContainer}>
              <p className={styles.timeHeader}>Reward unlocks in</p>
              <hr className="hr" />
              <div className={styles.counterContainer}>
                <img
                  src="https://www.intract.io/assets/dotBg-149528a0.png"
                  alt="dot background"
                />
                <div className={styles.wrap}>
                  <div className={styles.counter}>
                    <h3>00</h3>
                    <p>Days</p>
                  </div>
                  <div className={styles.counter}>
                    <h3>16</h3>
                    <p>Hrs</p>
                  </div>
                  <div className={styles.counter}>
                    <h3>36</h3>
                    <p>Mins</p>
                  </div>
                  <div className={styles.counter}>
                    <h3>54</h3>
                    <p>Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.timerLayer}>
            <div className={styles.finalReward}>
              <img
                src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
                alt=""
                className={styles.frImage}
              />
              <div className={styles.note}>Lucky Draw</div>
              <div class={styles.frInfo}>
                <div>Exclusive Community</div>
                <span>
                  <img src="/icons/discord.svg" alt="discord-icon" />
                  <p>Earndrop</p>
                </span>
              </div>
              <hr className="hr" />
              <div className={styles.stepsContainer}>
                <p>Complete all Essential quests</p>
              </div>
              <div className={styles.stepsContainer}>
                <div>Complete at least 1 Alpha Hub quest today</div>
              </div>
              <div className={styles.claim}>
                <div>Claim Now</div>
                <img src="/icons/arrow-right.svg" alt="Arrow Right" />
              </div>
            </div>
          </div>
          <div className={styles.rdContainer}>
            <div className={styles.rdHeader}>Reward info</div>
            <div className={styles.rdBody}>
              <p style={{ color: "#fffc" }}>
                <span>
                  Free access to paid KOL (crypto earning) communities!
                </span>
              </p>
              <br />
              <p>
                Win access to exclusive earning communities of some of the the
                greatest earners in crypto for a month, every 24 hours. Get
                access to unmatched insights, a close-knit community of the best
                airdrop earners, and more.
              </p>
              <br />
              <p>
                To win: make sure you've connected your Twitter and Discord
                accounts - and follow our criteria!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.infoCard}></div>
      </div>
    </>
  );
}
