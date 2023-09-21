import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export const createChartData = (prices) => {
  const labels = prices.map((price) => price[0]);

  return {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        data: prices.map((price) => price[1]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   type: "bar",
      //   label: "Dataset 2",
      //   data: [400, 300, 200, 800, 500, 300, 200],
      //   borderColor: "rgb(53, 162, 235, 0.5)",
      //   backgroundColor: "rgba(53, 162, 235, 0.3)",
      // },
    ],
  };
}
