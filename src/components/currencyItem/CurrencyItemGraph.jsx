import { Line } from "react-chartjs-2";
import { detailedChartConfig } from "../../services/chartsSettings";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCoingeckoService from "../../services/coingecko.api";

// TODO: convert unix timestamp to valid time (https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript)
// TODO: Custom Tooltip Content (https://www.chartjs.org/docs/latest/samples/tooltip/content.html)
// TODO?: vertical color line on contant (line in coingecko graph)
// TODO?: shadow drop
// TODO: chart toolbar

export const CurrencyItemGraph = ({ coin }) => {
  const { id } = useParams();
  const [prices, setPrices] = useState([]);
  const { getMarketDataById } = useCoingeckoService();

  const { createChartData, options } = detailedChartConfig;
  const chartData = createChartData(coin, prices);

  useEffect(() => {
    getMarketDataById(id, 1)
      .then((data) => setPrices(data.prices));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="currency-item-graph">
      <Line data={chartData} options={options} />
    </div>
  );
};
