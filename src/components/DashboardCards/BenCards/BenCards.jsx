import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "@stores/store";
import BenCard from "./BenCard";
import "./BenCards.css";

function BenCards() {
  const $currentCluster = useStore(currentCluster);
  const items = [
    {
      name: "total",
      num: $currentCluster?.bens?.total,
    },
    {
      name: "male",
      num: $currentCluster?.bens?.male,
    },
    {
      name: "female",
      num: $currentCluster?.bens?.female,
    },
    {
      name: "camp",
      num: $currentCluster?.locations?.camp,
    },
    {
      name: "urban",
      num: $currentCluster?.locations?.nonCamp,
    },
  ];
  return (
    <div class="ben-cards">
      <div class="ben-cards__title">
        <h2>Benefeciaries</h2>
        <p>General Statistics of beneficiaties based on gender and locations</p>
      </div>
      <div class="ben-cards__cards">
        {items
          ? items.map((item) => <BenCard name={item.name} num={item.num} />)
          : ""}
      </div>
    </div>
  );
}

export default BenCards;
