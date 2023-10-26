import { NavLink } from "react-router-dom";
import classNames from "classnames";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { trendingPriceChange } from "../../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage, hideOnMobileStyle } from "../../../utils/utils";
import { EnhancedTableHead } from "../../table/TableEnhancers";
import { useTable } from "../../../hooks/table.hook";

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
    hideOnMobile: false,
  },
  {
    id: "price_change_percentage_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h Change",
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
    id: "low_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h Low",
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

const WatchlistTableTabRow = ({ row }) => {
  const { priceChangeStyle, TrendingIcon } = trendingPriceChange(row.price_change_percentage_24h);

  return (
    <TableRow>
      <TableCell component="th" scope="row" className="table-cell">
        <div className="table__image">
          <img className="undraggable" src={row.image} alt={row.name} />
        </div>
        <NavLink
          className={({ isActive }) => classNames("mui-table-link", { active: isActive })}
          to={`/market/${row.id}`}
        >
          {row.name} / {row.symbol.toUpperCase()}
        </NavLink>
      </TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(row.current_price)}</TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} table__change table__percent-postfix`}>
          {TrendingIcon}
          {formatPercentage(row.price_change_percentage_24h)}
        </div>
      </TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {formatDigit(row.high_24h)}
      </TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {formatDigit(row.low_24h)}
      </TableCell>
      <TableCell sx={hideOnMobileStyle}>
        <NavLink
          className={({ isActive }) => classNames("table__currency-link", { active: isActive })}
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
      <Table aria-label="enhanced table">
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
