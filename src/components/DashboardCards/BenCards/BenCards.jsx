import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { dashboardData } from "@stores/store";
import BenCard from "./BenCard";
import "./BenCards.css";

function BenCards() {
  const $dashboardData = useStore(dashboardData)
  const items = [
    {
      name: "total",
      num: $dashboardData?.total,
    },
    {
      name: "male",
      num: $dashboardData?.male,
    },
    {
      name: "female",
      num: $dashboardData?.female,
    },
    {
      name: "camp",
      num: $dashboardData?.camp,
    },
    {
      name: "urban",
      num: $dashboardData?.urban,
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
