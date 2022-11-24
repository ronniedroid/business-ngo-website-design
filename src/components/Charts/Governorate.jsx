import { h } from "preact";
import Chart from "react-apexcharts";
import { useStore } from "@nanostores/preact";
import { currentCluster } from "@stores/store";
import "./Charts.css";

function Governorates({ month }) {
  const $currentCluster = useStore(currentCluster);
  const duhokSeries = month === "year" ? $currentCluster?.govs?.duhok : [];
  const ninevehSeries = month === "year" ? $currentCluster?.govs?.nineveh : [];
  const erbilSeries = month === "year" ? $currentCluster?.govs?.erbil : [];
  const options = {
    chart: {
      fontFamily: "Roboto, sans-serif",
      toolbar: {
        show: false,
      },
    },
    colors: [`#8397f2`, `#91094c`, "#FAE367"],
    dataLabels: {
      enabled: true,
      formatter: (val) => {
        return new Intl.NumberFormat("en", { notation: "compact" }).format(val);
      },
      style: {
        fontSize: "var(--font-size-1)",
        fontWeight: 500,
        colors: ["var(--surface2)"],
      },
      background: {
        enabled: true,
        opacity: 1,
        borderWidth: 0,
        borderRadius: 5,
        foreColor: "var(--text1)",
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
          fontSize: "var(--font-size-1)",
          colors: "var(--text1)",
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
      name: "Duhok",
      data: duhokSeries.map((item) => item.total),
    },
    {
      name: "Nineveh",
      data: ninevehSeries.map((item) => item.total),
    },
    {
      name: "Erbil",
      data: erbilSeries.map((item) => item.total),
    },
  ];
  return (
    <div class="chart">
      <Chart
        options={options}
        series={dataSeries}
        type="line"
        height="100%"
        width="100%"
      />
    </div>
  );
}

export default Governorates;
