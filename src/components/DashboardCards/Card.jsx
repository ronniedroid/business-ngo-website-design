import { h } from "preact";
import TotalIcon from "@components/Icons/TotalIcon";
import MaleIcon from "@components/Icons/MaleIcon";
import FemaleIcon from "@components/Icons/FemaleIcon";
import CampIcon from "@components/Icons/CampIcon";
import UrbanIcon from "@components/Icons/UrbanIcon";
import "./Cards.css";

function Card({ name, num }) {
  const width = 20;
  const height = 20;
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <div class="card">
      <div class={"card__icon " + name}>
        {name === "total" ? (
          <TotalIcon width={width} height={height} />
        ) : name === "male" ? (
          <MaleIcon width={width} height={height} />
        ) : name === "female" ? (
          <FemaleIcon width={width} height={height} />
        ) : name === "camp" ? (
          <CampIcon width={width} height={height} />
        ) : name === "urban" ? (
          <UrbanIcon width={width} height={height} />
        ) : (
          ""
        )}
      </div>
      <div class="card__name">{name}</div>
      <div class="card__num">{formatter.format(num)}</div>
    </div>
  );
}

export default Card;
