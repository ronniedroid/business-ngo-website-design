import { h } from "preact";
import "./Calendar.css";
import { setCurrentMonth } from "@stores/store";
import { useStore } from "@nanostores/preact";
import { currentMonth } from "@stores/store";
import CalendarIcon from "@components/Icons/CalendarIcon";

function handleClick(month) {
  setCurrentMonth(month);
}

function Calendar() {
  const $currentMonth = useStore(currentMonth);
  const months = $currentMonth?.months;
  return (
    <div class="calendar">
      <ul class="calendar__list">
        <div class="calendar__icon" onClick={() => handleClick("year")}>
          <CalendarIcon width={36} height={36} />
          <span class="tooltip">Unselect month</span>
        </div>
        {months
          ? months.map((month) => (
              <li
                class={
                  "calendar__item " +
                  (month === $currentMonth?.name
                    ? "calendar__item-selected"
                    : "")
                }
              >
                <button onClick={() => handleClick(month)}>
                  {month.toUpperCase().slice(0, 3)}
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Calendar;
