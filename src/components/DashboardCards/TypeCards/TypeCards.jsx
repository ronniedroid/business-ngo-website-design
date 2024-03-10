import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { dashboardData } from "@stores/store";
import TypeCard from "./TypeCard";
import styles from "./styles.module.css"

function TypeCards() {
  const { beneficiaries } = useStore(dashboardData);
  return (
    <div class={styles.cards}>
      <div class={styles.title}>
        <h2>Displacement status</h2>
        <p>
          Beneficiary statistics based on the displacement status of beneficiary
        </p>
      </div>
      <div class={styles.list}>
        {beneficiaries
          ? beneficiaries.map((item) => <TypeCard title={item.name} num={item.total} />)
          : ""}
      </div>
    </div>
  );
}

export default TypeCards;
