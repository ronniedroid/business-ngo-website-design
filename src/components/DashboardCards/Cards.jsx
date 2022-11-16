import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "@stores/store";
import Card from "./Card";
import "./Cards.css";

function Cards() {
  const $currentCluster = useStore(currentCluster);
  const items = [
    {
      name: "total",
      num: $currentCluster?.bens?.total,
      icon: "",
    },
    {
      name: "male",
      num: $currentCluster?.bens?.male,
      icon: "",
    },
    {
      name: "female",
      num: $currentCluster?.bens?.female,
      icon: "",
    },
    {
      name: "camp",
      num: $currentCluster?.locations?.camp,
      icon: "",
    },
    {
      name: "urban",
      num: $currentCluster?.locations?.nonCamp,
      icon: "",
    },
  ];
  return (
    <div class="container">
      <div class="container__title">
        <h2>Benefeciaries</h2>
        <p>General Statistics of Beneficiaties based on gender and locations</p>
      </div>
      <div class="container__cards">
        {items
          ? items.map((item) => (
              <Card name={item.name} num={item.num} icon={item.icon} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Cards;
