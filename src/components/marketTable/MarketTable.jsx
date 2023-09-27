import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";
import { EnhancedTableToolbar, EnhancedTableHead } from "../table/TableEnhancers";

import "./marketTable.scss";

const headCells = [
  {
    id: "name",
    alignRight: false,
    disablePadding: true,
    label: "Coin Name",
  },
  {
    id: "current_price",
    alignRight: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "price_change_percentage_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h Change",
  },
  {
    id: "total_volume",
    alignRight: true,
    disablePadding: false,
    label: "24h Volume",
  },
  {
    id: "high_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h High",
  },
  {
    id: "market_cap",
    alignRight: true,
    disablePadding: false,
    label: "Market Cap",
  },
  {
    id: "action",
    alignRight: true,
    disablePadding: false,
    label: "Action",
  },
];

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
      <TableCell className="table__dollar-prefix">{formatDigit(row.current_price)}</TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} table__change table__percent-postfix`}>
          {TrendingIcon}
          {formatPercentage(row.price_change_percentage_24h)}
        </div>
      </TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.total_volume)}</TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.high_24h)}</TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.market_cap)}</TableCell>
      <TableCell>
        <Link className="table__currency-link" to={`/market/${row.id}`}>
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
    loadMoreBtn,
  } = props;

  return (
    <section className="market-table">
      <div className="container">
        <EnhancedTableToolbar bookmarksList={bookmarks} searchParam={search} onSearch={handleSearchDebounced} />
        <TableContainer component={Paper} className="mui-table">
          <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
            <EnhancedTableHead headCells={headCells} order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
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
