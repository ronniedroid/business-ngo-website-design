import { h } from "preact";
import Chart from "react-apexcharts";
import { useStore } from "@nanostores/preact";
import { dashboardData } from "@stores/store";
import "./Charts.css";

function Governorates() {
  const { gov } = useStore(dashboardData);
  const duhokSeries = gov ? gov?.duhok : [];
  const ninevehSeries = gov ? gov?.nineveh : [];
  const erbilSeries = gov ? gov.erbil : [];
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
