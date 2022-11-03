import { h } from "preact";
import "./Calendar.css";
import { setCurrentMonth } from "@stores/store";
import { useStore } from "@nanostores/preact";
import { store } from "@stores/store";

function handleClick(month) {
  setCurrentMonth(month);
}

function Calendar() {
  const $store = useStore(store);
  const months = $store?.year?.months;
  return (
    <div class="calendar">
      <ul class="calendar__list">
        <div class="calendar__icon"></div>
        {months
          ? months.map((month) => (
              <li class="calendar__item">
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
