import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";

import { detailedChartConfig } from "../../services/chartsSettings";
import useCoingeckoService from "../../services/coingecko.api";
import { useDidUpdateEffect } from "../../hooks/didUpdate.hook";

const TOOLBAR_DATA = [
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

const GraphToolbar = ({ handleFetch, id }) => {
  const [activeButtonValue, setActiveButtonValue] = useState("1");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setActiveButtonValue("1");
  }, [id]);

  useEffect(() => {
    handleFetch(activeButtonValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButtonValue]);

  const handleFilter = (e) => {
    setActiveButtonValue(e.target.value);
    temporarilyDisableToolbar();
  };

  const handleRefresh = () => {
    handleFetch(activeButtonValue);
    temporarilyDisableToolbar();
  };

  const temporarilyDisableToolbar = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 5000);
  };

  const renderDateButtons = (toolbarData) => {
    return toolbarData.map((item) => {
      const isActive = classNames({ active: activeButtonValue === item.value });

      return (
        <Button
          key={item.value}
          value={item.value}
          onClick={handleFilter}
          className={isActive}
          disabled={activeButtonValue === item.value || isRefreshing}
        >
          {item.label}
        </Button>
      );
    });
  };

  const dateButtons = renderDateButtons(TOOLBAR_DATA);
  return (
    <div className="currency-item-graph-toolbar">
      <ButtonGroup variant="text" aria-label="market chart buttons group">
        {dateButtons}
      </ButtonGroup>
      <IconButton onClick={handleRefresh} disabled={isRefreshing} aria-label="refresh graph">
        <CachedIcon />
      </IconButton>
    </div>
  );
};

export const CurrencyItemGraph = () => {
  const { id } = useParams();
  const [prices, setPrices] = useState([]);
  const { getMarketDataById } = useCoingeckoService();
  const coin = useSelector((state) => state.currencies.singleCurrency);

  const { createChartData, options } = detailedChartConfig;
  const chartData = createChartData(coin, prices);

  const handleFetch = (days) => {
    getMarketDataById(id, days).then((data) => setPrices(data.prices));
  };

  useDidUpdateEffect(() => {
    handleFetch(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <GraphToolbar id={id} handleFetch={handleFetch} />
      <div className="currency-item-graph">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};
