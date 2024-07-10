"use client";
import React from "react";
import Essentials from "../essentials";
import Alphahub from "../alphaHub";
import { useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import Creators from "../creators";
import DegenGlossary from "../degenGlossary";
import Tabs from "../UI/tabs";
import { narrativeData } from "@/utils/data";

function Academy() {
  const searchParam = useSearchParams();
  const newParam = searchParam.get("tab");
  return (
    <div className={styles.mainContainer}>
      <div className={styles.hero} />
      {newParam === "essentials" ? (
        <Essentials />
      ) : (
        <Alphahub data={narrativeData} />
      )}
      <div className="border" />
      <Creators />
      <div className="border" />
      <DegenGlossary />
      <Tabs />
    </div>
  );
}

export default Academy;
