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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  }
};

const labels = ["24h ago", "Now"];

export const createChartData = (currencyData) => {
  const colors = convertScssToObject(variables);

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
      }
    ],
  };
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
