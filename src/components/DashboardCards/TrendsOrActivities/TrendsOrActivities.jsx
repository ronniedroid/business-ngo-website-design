import { h } from "preact";
import "./TrendsOrActivities.css";
import { useStore } from "@nanostores/preact";
import { currentMonth, currentProject } from "@stores/store";
import Gender from "@components/Charts/Gender";
import Governorates from "@components/Charts/Governorate";
import Activities from "@components/DashboardCards/TrendsOrActivities/Activities";

function TrendsOrActivities() {
  const month = useStore(currentMonth);
  const project = useStore(currentProject)
  const isYear = month === null ? true : false;
  const isProject = project === null ? false : true;
  if (isYear && !isProject) {
    return (
      <div class="activities-container">
        <div class="activities-container__title">
          <h2>Monthly segregation</h2>
          <p>
            Distriution of beneficiaries based on gender and governorates for
            the passed months
          </p>
        </div>
        <div class="activities-container__cards">
          <div class="gender">
            <Gender />
          </div>
          <div class="governorate">
            <Governorates />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="activities-container">
        <div class="activities-container__title">
          <h2>Activities</h2>
          <p>
            List of activities carried out by Harikar's project's for the month
            of <span>{month}</span>
          </p>
        </div>
        <div class="activities-container__table">
          <Activities />
        </div>
      </div>
    );
  }
}

export default TrendsOrActivities;
