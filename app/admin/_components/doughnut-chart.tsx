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
      backgroundColor: ["#be185d", "#E70E8A", "#f9a8d4"],
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
  },
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
