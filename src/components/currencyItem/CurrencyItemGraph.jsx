import { Line } from "react-chartjs-2";
import { data, options } from "./chart";
import { useEffect } from "react";

export const CurrencyItemGraph = ({ coin }) => {

  useEffect(() => {
    
  }, []);

  return (
    <div className="currency-item-graph">
      <Line data={data} options={options} />
    </div>
  );
};
