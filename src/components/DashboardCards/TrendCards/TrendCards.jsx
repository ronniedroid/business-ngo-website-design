import { h } from "preact";
import "./TrendCards.css";

function TrendCards() {
  return (
    <div class="trend-cards">
      <div class="trend-cards__title">
        <h2>Trends</h2>
        <p>
          Distriution of beneficiaries based on gender and governorates for the
          passed months
        </p>
      </div>
      <div class="trend-cards__cards">
        <div class="gender"></div>
        <div class="governorate"></div>
      </div>
    </div>
  );
}

export default TrendCards;
