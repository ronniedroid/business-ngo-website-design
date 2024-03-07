import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { dashboardData } from "@stores/store";
import TypeCard from "./TypeCard";
import "./TypeCards.css";

function TypeCards() {
  const { beneficiaries } = useStore(dashboardData);
  return (
    <div className="type-cards">
      <div className="type-cards__title">
        <h2>Displacement status</h2>
        <p>
          Beneficiary statistics based on the displacement status of beneficiary
        </p>
      </div>
      <div class="type-cards__cards">
        {beneficiaries
          ? beneficiaries.map((item) => <TypeCard name={item.name} num={item.total} />)
          : ""}
      </div>
    </div>
  );
}

export default TypeCards;
