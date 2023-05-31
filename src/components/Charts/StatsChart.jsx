import { h } from "preact";
import Chart from "react-apexcharts";
import "./Charts.css";

const StatsChart = ({ categories, data, chartName, orient, loga, budget }) => {

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
          position: "center",
          orientation: orient,
        },
      },
    },
    dataLabels: budget
      ? {
          enabled: true,
          formatter(val, opts) {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              notation: "compact",
            }).format(opts.w.globals.series[0][opts.dataPointIndex]);
          },
        }
      : {
          enabled: true,
          formatter(val, opts) {
            return new Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(opts.w.globals.series[0][opts.dataPointIndex]);
          },
        },
    colors: ["var(--text1)"],
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: "var(--text1)",
          fontSize: "var(--font-size-1)",
        },
      },
    },
    yaxis: {
      show: false,
      logarithmic: loga,
    },
    title: {
      text: chartName,
      align: "top",
      margin: 0,
      style: {
        fontSize: "16px",
        fontWeight: "300",
      },
    },
    grid: {
      show: true,
      borderColor: "var(--text1)",
      strokeDashArray: 2,
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd MMM",
      },
      y: budget
        ? {
            formatter(val, opts) {
              return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                notation: "compact",
              }).format(opts.w.globals.series[0][opts.dataPointIndex]);
            },
          }
        : {
            formatter(val, opts) {
              return new Intl.NumberFormat("en-US", {
                notation: "compact",
              }).format(opts.w.globals.series[0][opts.dataPointIndex]);
            },
          },
    },
  };
  const dataSeries = [
    {
      name: chartName,
      data: data
    },
  ];
  return (
    <div class="chart">
      <Chart
        options={options}
        series={dataSeries}
        type="bar"
        height="250px"
        width="100%"
      />
    </div>
  );
};

StatsChart.defaultProps = {
  data: [],
  categories: [],
  chartName: 'name',
  orient: 'hotizontal',
  loga: false,
  budget: false,
}
export default StatsChart;
