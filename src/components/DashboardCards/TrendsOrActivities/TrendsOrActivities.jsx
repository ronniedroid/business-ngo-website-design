import { h } from "preact";
import "./TrendsOrActivities.css";
import { useStore } from "@nanostores/preact";
import { currentMonth } from "@stores/store";
import Gender from "@components/Charts/Gender/Gender";
import Governorates from "@components/Charts/Governorates/Governorate";
import Activities from "@components/DashboardCards/TrendsOrActivities/Activities";

function TrendsOrActivities() {
  const $currentMonth = useStore(currentMonth);
  const month = $currentMonth.name;
  const isYear = month === "year" ? true : false;
  if (isYear) {
    return (
      <div class="container">
        <div class="container__title">
          <h2>Monthly segregation</h2>
          <p>
            Distriution of beneficiaries based on gender and governorates for
            the passed months
          </p>
        </div>
        <div class="container__cards">
          <div class="gender">
            <Gender month={month} />
          </div>
          <div class="governorate">
            <Governorates month={month} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div class="container">
      <div class="container__title">
        <h2>Activities</h2>
        <p>
          List of activities carried out by Harikar's project's for the month of{" "}
          <span>{month}</span>
        </p>
      </div>
      <div class="container__table">
        <Activities month={month} />
      </div>
    </div>
  );
}

export default TrendsOrActivities;
