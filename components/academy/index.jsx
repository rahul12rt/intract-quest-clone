"use client";
import React, { Suspense } from "react";
import Essentials from "../essentials";
import Alphahub from "../alphaHub";
import { useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import Creators from "../creators";
import DegenGlossary from "../degenGlossary";
import Tabs from "../UI/tabs";
import { narrativeData } from "@/utils/data";

function AcademyContent() {
  const searchParam = useSearchParams();
  const newParam = searchParam.get("tab");

  return (
    <>
      {newParam === "essentials" ? (
        <Essentials />
      ) : (
        <Alphahub data={narrativeData} />
      )}
    </>
  );
}

function Academy() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.hero} />
      <Suspense fallback={<div>Loading...</div>}>
        <AcademyContent />
      </Suspense>
      <div className="border" />
      <Creators />
      <div className="border" />
      <Suspense fallback={<div>Loading Glossary...</div>}>
        <DegenGlossary />
      </Suspense>
      <Tabs />
    </div>
  );
}

export default Academy;
