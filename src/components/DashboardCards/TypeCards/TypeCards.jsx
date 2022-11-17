import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "@stores/store";
import TypeCard from "./TypeCard";
import "./TypeCards.css";

function TypeCards() {
  const $currentCluster = useStore(currentCluster);
  const items = [
    {
      name: "idps",
      num: $currentCluster?.types?.idps,
    },
    {
      name: "refugees",
      num: $currentCluster?.types?.refugees,
    },
    {
      name: "returnees",
      num: $currentCluster?.types?.returnees,
    },
    {
      name: "host",
      num: $currentCluster?.types?.host,
    },
  ];
  return (
    <div className="type-cards">
      <div className="type-cards__title">
        <h2>Type</h2>
        <p>Beneficiary statistics based on type of beneficiary</p>
      </div>
      <div class="type-cards__cards">
        {items
          ? items.map((item) => <TypeCard name={item.name} num={item.num} />)
          : ""}
      </div>
    </div>
  );
}

export default TypeCards;
