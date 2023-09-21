import { Line } from "react-chartjs-2";
import { options } from "./chart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCoingeckoService from "../../services/coingecko.api";

// TODO: convert unix timestamp to valid time (https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript)
// TODO: custom index interaction window (https://www.chartjs.org/docs/latest/samples/tooltip/content.html)
// TODO: remove dots from graph
// TODO!: reorganize chart inits to one file
// TODO: graph color (compare first and last value 24h ago?);
// TODO?: vertical color line on contant (line in coingecko graph)
// TODO?: shadow drop
// TODO: chart toolbar

export const CurrencyItemGraph = () => {
  const { id } = useParams();
  const [prices, setPrices] = useState([]);
  const { getMarketDataById } = useCoingeckoService();

  useEffect(() => {
    getMarketDataById(id, 1)
      .then((data) => setPrices(data.prices));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const labels = prices.map((price) => price[0]);

  const data = {
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

  return (
    <div className="currency-item-graph">
      <Line data={data} options={options} />
    </div>
  );
};
