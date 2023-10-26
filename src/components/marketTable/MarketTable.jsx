import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage, hideOnMobileStyle } from "../../utils/utils";
import { EnhancedTableToolbar, EnhancedTableHead } from "../table/TableEnhancers";

import "./marketTable.scss";
import { useTable } from "../../hooks/table.hook";

const HEAD_CELLS = [
  {
    id: "name",
    alignRight: false,
    disablePadding: true,
    label: "Coin Name",
    hideOnMobile: false,
  },
  {
    id: "current_price",
    alignRight: true,
    disablePadding: false,
    label: "Price",
    hideOnMobile: true,
  },
  {
    id: "price_change_percentage_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h Change",
    hideOnMobile: false,
  },
  {
    id: "total_volume",
    alignRight: true,
    disablePadding: false,
    label: "24h Volume",
    hideOnMobile: false,
  },
  {
    id: "high_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h High",
    hideOnMobile: true,
  },
  {
    id: "market_cap",
    alignRight: true,
    disablePadding: false,
    label: "Market Cap",
    hideOnMobile: true,
  },
  {
    id: "action",
    alignRight: true,
    disablePadding: false,
    label: "Action",
    hideOnMobile: true,
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
        <Link className="mui-table-link" to={`/market/${row.id}`}>
          {row.name} / {row.symbol.toUpperCase()}
        </Link>
      </TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {formatDigit(row.current_price)}
      </TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} table__change table__percent-postfix`}>
          {TrendingIcon}
          {formatPercentage(row.price_change_percentage_24h)}
        </div>
      </TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.total_volume)}</TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {formatDigit(row.high_24h)}
      </TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {formatDigit(row.market_cap)}
      </TableCell>
      <TableCell sx={hideOnMobileStyle}>
        <Link className="table__currency-link" to={`/market/${row.id}`}>
          Trade
        </Link>
      </TableCell>
    </TableRow>
  );
};

export const MarketTable = () => {
  const {
    bookmarks,
    search,
    handleSearchDebounced,
    order,
    orderBy,
    handleOrderDebounced,
    sortedDataRows,
    isBookmarkChecked,
    handleCheck,
    loadMoreBtn,
  } = useTable("currencies");

  return (
    <section className="market-table">
      <div className="container">
        <div className="market-overview-mobile">
          <IconButton className="market-overview-mobile__back" component={Link} to={`/`}>
            <ArrowBackIcon />
          </IconButton>
          <h2 className="market-overview-mobile__title">Market Overview</h2>
        </div>
        <EnhancedTableToolbar bookmarksList={bookmarks} searchParam={search} onSearch={handleSearchDebounced} />
        <TableContainer component={Paper} className="mui-table">
          <Table aria-label="enhanced table">
            <EnhancedTableHead headCells={HEAD_CELLS} order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
            <TableBody>
              {sortedDataRows.map((row) => (
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
