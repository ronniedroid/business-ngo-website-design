import { h } from "preact";
import Chart from "react-apexcharts";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "@stores/store";
import "./Charts.css";

const Districts = () => {
  const $currentCluster = useStore(currentCluster);
  const options = {
    chart: {
      stacked: false,
      fontFamily: "Roboto, sans-serif",
      background: "#00000000",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        distibuted: false,
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -30,
      style: {
        colors: ["var(--text1)"],
        fontSize: "var(--font-size-1)",
      },
      formatter(val, opts) {
        return new Intl.NumberFormat("en", { notation: "compact" }).format(
          opts.w.globals.series[0][opts.dataPointIndex]
        );
      },
    },
    colors: ["var(--text1)"],
    xaxis: {
      categories: $currentCluster.districts
        ? $currentCluster.districts.map((item) => item.name)
        : [],
      labels: {
        rotate: -20,
        style: {
          colors: "var(--text1)",
          fontSize: "var(--font-size-1)",
        },
      },
    },
    yaxis: {
      show: false,
      logarithmic: false,
    },
    grid: {
      show: true,
      borderColor: "var(--text1)",
      strokeDashArray: 2,
    },
    tooltip: {
      enabled: true,
      theme: false,
      marker: {
        show: false,
      },
      x: {
        show: true,
        format: "dd MMM",
      },
    },
  };
  const dataSeries = [
    {
      name: "Benefciaries",
      data: $currentCluster.districts
        ? $currentCluster.districts.map((item) => item.total)
        : [],
    },
  ];
  return (
    <div class="chart">
      <Chart
        options={options}
        series={dataSeries}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default Districts;
