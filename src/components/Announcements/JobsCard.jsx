import { h } from "preact";
import styles from "./styles.module.css"

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
    <div class={styles.card}>
      <p class={styles.title}>
        {props.title}
      </p>
      <div class={styles.content}>
        <p class={`${styles.tpname} ${styles.contenttitle}`}>
          Project name:
        </p>
        <p class={`${styles.tvac} ${styles.contenttitle}`}>
          Number of vacancies:
        </p>
        <p class={`${styles.tduty} ${styles.contenttitle}`}>
          Duty Station:
        </p>
        <p class={`${styles.tresidence} ${styles.contenttitle}`}>
          Applicant's residence:
        </p>
        <p class={`${styles.tgender} ${styles.contenttitle}`}>
          Preferable gender:
        </p>
        <p class={`${styles.tcontract} ${styles.contenttitle}`}>
          Type of contract:
        </p>
        <p class={`${styles.tstaring} ${styles.contenttitle}`}>
          Expected starting date:
        </p>
        <p class={`${styles.tdeadline} ${styles.contenttitle}`}>
          Deadline:
        </p>
        <p class={styles.pname}>{props.project}</p>
        <p class={styles.vac}>
          {props.vacancies}
        </p>
        <p class={styles.duty}>
          {props.projectArea}
        </p>
        <p class={styles.residence}>
          {props.residence}
        </p>
        <p class={styles.gender}>
          {props.gender}
        </p>
        <p class={styles.contract}>
          {props.typeOfContract}
        </p>
        <p class={styles.starting}>
          {props.starting}
        </p>
        <p class={styles.deadline}>
          {props.deadline}
        </p>
      </div >
      <div class={styles.buttons}>
        <button class={styles.button}>Read more</button>
        <button class={styles.button} disabled={isDisabled}>Apply</button>
      </div>
    </div >
  );
}

export default JobsCard;
