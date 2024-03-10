import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { dashboardData } from "@stores/store";
import BenCard from "./BenCard";
import styles from "./styles.module.css"

function BenCards() {
  const $dashboardData = useStore(dashboardData)
  const items = [
    {
      title: "total",
      num: $dashboardData?.total,
    },
    {
      title: "male",
      num: $dashboardData?.male,
    },
    {
      title: "female",
      num: $dashboardData?.female,
    },
    {
      title: "camp",
      num: $dashboardData?.camp,
    },
    {
      title: "urban",
      num: $dashboardData?.urban,
    },
  ];
  return (
    <div class={styles.cards}>
      <div class={styles.title}>
        <h2>Benefeciaries</h2>
        <p>General Statistics of beneficiaties based on gender and locations</p>
      </div>
      <div class={styles.list}>
        {items
          ? items.map((item) => <BenCard title={item.title} num={item.num} />)
          : ""}
      </div>
    </div>
  );
}

export default BenCards;
