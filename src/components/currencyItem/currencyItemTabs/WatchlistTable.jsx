import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { trendingPriceChange } from "../../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../../utils/utils";
import { EnhancedTableHead } from "../../table/TableEnhancers";

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

const WatchlistTableRow = ({ row }) => {
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
        <Link className="table__currency-link" to={`/market/${row.id}`}>
          Trade
        </Link>
      </TableCell>
    </TableRow>
  );
};

export const WatchlistTable = (props) => {
  const { order, orderBy, handleOrderDebounced, sortedRows, isBookmarkChecked } = props;

  return (
    <TableContainer component={Paper} className="mui-table">
      <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
        <EnhancedTableHead headCells={headCells} order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
        <TableBody>
          {sortedRows.map((row) => (isBookmarkChecked(row.id) ? <WatchlistTableRow key={row.id} row={row} /> : null))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
