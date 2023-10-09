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
    id: "name",
    alignRight: false,
    disablePadding: true,
    label: "Coin Name",
  },
  {
    id: "current_price",
    alignRight: true,
    disablePadding: false,
    label: "Invested",
  },
  {
    id: "price_change_percentage_24h",
    alignRight: true,
    disablePadding: false,
    label: "Avg. Return 24h (USD)",
  },
  {
    id: "high_24h",
    alignRight: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "low_24h",
    alignRight: true,
    disablePadding: false,
    label: "Avg. Buying Price",
  },
  {
    id: "action",
    alignRight: true,
    disablePadding: false,
    label: "Current Buying Price",
  },
];

const PortfolioTabRow = ({ row }) => {
  const { priceChangeStyle, TrendingIcon } = trendingPriceChange(row.price_change_percentage_24h);
  console.log("row", row);
  return (
    <TableRow>
      <TableCell component="th" scope="row" className="table-cell">
        <div className="table__image">
          <img className="undraggable" src={row.data.image} alt={row.data.name} />
        </div>
        {row.data.name} / {row.data.symbol.toUpperCase()}
      </TableCell>
      <TableCell className="table__dollar-prefix">{row.price}</TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} table__change table__percent-postfix`}>
          {TrendingIcon}
          test
        </div>
      </TableCell>
      <TableCell>
        {row.quantity} {row.data.symbol.toUpperCase()}
      </TableCell>
      <TableCell className="table__dollar-prefix">test</TableCell>
      <TableCell>test</TableCell>
    </TableRow>
  );
};

export const PortfolioTab = () => {
  const { portfolio, purchases, sales } = useSelector((state) => state.portfolio);
  const { order, orderBy, handleOrderDebounced, sortedDataRows } = useTable();
  // const { portfolio, purchases, sales }  = useSelector((state) => state.portfolio);

  return (
    // <div className="portfolio">
    <TableContainer component={Paper} className="mui-table">
      <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
        <EnhancedTableHead headCells={HEAD_CELLS} order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
        <TableBody>
          {portfolio.map((row) => (
            <PortfolioTabRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // </div>
  );
};
