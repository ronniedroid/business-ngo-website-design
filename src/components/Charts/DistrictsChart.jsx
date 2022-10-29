import { h } from "preact";
import Chart from "react-apexcharts";

const DistrictsChart = () => {
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
      categories: [
        "Akre",
        "Al-Hadar",
        "Al-Hamdaniya",
        "Al-Mosul",
        "Amedi",
        "Bardarash",
        "Duhok",
        "Erbil",
        "Shekhan",
        "Sinjar",
        "Sumel",
        "Tel Afer",
        "Tel Kaif",
        "Zakho",
      ],
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
      data: [
        2323, 278, 2659, 30315, 1023, 21279, 46734, 265, 9390, 982, 49007, 3544,
        644, 32698,
      ],
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

export default DistrictsChart;
