import { h } from "preact";
import Chart from "react-apexcharts";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "../../../stores/store";
import "./Districts.css";

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
      },
      formatter(val, opts) {
        return new Intl.NumberFormat().format(
          opts.w.globals.series[0][opts.dataPointIndex]
        );
      },
    },
    colors: $currentCluster.name
      ? `var(--${$currentCluster.name.toLowerCase()})`
      : "var(--brand)",
    xaxis: {
      categories: $currentCluster.districts
        ? $currentCluster.districts.category
        : [],
      labels: { rotate: -20 },
    },
    yaxis: {
      show: false,
      logarithmic: false,
    },
    title: {
      text: "People Reached by District",
      align: "center",
      margin: 0,
      style: {
        fontSize: "16px",
        fontWeight: "300",
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd MMM",
      },
    },
  };
  const dataSeries = [
    {
      name: "Benefciaries",
      data: $currentCluster.districts ? $currentCluster.districts.series : [],
    },
  ];
  return (
    <div class="chart">
      <Chart
        options={options}
        series={dataSeries}
        type="bar"
        height={250}
        width="100%"
      />
    </div>
  );
};

export default Districts;
