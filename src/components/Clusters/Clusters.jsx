import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { setCurrentCluster } from "src/stores/store";
import "./Clusters.css";

function Clusters(props) {
  const [active, setActive] = useState("general");

  function handleClick(cluster) {
    setActive(cluster);
    setCurrentCluster();
  }

  // useEffect(() => {
  //   fetchYearData(props.year);
  // }, []);

  return (
    <div class="clusters">
      <ul class="clusters__list">
        <div class="clusters__icon">{/* <Icon name="Cluster" /> */}</div>
        <li
          class={
            "cluster " +
            "cluster--general " +
            (active === "general" ? "cluster--general-selected " : "")
          }
        >
          <button id="general" onClick={() => handleClick("general")}>
            <div class="cluster__icon cluster__icon-general">
              {/* <Icon name="Chart" /> */}
            </div>{" "}
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
              {/* <Icon name="Protection" /> */}
            </div>{" "}
            Protection
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
              {/* <Icon name="GBV" /> */}
            </div>{" "}
            GBV
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
              {/* <Icon name="CP" /> */}
            </div>{" "}
            CP
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
              {/* <Icon name="Livelihood" /> */}
            </div>{" "}
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
              {/* <Icon name="WASH" /> */}
            </div>{" "}
            WASH
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Clusters;
