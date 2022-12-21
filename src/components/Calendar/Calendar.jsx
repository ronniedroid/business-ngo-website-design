import { h } from "preact";
import "./Calendar.css";
import { setCurrentMonth } from "@stores/store";
import { useStore } from "@nanostores/preact";
import { currentMonth, months } from "@stores/store";
import CalendarIcon from "@components/Icons/CalendarIcon";

function handleClick(month) {
  setCurrentMonth(month);
}

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

function Calendar({ year }) {
  const $currentMonth = useStore(currentMonth);
  const $months = useStore(months);
  const filteredMonths = allMonths.map((item) =>
    $months.includes(item.name) ? item : { ...item, isDisabled: true }
  );
  return (
    <div class="calendar">
      <ul class="calendar__list">
        <div class="calendar__icon" onClick={() => handleClick("year")}>
          <CalendarIcon width={36} height={36} />
          <span class="tooltip">Unselect month</span>
        </div>
        <div class="calendar__title">
          <p>{year}</p>
        </div>
        {filteredMonths.map((month) => (
          <li
            class={
              "calendar__item " +
              (month.name === $currentMonth?.name
                ? "calendar__item-selected"
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
    </div>
  );
}

export default Calendar;
