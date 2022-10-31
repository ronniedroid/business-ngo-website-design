import { h } from "preact";
import Chart from "react-apexcharts";
import { useStore } from "@nanostores/preact";
import { series } from "../../stores/store";

const DistrictsChart = () => {
  const $series = useStore(series);
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
      position: top,
      offsetY: -30,
      style: {
        colors: ["#00000090"],
      },
      formatter(val, opts) {
        return new Intl.NumberFormat().format(
          opts.w.globals.series[0][opts.dataPointIndex]
        );
      },
    },
    colors: "var(--brand)",
    xaxis: {
      categories: ["a", "b", "c"],
      labels: { rotate: -30 },
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
      data: [1, 3, 4],
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
      <p>{$series}</p>
    </div>
  );
};

export default DistrictsChart;
