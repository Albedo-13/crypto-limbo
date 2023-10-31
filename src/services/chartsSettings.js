import variables from "../styles/_variables.scss?inline";
import { convertScssToObject, unixTimestampToDate, formatDigit } from "../utils/utils";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip);

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
        display: false,
      },
      title: {
        display: false,
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
    const labels = prices.map((price) => unixTimestampToDate(price[0]));
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
    events: [],
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
  },
  createChartData: (currency) => {
    const sparklineArray = currency.sparkline_in_7d.price ?? [];
    const labels = sparklineArray.map((_, i) => i);
    
    return {
      labels,
      datasets: [
        {
          label: "Cost in $",
          data: sparklineArray.map((price) => price),
          borderColor: currency.price_change_24h >= 0 ? `${colors.success}80` : `${colors.error}80`,
          backgroundColor: currency.price_change_24h >= 0 ? `${colors.success}b3` : `${colors.error}b3`,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    };
  },
};
