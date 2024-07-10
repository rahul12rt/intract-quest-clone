"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";
export default function Header() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <a aria-current="page" aria-label="home" href="/">
          <img src="/logo.svg" alt="intract logo" />
        </a>
        <nav className={` ${isInputFocused ? styles.hidden : ""}`}>
          <ul className={styles.navLinks}>
            <li>Compass</li>
            <li>Explore</li>
            <li style={{ color: "#fff" }}>
              Academy<div className={styles.explore}>New</div>
              <div class={styles.active}></div>
            </li>
            <li>NFTs</li>
            <li>For Projects</li>
          </ul>
        </nav>
        <div className={styles.right}>
          <div className={styles.search}>
            <Image
              src="/icons/search.svg"
              width={22}
              height={22}
              priority
              style={{ background: "transparent" }}
            />
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc,."
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </div>
          <div className={styles.auth}>
            <div className={styles.broadCast}>
              <Image
                src="/icons/broadcast.svg"
                width={16}
                height={16}
                priority
              />
            </div>
            <span className={styles.signIn}>Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
}
