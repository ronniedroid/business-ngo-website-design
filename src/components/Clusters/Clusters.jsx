import { h } from "preact";
import { useEffect } from "preact/hooks";
import { fetchYearData, setCurrentCluster } from "../../stores/store";
import "./Clusters.css";
import ClusterIcon from "@components/Icons/ClusterIcon";
import CPIcon from "@components/Icons/CPIcon";
import GBVIcon from "@components/Icons/GBVIcon";
import GeneralIcon from "@components/Icons/GeneralIcon";
import LivelihoodIcon from "@components/Icons/LivelihoodIcon";
import ProtectionIcon from "@components/Icons/ProtectionIcon";
import WASHIcon from "@components/Icons/WASHIcon";
import { currentCluster, currentMonth } from "../../stores/store";
import { useStore } from "@nanostores/preact";
import HealthIcon from "@components/Icons/HealthIcon";

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

  const clusters = $currentMonth?.clusters;

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
        {clusters
          ? clusters.map((cluster) => (
              <li
                class={
                  "cluster " +
                  `cluster--${cluster.abbr.toLowerCase()} ` +
                  (active === cluster.abbr
                    ? `cluster--${cluster.abbr.toLowerCase()}-selected `
                    : "")
                }
              >
                <button
                  id="protection"
                  onClick={() => handleClick(cluster.abbr)}
                >
                  <div
                    class={
                      "cluster__icon " +
                      `cluster__icon-${cluster.abbr.toLowerCase()}`
                    }
                  >
                    {cluster.abbr === "Protection" ? (
                      <ProtectionIcon />
                    ) : cluster.abbr === "GBV" ? (
                      <GBVIcon />
                    ) : cluster.abbr === "Health" ? (
                      <HealthIcon />
                    ) : cluster.abbr === "CP" ? (
                      <CPIcon />
                    ) : cluster.abbr === "Livelihood" ? (
                      <LivelihoodIcon />
                    ) : cluster.abbr === "WASH" ? (
                      <WASHIcon />
                    ) : (
                      "Cluster is unknown"
                    )}
                  </div>
                  {cluster.name}
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Clusters;
