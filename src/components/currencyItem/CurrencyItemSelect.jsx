import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Spinner from "../spinner/Spinner";
import { useSelector } from "react-redux";

export const CurrencyItemSelect = ({ coin }) => {
  const bookmarks = useSelector((state) => state.bookmarks.data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const currencyId = e.target.value;
    navigate(`/market/${currencyId}`);
  };

  const isBookmarkChecked = (id) => {
    return bookmarks.some((bmark) => bmark.id === id);
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

    return bookmarks
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
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid white",
          },
        }}
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
