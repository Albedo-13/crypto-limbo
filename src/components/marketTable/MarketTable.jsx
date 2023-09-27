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

import { addBookmark, removeBookmark } from "../../slices/bookmarksSlice";
import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";
import { EnhancedTableToolbar, EnhancedTableHead } from "./TableEnhancers";

import "./marketTable.scss";

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

export const MarketTable = (props) => {
  const {
    bookmarks,
    search,
    handleSearchDebounced,
    order,
    orderBy,
    handleOrderDebounced,
    sortedRows,
    isBookmarkChecked,
    handleCheck,
    loadMoreBtn
  } = props;

  return (
    <section className="market-table">
      <div className="container">
        <EnhancedTableToolbar bookmarksList={bookmarks} searchParam={search} onSearch={handleSearchDebounced} />
        <TableContainer component={Paper} className="mui-table">
          <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
            <EnhancedTableHead order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
            <TableBody>
              {sortedRows.map((row) => (
                <MarketTableRow
                  key={row.id}
                  row={row}
                  isChecked={isBookmarkChecked(row.id)}
                  onCheck={(e) => handleCheck(e, row)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {loadMoreBtn}
      </div>
    </section>
  );
};
