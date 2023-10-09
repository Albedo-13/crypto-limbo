import { useTable } from "../../../hooks/table.hook";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { EnhancedTableHead } from "../../table/TableEnhancers";
import { trendingPriceChange } from "../../../utils/TrendingPriceChange";
import { formatPercentage, formatDigit } from "../../../utils/utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HEAD_CELLS = [
  {
    id: "coinId",
    alignRight: false,
    disablePadding: true,
    label: "Coin Name",
  },
  {
    id: "price",
    alignRight: true,
    disablePadding: false,
    label: "Invested",
  },
  {
    id: "price_change_percentage_24h",
    alignRight: true,
    disablePadding: false,
    label: "Return (USD)",
  },
  {
    id: "quantity",
    alignRight: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "high_24h",
    alignRight: true,
    disablePadding: false,
    label: "Avg. Price 24h",
  },
  {
    id: "action",
    alignRight: true,
    disablePadding: false,
    label: "Current Price",
  },
];

const PortfolioTabRow = ({ row }) => {
  const data = useSelector((state) => state.currencies.data.find((currency) => currency.id === row.coinId));
  const returnProfit = ((data.current_price - row.transaction_price) * row.quantity).toFixed(2);
  const avgPrice24h = formatDigit((data.high_24h + data.low_24h) / 2);
  const { priceChangeStyle } = trendingPriceChange(returnProfit);

  console.log("row", row);
  return (
    <TableRow>
      <TableCell component="th" scope="row" className="table-cell">
        <div className="table__image">
          <img className="undraggable" src={row.image} alt={row.name} />
        </div>
        {row.name} / {row.symbol.toUpperCase()}
      </TableCell>
      <TableCell className="table__dollar-prefix">{row.price}</TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} table__dollar-prefix`}>{returnProfit}</div>
      </TableCell>
      <TableCell>
        {row.quantity} {row.symbol.toUpperCase()}
      </TableCell>
      <TableCell className="table__dollar-prefix">{avgPrice24h}</TableCell>
      <TableCell className="table__dollar-prefix">{formatDigit(data.current_price)}</TableCell>
    </TableRow>
  );
};

export const PortfolioTab = () => {
  // const { portfolio, purchases, sales } = useSelector((state) => state.portfolio);
  const { order, orderBy, handleOrderDebounced, sortedDataRows } = useTable("portfolio");

  return (
    <TableContainer component={Paper} className="mui-table">
      <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
        <EnhancedTableHead headCells={HEAD_CELLS} order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
        <TableBody>
          {sortedDataRows.map((row) => (
            <PortfolioTabRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
