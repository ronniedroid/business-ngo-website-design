import { useState } from "preact/hooks";
import Chart from "react-apexcharts";

const MyChartComponent = () => {
  const options = { labels: ["Cases", "Recovered", "Deaths"] };
  const [dataSeries, setDataSeries] = useState([14, 97, 5]);

  function update() {
    setDataSeries([Math.random(), Math.random(), Math.random()]);
  }

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={dataSeries}
            type="donut"
            width="300"
          />
        </div>
      </div>
      <button onClick={update}>Update</button>
    </div>
  );
};

export default MyChartComponent;