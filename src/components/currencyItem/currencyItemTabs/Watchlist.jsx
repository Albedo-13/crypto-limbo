import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { addBookmark, removeBookmark } from "../../../slices/bookmarksSlice";
import { trendingPriceChange } from "../../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage, comparator } from "../../../utils/utils";
import { EnhancedTableHead } from "../../marketTable/TableEnhancers";

const transformData = (data) => {
  return data.map(
    ({ id, name, symbol, current_price, price_change_percentage_24h, total_volume, high_24h, market_cap }) => ({
      id,
      name,
      symbol,
      current_price,
      price_change_percentage_24h,
      total_volume,
      high_24h,
      market_cap,
    })
  );
};

const MarketTableRow = ({ row, onCheck, isChecked }) => {
  const { priceChangeStyle, TrendingIcon } = trendingPriceChange(row.price_change_percentage_24h);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Checkbox
          className="mui-checkbox-bookmark"
          onChange={onCheck}
          checked={isChecked}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          inputProps={{ "aria-label": "watchlist bookmark" }}
        />
        {row.name} / {row.symbol.toUpperCase()}
      </TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.current_price)}</TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} market-table__change market-table__percent-postfix`}>
          {TrendingIcon}
          {formatPercentage(row.price_change_percentage_24h)}
        </div>
      </TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.total_volume)}</TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.high_24h)}</TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.market_cap)}</TableCell>
      <TableCell>
        <Link className="market-table__currency-link" to={`/market/${row.id}`}>
          Trade
        </Link>
      </TableCell>
    </TableRow>
  );
};

export const Watchlist = () => {
  const data = useSelector((state) => state.currencies.data);
  const bookmarks = useSelector((state) => state.bookmarks.data);
  const dispatch = useDispatch();

  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("market_cap");

  const [displayedRowsNumber, setDisplayedRowsNumber] = useState(16);
  const incDisplayedRowsBy = 16;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";

  const handleSearch = (e) => {
    setSearchParams((params) => {
      params.set("q", e.target.value);
      return params;
    });
    if (!searchParams.get("q")) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
  };
  const handleSearchDebounced = useDebouncedCallback(handleSearch, 350);

  const handleOrderBy = (headerId) => {
    const isAsc = orderBy === headerId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(headerId);
  };
  const handleOrderDebounced = useDebouncedCallback(handleOrderBy, 250);

  const handleLoadMore = () => {
    setDisplayedRowsNumber(() => displayedRowsNumber + incDisplayedRowsBy);
  };

  const sortByColumn = (rows) => {
    const modifier = order === "desc" ? -1 : 1;
    return rows.sort((a, b) => comparator(a, b, orderBy, modifier));
  };

  const sortBySearchbar = (rows) => {
    if (!search) {
      searchParams.delete("q");
    }

    const searchTransform = search.toLowerCase();
    return rows.filter((row) => row.id.includes(searchTransform));
  };

  const isBookmarkChecked = (id) => {
    return bookmarks.some((currency) => currency.id === id);
  };

  const rows = transformData(data.slice(0, displayedRowsNumber));
  const sortedRows = sortBySearchbar(sortByColumn(rows));

  return (
    <TableContainer component={Paper} className="mui-table">
      <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
        <EnhancedTableHead order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
        <TableBody>
          {sortedRows.map((row) => (
            <MarketTableRow key={row.id} row={row} isChecked={true} onCheck={(e) => handleCheck(e, row)} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
