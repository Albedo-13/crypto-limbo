import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import BookmarkIcon from "@mui/icons-material/Bookmark";

import Spinner from "../spinner/Spinner";

import "./currencyItem.scss";

// TODO: replace hardcode data with server bookmarks (firebase)
const _BOOKMARKS = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
  },
  {
    id: "tether",
    symbol: "USDT",
    name: "Tether",
  },
  {
    id: "binancecoin",
    symbol: "BNB",
    name: "BNB",
  },
  {
    id: "ripple",
    symbol: "XRP",
    name: "XRP",
  },
];

export const CurrencyItem = ({ coin }) => {
  console.log("currencyItem render");

  return (
    <section className="currency-item">
      <div className="container">
        <div className="currency-item-wrapper">
          <div className="currency-item-wrapper__main">
            <div className="currency-item-wrapper__header">
              <CurrencyItemSelect coin={coin} />
              <div style={{ backgroundColor: "red" }}>stats</div>
            </div>
            <div className="currency-item-graph">graph</div>
            <div className="currency-item-trade">buy / sell + tabs</div>
          </div>
          <div className="currency-item-order">
            <p>Order Book</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CurrencyItemSelect = ({ coin }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const currencyId = e.target.value;
    navigate(`/market/${currencyId}`);
  };

  const renderSelect = (coin) => {
    return (
      <div>
        <p>{coin.name}</p>
        <Select
          classes={{ select: "mui-bookmarks-select" }}
          value={coin.id ?? ""}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          {_BOOKMARKS.map((bmark) => (
            <MenuItem classes={{ root: "mui-menu-item" }} key={bmark.id} value={bmark.id ?? ""}>
              <BookmarkIcon />
              {`${bmark.name}`}
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  };

  return coin ? renderSelect(coin) : <Spinner />;
};
