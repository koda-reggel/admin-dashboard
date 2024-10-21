import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: true,
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const tooltips = [
            "Product Launched",
            "Ongoing Product",
            "Product Sold",
          ];
          const value = tooltipItem.raw;
          return `${tooltips[tooltipItem.dataIndex]}: ${value}`;
        },
      },
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["", "", ""];

const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [50, 200, 400],
      backgroundColor: "#14532d",
      borderRadius: 5,
    },
  ],
};

export default function HorizontalBarchart() {
  return <Bar options={options} data={data} />;
}
