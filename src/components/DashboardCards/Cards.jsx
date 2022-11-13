import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "@stores/store";
import "./Cards.css";

function Cards() {
  const $currentCluster = useStore(currentCluster);
  const items = [
    $currentCluster?.bens?.total,
    $currentCluster?.bens?.male,
    $currentCluster?.bens?.female,
    $currentCluster?.locations?.camp,
    $currentCluster?.locations?.nonCamp,
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
              <div>
                <p>{item}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Cards;
