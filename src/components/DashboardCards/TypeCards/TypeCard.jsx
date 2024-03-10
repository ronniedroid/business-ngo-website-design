import { h } from "preact";
import IDPIcon from "@components/Icons/IDPIcon";
import RefugeeIcon from "@components/Icons/RefugeeIcon";
import ReturneeIcon from "@components/Icons/ReturneeIcon";
import HostIcon from "@components/Icons/HostIcon";
import styles from "./styles.module.css"
import { setDataFilter } from "@stores/store";

function TypeCard({ title, num }) {
  const width = 24;
  const height = 24;
  const fill = "var(--on-surface)";
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  function handleClick(item) {
    const result = item == 'idps' ? 'idps' : item == 'refugee' ? 'refugees' : item == 'returnees' ? 'returnees' : item == 'host community' ? 'host' : ''
    // console.log(item, result)
    setDataFilter(result)
  }
  return (
    <div class={styles.card} onClick={() => handleClick(title.toLowerCase())}>
      <div class={styles.cardicon}>
        {title === "IDPs" ? (
          <IDPIcon width={width} height={height} fill={fill} />
        ) : title === "Refugee" ? (
          <RefugeeIcon width={width} height={height} fill={fill} />
        ) : title === "Returnees" ? (
          <ReturneeIcon width={width} height={height} fill={fill} />
        ) : title === "Host Community" ? (
          <HostIcon width={width} height={height} fill={fill} />
        ) : (
          ""
        )}
      </div>
      <div class={styles.cardtitle}>{title}</div>
      <div class={styles.cardnum}>{formatter.format(num)}</div>
    </div>
  );
}

export default TypeCard;
