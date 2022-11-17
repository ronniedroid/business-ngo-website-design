import { h } from "preact";
import IDPIcon from "@components/Icons/IDPIcon";
import RefugeeIcon from "@components/Icons/RefugeeIcon";
import ReturneeIcon from "@components/Icons/ReturneeIcon";
import HostIcon from "@components/Icons/HostIcon";
import "./TypeCards.css";

function TypeCard({ name, num }) {
  const width = 24;
  const height = 24;
  const fill = "var(--brand)";
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <div class="type-card">
      <div class="type-card__icon">
        {name === "idps" ? (
          <IDPIcon width={width} height={height} fill={fill} />
        ) : name === "refugees" ? (
          <RefugeeIcon width={width} height={height} fill={fill} />
        ) : name === "returnees" ? (
          <ReturneeIcon width={width} height={height} fill={fill} />
        ) : name === "host" ? (
          <HostIcon width={width} height={height} fill={fill} />
        ) : (
          ""
        )}
      </div>
      <div class="type-card__name">{name}</div>
      <div class="type-card__num">{formatter.format(num)}</div>
    </div>
  );
}

export default TypeCard;
