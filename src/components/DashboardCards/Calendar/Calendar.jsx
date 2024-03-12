import { h } from "preact";
import styles from "./styles.module.css"
import {
  setCurrentMonth,
  currentMonths,
  currentMonth,
  currentProject,
  fetchCurrentMonths,
  projectMonths,
  setDataFilter
} from "@stores/store";
import { useStore } from "@nanostores/preact";
import CalendarIcon from "@components/Icons/CalendarIcon";
import { useEffect } from "preact/hooks";

function Calendar({ year }) {
  const allMonths = [
    { name: "january", abbr: "Jan", isDisabled: false },
    { name: "february", abbr: "Feb", isDisabled: false },
    { name: "march", abbr: "Mar", isDisabled: false },
    { name: "april", abbr: "Apr", isDisabled: false },
    { name: "may", abbr: "May", isDisabled: false },
    { name: "june", abbr: "Jun", isDisabled: false },
    { name: "july", abbr: "Jul", isDisabled: false },
    { name: "august", abbr: "Aug", isDisabled: false },
    { name: "september", abbr: "Sep", isDisabled: false },
    { name: "october", abbr: "Oct", isDisabled: false },
    { name: "november", abbr: "Nov", isDisabled: false },
    { name: "december", abbr: "Dec", isDisabled: false },
  ];

  const $currentMonth = useStore(currentMonth);
  const $currentProject = useStore(currentProject)

  useEffect(() => {
    fetchCurrentMonths(year)
  }, [])

  const $projectMonths = useStore(projectMonths)
  const $currentMonths = useStore(currentMonths);
  const months = $currentProject != null ? $currentMonths.filter((item) => $projectMonths.includes(item)) : $currentMonths
  const filteredMonths = allMonths.map((item) =>
    months.includes(item.name) ? item : { ...item, isDisabled: true }
  );

  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let monthp = params.get("month");
    if (months.includes(monthp)) {
      setCurrentMonth(monthp)
    }
  }, [months]);

  function handleClick(month) {
    let params = new URLSearchParams(document.location.search);
    params.set("month", month);
    window.history.replaceState({}, "", `${location.pathname}?${params}`);
    setDataFilter("total")
    setCurrentMonth(month);
  }

  return (
    <ul class={styles.list}>
      <div class={styles.icon} onClick={() => handleClick(null)}>
        <CalendarIcon width={24} height={24} fill="var(--on-primary-container)" />
        <span class={styles.tooltip}>Unselect month</span>
        <p>{year}</p>
      </div>
      {filteredMonths.map((month) => (
        <li
          class={
            styles.item + " " +
            (month.name === $currentMonth
              ? styles.selected
              : "")
          }
        >
          <button
            disabled={month.isDisabled}
            onClick={() => handleClick(month.name)}
          >
            {month.abbr}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Calendar;
