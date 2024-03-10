import { h } from "preact";
import Chart from "react-apexcharts";
import { useStore } from "@nanostores/preact";
import { dashboardData, dataFilter } from "@stores/store";
import "./Charts.css";

const Districts = () => {
  const { districts } = useStore(dashboardData);
  const $filter = useStore(dataFilter)
  const title = $filter == "idps" ? "IDPs" : $filter == "host" ? "Host Community" : $filter
  const capitalizedTitle = title ? title.split("").map((item, index) => index == 0 ? item.toUpperCase() : item).join("") : ""
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
        colors: ["var(--on-surface)"],
        fontSize: "var(--fs-xs)",
      },
      formatter(val, opts) {
        return new Intl.NumberFormat("en", { notation: "compact" }).format(
          opts.w.globals.series[0][opts.dataPointIndex]
        );
      },
    },
    title: {
      text: capitalizedTitle ? `${capitalizedTitle} Beneficiaries Based on District` : "Total Beneficiareis Based on District",
      align: 'left',
      style: { color: "var(--on-surface)" },
    },
    colors: ["var(--on-surface)"],
    xaxis: {
      categories: districts
        ? districts.map((item) => item.name)
        : [],
      labels: {
        rotate: -20,
        style: {
          colors: "var(--on-surface)",
          fontSize: "var(--fs-xs)",
        },
      },
    },
    yaxis: {
      show: false,
      logarithmic: false,
    },
    grid: {
      show: true,
      borderColor: "var(--on-surface)",
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
      name: capitalizedTitle,
      data: districts
        ? districts.map((item) => $filter != null ? item[$filter] : item.total)
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
