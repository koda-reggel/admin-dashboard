import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["View Count", "Percentage", "Sales"],
  datasets: [
    {
      label: "",
      data: [12, 19, 3],
      backgroundColor: ["#a3e635", "#047857", "#f97316"],
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    // tooltip: {
    //   callbacks: {
    //     label: function (tooltipItem) {
    //       const tooltips = [
    //         "Product Launched",
    //         "Ongoing Product",
    //         "Product Sold",
    //       ];
    //       const value = tooltipItem.raw;
    //       return `${tooltips[tooltipItem.dataIndex]}: ${value}`;
    //     },
    //   },
    // },
  },
};

export default function DoughnutChart() {
  return (
    <div className="h-[225px]">
      <Doughnut data={data} options={options} />
    </div>
  );
}
