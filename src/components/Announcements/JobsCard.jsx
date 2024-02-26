import { h } from "preact";
import "./announcements-styles.css";

function JobsCard(props) {
  const getTime = (dl) => {
    const currentDate = new Date();
    const deadLine = new Date(dl);
    deadLine.setHours(deadLine.getHours() + 15);
    deadLine.setMinutes(deadLine.getMinutes() + 30);
    deadLine.setSeconds(deadLine.getSeconds() + 59);
    deadLine.setMilliseconds(deadLine.getMilliseconds() + 59);
    const difference = deadLine.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));
    return daysLeft;
  };

  const isDisabled = getTime(props.deadline) <= 0 ? true : false;

  return (
    <div class="card">
      <p class="title">
        {props.title}
      </p>
      <div class="content">
        <p class="tpname content-title">
          Project name:
        </p>
        <p class="tvac content-title">
          Number of vacancies:
        </p>
        <p class="tduty content-title">
          Duty Station:
        </p>
        <p class="tresidence content-title">
          Applicant's residence:
        </p>
        <p class="tgender content-title">
          Preferable gender:
        </p>
        <p class="tcontract content-title">
          Type of contract:
        </p>
        <p class="tstaring content-title">
          Expected starting date:
        </p>
        <p class="tdeadline content-title">
          Deadline:
        </p>
        <p class="pname">{props.project}</p>
        <p class="vac">
          {props.vacancies}
        </p>
        <p class="duty">
          {props.projectArea}
        </p>
        <p class="residence">
          {props.residence}
        </p>
        <p class="gender">
          {props.gender}
        </p>
        <p class="contract">
          {props.typeOfContract}
        </p>
        <p class="staring">
          {props.starting}
        </p>
        <p class="deadline">
          {props.deadline}
        </p>
      </div >
      <div class="buttons">
        <button class="button">Read more</button>
        <button class="button" disabled={isDisabled}>Apply</button>
      </div>
    </div >
  );
}

export default JobsCard;
