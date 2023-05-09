import { h, Fragment } from "preact";
import "./announcements-styles.css";

function JobsCard(props) {
  const setColor = (dl) => {
    const color =
      dl > 7
        ? "var(--blue-7)"
        : dl >= 3
        ? "var(--green-7)"
        : dl < 3 && dl > 0
        ? "var(--red-7)"
        : "var(--gray-7)";
    return color;
  };

  const backgroundColor = setColor(props.deadline);

  return (
    <div class="card">
      <p class="title" style={{ "background-color": backgroundColor }}>
        {props.title}
      </p>
      <div class="content">
        <p>
          <span>
            <strong>Project name: </strong>
          </span>
          {props.project}
        </p>
        <p>
          <span>
            <strong>Number of vacancies: </strong>
          </span>
          {props.vacancies}
        </p>
        <p>
          <span>
            <strong>Duty Station: </strong>
          </span>
          {props.projectArea}
        </p>
        <p>
          <span>
            <strong>Applicant's residence: </strong>
          </span>
          {props.residence}
        </p>
        <p>
          <span>
            <strong>Preferable gender: </strong>
          </span>
          {props.gender}
        </p>
        <p>
          <span>
            <strong>Type of contract: </strong>
          </span>
          {props.typeOfContract}
        </p>
      </div>
      <div class="dates">
        <p class="announcement-data">
          <span>
            <strong>Expected starting date: </strong>
          </span>
          {props.starting}
        </p>
        <p class="deadline">
          <span>
            <strong>Deadline: </strong>
          </span>
          {props.deadline}
        </p>
      </div>
      <div class="buttons">
        <button class="button">Read more</button>
        <button class="button">Apply</button>
      </div>
    </div>
  );
}

export default JobsCard;
