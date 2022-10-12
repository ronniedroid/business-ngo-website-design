import {useState} from 'preact/hooks'
import { useStore } from "@nanostores/preact";
import { dataSeries } from "../stores/store"
import Chart from "react-apexcharts";

const MyChartComponent = () => {
  const options = { labels: ["Cases", "Recovered", "Deaths"] };
  const $dataSeries = useStore(dataSeries)
  console.log($dataSeries)
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={$dataSeries}
            type="donut"
            width="300"
          />
        </div>
      </div>
    </div>
  );
};

export default MyChartComponent;