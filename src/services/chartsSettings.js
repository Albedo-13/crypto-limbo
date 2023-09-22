import variables from "../styles/_variables.scss?inline";
import { convertScssToObject, unixTimestampToDate, formatDigit } from "../utils/utils";

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
      mode: "index",
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${formatDigit(context.dataset.data[context.dataIndex])} $`;
          },
        },
      },
    },
  },
  createChartData: (currency, prices) => {
    const labels = prices.map((price) => unixTimestampToDate(price[0], "time"));
    const isPriceRaising24h = currency?.market_data.price_change_24h >= 0;

    return {
      labels,
      datasets: [
        {
          type: "line",
          label: `${currency?.name}`,
          data: prices.map((price) => price[1]),
          borderColor: isPriceRaising24h ? `${colors.success}b3` : `${colors.error}b3`,
          backgroundColor: colors.white,
          pointStyle: "rectDot",
          pointRadius: 0,
          pointHoverRadius: 4,
        },
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
    },
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
