import variables from "../styles/_variables.scss?inline";
import { convertScssToObject,unixTimestampToDate } from "../utils/utils";

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

const colors = convertScssToObject(variables);

export const detailedChartConfig = {
  options: {
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
  },
  createChartData: (currency, prices) => {
    const labels = prices.map((price) => unixTimestampToDate(price[0]));
    const isPriceRaising24h = currency?.market_data.price_change_24h >= 0;

    return {
      labels,
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          data: prices.map((price) => price[1]),
          borderColor: isPriceRaising24h ? `${colors.success}80` : `${colors.error}80`,
          backgroundColor: isPriceRaising24h ? `${colors.success}b3` : `${colors.error}b3`,
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
  },
};

export const sparklineChartConfig = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    }
  },
  createChartData: (currency) => {
    const labels = ["24h ago", "Now"];

    return {
      labels,
      datasets: [
        {
          label: "Cost in $",
          data: [currency.current_price - currency.price_change_24h, currency.current_price],
          borderColor: currency.price_change_24h >= 0 ? `${colors.success}80` : `${colors.error}80`,
          backgroundColor: currency.price_change_24h >= 0 ? `${colors.success}b3` : `${colors.error}b3`,
          pointRadius: 8,
          pointHoverRadius: 10,
        },
      ],
    };
  },
};
