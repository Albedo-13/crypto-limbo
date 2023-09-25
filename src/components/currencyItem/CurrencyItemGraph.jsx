import { Line } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";

import { detailedChartConfig } from "../../services/chartsSettings";
import useCoingeckoService from "../../services/coingecko.api";

// TODO: convert unix timestamp to valid time (https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript)
// TODO: Custom Tooltip Content (https://www.chartjs.org/docs/latest/samples/tooltip/content.html)

const toolbarData = [
  {
    value: "1",
    label: "1D",
  },
  {
    value: "2",
    label: "2D",
  },
  {
    value: "7",
    label: "7D",
  },
  {
    value: "30",
    label: "1M",
  },
  {
    value: "60",
    label: "2M",
  },
  {
    value: "180",
    label: "6M",
  },
  {
    value: "max",
    label: "All",
  },
];

const GraphToolbar = ({ handleFetch }) => {
  const [activeButtonValue, setActiveButtonValue] = useState("1");
  const buttonGroupRef = useRef(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    handleFetch(activeButtonValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButtonValue]);

  const handleFilter = (e) => {
    console.log("click", e.target.value);
    setActiveButtonValue(e.target.value);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    handleFetch(activeButtonValue);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 5000);
  };

  const renderDateButtons = (toolbarData) => {
    return toolbarData.map((item) => {
      return (
        <Button key={item.value} value={item.value} disabled={activeButtonValue === item.value} onClick={handleFilter}>
          {item.label}
        </Button>
      );
    });
  };

  const dateButtons = renderDateButtons(toolbarData);
  return (
    <div className="currency-item-graph-toolbar">
      <div>plchldr</div>
      <ButtonGroup ref={buttonGroupRef} variant="text" aria-label="text button group">
        {dateButtons}
      </ButtonGroup>
      <div>
        <IconButton onClick={handleRefresh} disabled={isRefreshing} aria-label="refresh graph">
          <CachedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export const CurrencyItemGraph = ({ coin }) => {
  const { id } = useParams();
  const [prices, setPrices] = useState([]);
  const { getMarketDataById } = useCoingeckoService();

  const { createChartData, options } = detailedChartConfig;
  const chartData = createChartData(coin, prices);

  const handleFetch = (days) => {
    return getMarketDataById(id, days).then((data) => setPrices(data.prices));
  };

  useEffect(() => {
    handleFetch(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <GraphToolbar handleFetch={handleFetch} />
      <div className="currency-item-graph">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};
