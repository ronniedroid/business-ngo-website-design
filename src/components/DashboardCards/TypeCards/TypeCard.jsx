import { h } from "preact";
import IDPIcon from "@components/Icons/IDPIcon";
import RefugeeIcon from "@components/Icons/RefugeeIcon";
import ReturneeIcon from "@components/Icons/ReturneeIcon";
import HostIcon from "@components/Icons/HostIcon";
import styles from "./styles.module.css"
import { setDataFilter, dataFilter } from "@stores/store";
import { useStore } from "@nanostores/preact";

function TypeCard({ title, num, male, female, urban, camp }) {
  const width = 24;
  const height = 24;
  const fill = "var(--on-surface)";
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const $dataFilter = useStore(dataFilter)
  const titleLower = title.toLowerCase()
  const titleModified = titleLower == 'idps' ? 'idps' : titleLower == 'refugee' ? 'refugees' : titleLower == 'returnees' ? 'returnees' : titleLower == 'host community' ? 'host' : ''
  function handleClick(item) {
    setDataFilter(item)
  }
  return (
    <div class={styles.card + " " + (titleModified == $dataFilter ? styles.selected : '')} onClick={() => handleClick(titleModified)}>
      <div class={styles.general}>
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
        <div class={styles.cardtitle}>{titleModified}</div>
        <div class={styles.cardnum}>{formatter.format(num)}</div>
      </div>
      <ul class={styles.breakdown}>
        <li><span>Male</span>{formatter.format(male)}</li>
        <li><span>Female</span>{formatter.format(female)}</li>
        <li><span>Urab</span>{formatter.format(urban)}</li>
        <li><span>Camp</span>{formatter.format(camp)}</li>
      </ul>
    </div>
  );
}

export default TypeCard;
