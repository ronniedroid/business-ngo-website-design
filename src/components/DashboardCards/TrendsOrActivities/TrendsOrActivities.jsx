import { h } from "preact";
import "./TrendsOrActivities.css";
import { useStore } from "@nanostores/preact";
import { currentMonth } from "@stores/store";
import Gender from "@components/Charts/Gender/Gender";
import Governorates from "@components/Charts/Governorates/Governorate";

function TrendsOrActivities() {
  const $currentMonth = useStore(currentMonth);
  const isYear = $currentMonth.name === "year" ? true : false;
  if (isYear) {
    return (
      <div class="trend-cards">
        <div class="trend-cards__title">
          <h2>Trends</h2>
          <p>
            Distriution of beneficiaries based on gender and governorates for
            the passed months
          </p>
        </div>
        <div class="trend-cards__cards">
          <div class="gender">
            <Gender />
          </div>
          <div class="governorate">
            <Governorates />
          </div>
        </div>
      </div>
    );
  }
  return "";
}

export default TrendsOrActivities;
