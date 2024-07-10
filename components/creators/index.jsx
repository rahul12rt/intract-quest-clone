import Card from "../UI/card";
import styles from "./index.module.css";
import { creatorData } from "../../utils/data";
export default function Creators() {
  return (
    <div className="mainContainer">
      <div className="heading">
        <h6>Top Crypto Creators and Projects to Follow</h6>
        <p>Answers to your crypto doubts, straight from the experts</p>
      </div>
      <div className={styles.cardContainer}>
        {creatorData?.map((res, id) => {
          return <Card data={res} id={id} />;
        })}
      </div>
    </div>
  );
}
