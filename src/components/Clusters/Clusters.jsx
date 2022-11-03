import { h } from "preact";
import { useEffect } from "preact/hooks";
import { fetchYearData, setCurrentCluster } from "../../stores/store";
import "./Clusters.css";
import ClusterIcon from "./Icons/ClusterIcon";
import CPIcon from "./Icons/CPIcon";
import GBVIcon from "./Icons/GBVIcon";
import GeneralIcon from "./Icons/GeneralIcon";
import LivelihoodIcon from "./Icons/LivelihoodIcon";
import ProtectionIcon from "./Icons/ProtectionIcon";
import WASHIcon from "./Icons/WASHIcon";
import { currentCluster, currentMonth } from "../../stores/store";
import { useStore } from "@nanostores/preact";

function Clusters(props) {
  function handleClick(cluster) {
    setCurrentCluster(cluster);
  }

  useEffect(() => {
    fetchYearData(props.year);
  }, []);

  const $currentCluster = useStore(currentCluster);
  const $currentMonth = useStore(currentMonth);
  const active = $currentCluster?.name;

  console.log($currentMonth?.clusters);

  return (
    <div class="clusters">
      <ul class="clusters__list">
        <div class="clusters__icon">
          <ClusterIcon width={36} height={36} />
        </div>
        <li
          class={
            "cluster " +
            "cluster--general " +
            (active === "general" ? "cluster--general-selected " : "")
          }
        >
          <button id="general" onClick={() => handleClick("general")}>
            <div class="cluster__icon cluster__icon-general">
              <GeneralIcon />
            </div>
            All Clusters
          </button>
        </li>
        <li
          class={
            "cluster " +
            "cluster--protection " +
            (active === "Protection" ? "cluster--protection-selected " : "")
          }
        >
          <button id="protection" onClick={() => handleClick("Protection")}>
            <div class="cluster__icon cluster__icon-protection">
              <ProtectionIcon />
            </div>
            General Protection
          </button>
        </li>
        <li
          class={
            "cluster " +
            "cluster--gbv " +
            (active === "GBV" ? "cluster--gbv-selected " : "")
          }
        >
          <button id="gbv" onClick={() => handleClick("GBV")}>
            <div class="cluster__icon cluster__icon-gbv">
              <GBVIcon />
            </div>
            Gender Based Violance
          </button>
        </li>
        <li
          class={
            "cluster " +
            "cluster--cp " +
            (active === "CP" ? "cluster--cp-selected " : "")
          }
        >
          <button id="cp" onClick={() => handleClick("CP")}>
            <div class="cluster__icon cluster__icon-cp">
              <CPIcon />
            </div>
            Child Protection
          </button>
        </li>
        <li
          class={
            "cluster " +
            "cluster--livelihood " +
            (active === "Livelihood" ? "cluster--livelihood-selected " : "")
          }
        >
          <button id="livelihood" onClick={() => handleClick("Livelihood")}>
            <div class="cluster__icon cluster__icon-livelihood">
              <LivelihoodIcon />
            </div>
            Livelihood
          </button>
        </li>
        <li
          class={
            "cluster " +
            "cluster--wash " +
            (active === "WASH" ? "cluster--wash-selected " : "")
          }
        >
          <button id="wash" onClick={() => handleClick("WASH")}>
            <div class="cluster__icon cluster__icon-wash">
              <WASHIcon />
            </div>
            Water, Sanitation and Hygiene
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Clusters;
