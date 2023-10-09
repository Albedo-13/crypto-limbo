import { NavLink } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { trendingPriceChange } from "../../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../../utils/utils";
import { EnhancedTableHead } from "../../table/TableEnhancers";
import { useTable } from "../../../hooks/table.hook";
import classNames from "classnames";

const HEAD_CELLS = [
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
    id: "high_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h High",
  },
  {
    id: "low_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h Low",
  },
  {
    id: "action",
    alignRight: true,
    disablePadding: false,
    label: "Action",
  },
];

const WatchlistTableTabRow = ({ row }) => {
  const { priceChangeStyle, TrendingIcon } = trendingPriceChange(row.price_change_percentage_24h);

  return (
    <TableRow>
      <TableCell component="th" scope="row" className="table-cell">
        <div className="table__image">
          <img className="undraggable" src={row.image} alt={row.name} />
        </div>
        {row.name} / {row.symbol.toUpperCase()}
      </TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.current_price)}</TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} table__change table__percent-postfix`}>
          {TrendingIcon}
          {formatPercentage(row.price_change_percentage_24h)}
        </div>
      </TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.high_24h)}</TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.low_24h)}</TableCell>
      <TableCell>
        <NavLink
          className={({ isActive }) => classNames("table__currency-link", { "active": isActive })}
          to={`/market/${row.id}`}
        >
          Trade
        </NavLink>
      </TableCell>
    </TableRow>
  );
};

export const WatchlistTableTab = () => {
  const { order, orderBy, handleOrderDebounced, sortedDataRows, isBookmarkChecked } = useTable("currencies");

  return (
    <TableContainer component={Paper} className="mui-table">
      <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
        <EnhancedTableHead headCells={HEAD_CELLS} order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
        <TableBody>
          {sortedDataRows.map((row) =>
            isBookmarkChecked(row.id) ? <WatchlistTableTabRow key={row.id} row={row} /> : null
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
