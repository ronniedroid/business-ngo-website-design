import { h } from "preact";
import Chart from "react-apexcharts";
import { useStore } from "@nanostores/preact";
import { currentCluster, currentMonth } from "@stores/store";
import "./Charts.css";

function Gender() {
  const $currentCluster = useStore(currentCluster);
  const $currentMonth = useStore(currentMonth)
  const maleSeries = $currentMonth.name != undefined ? $currentCluster?.gender?.male : [];
  const femaleSeries = $currentMonth.name != undefined ? $currentCluster?.gender?.female : [];
  const options = {
    chart: {
      fontFamily: "Roboto, sans-serif",
      background: "#00000000",
      toolbar: {
        show: false,
      },
    },
    colors: ["#4c4cff", "#a64ca6"],
    dataLabels: {
      enabled: true,
      formatter: (val) => {
        return new Intl.NumberFormat("en", { notation: "compact" }).format(val);
      },
      style: {
        fontSize: "var(--fs-xs)",
        fontWeight: 500,
        colors: ["var(--surface-container-highest)"],
      },
      background: {
        enabled: true,
        opacity: 1,
        borderWidth: 0,
        borderRadius: 5,
        foreColor: "var(--on-surface)",
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: "#000",
          opacity: 0.45,
        },
      },
    },

    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          fontSize: "var(--fs-xs)",
          colors: "var(--on-surface)",
        },
      },
    },
    yaxis: {
      show: false,
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
    legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
    },
  };
  const dataSeries = [
    {
      name: "Male",
      data: maleSeries.map((item) => item.total),
    },
    {
      name: "Female",
      data: femaleSeries.map((item) => item.total),
    },
  ];
  return (
    <div class="chart">
      <Chart
        options={options}
        series={dataSeries}
        type="line"
        height="100%"
        max-width="750px"
      />
    </div>
  );
}

export default Gender;
