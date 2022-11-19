import { h } from "preact";
import Chart from "react-apexcharts";
import { useState } from "preact/hooks";

function Gender() {
  const options = {
    chart: {
      fontFamily: "Roboto, sans-serif",
      background: "#00000000",
      toolbar: {
        show: false,
      },
    },
    theme: { mode: this.setTheme },
    colors: ["#4c4cff", "#a64ca6"],
    dataLabels: {
      enabled: true,
      formatter: (val) => {
        return new Intl.NumberFormat().format(val);
      },
      background: {
        enabled: true,
        opacity: 0.8,
        borderWidth: 0,
        borderRadius: 5,
      },
    },

    stroke: {
      curve: "smooth",
    },
    title: {
      text: "People Reached by Gender",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "300",
      },
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
    },
    yaxis: {
      show: false,
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
      data: this.maleSeries.map((item) => item.total),
    },
    {
      name: "Female",
      data: this.femaleSeries.map((item) => item.total),
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

export default Gender;
