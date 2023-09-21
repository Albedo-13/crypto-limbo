import variables from "../../styles/_variables.scss?inline";
import { convertScssToObject } from "../../utils/utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const colors = convertScssToObject(variables);

export const sparklineChartConfig = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    }
  },
  createChartData: (currencyData) => {
    const labels = ["24h ago", "Now"];

    return {
      labels,
      datasets: [
        {
          label: "Cost in $",
          data: [currencyData.current_price - currencyData.price_change_24h, currencyData.current_price],
          borderColor: currencyData.price_change_24h >= 0 ? `${colors.success}80` : `${colors.error}80`,
          backgroundColor: currencyData.price_change_24h >= 0 ? `${colors.success}b3` : `${colors.error}b3`,
          pointRadius: 8,
          pointHoverRadius: 10,
        },
      ],
    };
  },
};
