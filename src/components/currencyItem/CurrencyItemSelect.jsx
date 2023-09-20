import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Spinner from "../spinner/Spinner";

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

export const CurrencyItemSelect = ({ coin }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const currencyId = e.target.value;
    navigate(`/market/${currencyId}`);
  };

  const isBookmarkChecked = (id) => {
    return _BOOKMARKS.some((bmark) => bmark.id === id);
  };

  const renderMenuItems = () => {
    const currentCurrency = isBookmarkChecked(coin.id) ? null : (
      <MenuItem
        classes={{ root: "mui-option-bookmarks mui-option-bookmarks_not-bmarked" }}
        key={coin.id}
        value={coin.id}
      >
        <BookmarkBorderIcon />
        {coin.name}
      </MenuItem>
    );

    return _BOOKMARKS
      .map((bmark) => (
        <MenuItem classes={{ root: "mui-option-bookmarks" }} key={bmark.id} value={bmark.id}>
          <BookmarkIcon />
          {bmark.name}
        </MenuItem>
      ))
      .concat(currentCurrency);
  };

  const renderSelect = (coin) => {
    return (
      <Select
        classes={
          isBookmarkChecked(coin.id)
            ? { select: "mui-select-bookmarks" }
            : { select: "mui-select-bookmarks mui-select-bookmarks_not-bmarked" }
        }
        value={coin.id}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
      >
        {renderMenuItems()}
      </Select>
    );
  };

  return coin ? renderSelect(coin) : <Spinner />;
};
