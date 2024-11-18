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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
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
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const labels = ["", "", "", "", "", ""];

const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [12, 43, 56, 43, 65, 23],
      backgroundColor: "#9d174d",
      borderRadius: 5,
    },
    {
      label: "Expenses",
      data: [12, 43, 56, 43, 65, 23],
      backgroundColor: "#ec4899",
      borderRadius: 5,
    },
  ],
};

export default function VerticalBarchart() {
  return <Bar options={options} data={data} />;
}
