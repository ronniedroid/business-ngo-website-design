import { h } from "preact";
import TotalIcon from "@components/Icons/TotalIcon";
import MaleIcon from "@components/Icons/MaleIcon";
import FemaleIcon from "@components/Icons/FemaleIcon";
import CampIcon from "@components/Icons/CampIcon";
import UrbanIcon from "@components/Icons/UrbanIcon";
import styles from "./styles.module.css"

function BenCard({ title, num }) {
  const width = 20;
  const height = 20;
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <div class={styles.card}>
      <div class={`${styles.cardicon} ${styles[title]}`}>
        {title === "total" ? (
          <TotalIcon width={width} height={height} />
        ) : title === "male" ? (
          <MaleIcon width={width} height={height} />
        ) : title === "female" ? (
          <FemaleIcon width={width} height={height} />
        ) : title === "camp" ? (
          <CampIcon width={width} height={height} />
        ) : title === "urban" ? (
          <UrbanIcon width={width} height={height} />
        ) : (
          ""
        )}
      </div>
      <div class={styles.cardtitle}>{title}</div>
      <div class={styles.cardnum}>{formatter.format(num)}</div>
    </div>
  );
}

export default BenCard;
