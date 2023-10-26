import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DefaultTableHead } from "../../table/TableEnhancers";
import { trendingPriceChange } from "../../../utils/TrendingPriceChange";
import { formatDigit, hideOnMobileStyle } from "../../../utils/utils";
import { useTable } from "../../../hooks/table.hook";

const HEAD_CELLS = [
  {
    id: "coinId",
    alignRight: false,
    disablePadding: true,
    label: "Coin Name",
    hideOnMobile: false,
  },
  {
    id: "price",
    alignRight: true,
    disablePadding: false,
    label: "Invested",
    hideOnMobile: true,
  },
  {
    id: "price_change_24h",
    alignRight: true,
    disablePadding: false,
    label: "Return (USD)",
    hideOnMobile: false,
  },
  {
    id: "quantity",
    alignRight: true,
    disablePadding: false,
    label: "Quantity",
    hideOnMobile: false,
  },
  {
    id: "avg_price_24h",
    alignRight: true,
    disablePadding: false,
    label: "Avg. Price 24h",
    hideOnMobile: true,
  },
  {
    id: "current_price",
    alignRight: true,
    disablePadding: false,
    label: "Current Price",
    hideOnMobile: true,
  },
];

const PortfolioTableTabRow = ({ row }) => {
  const data = useSelector((state) => state.currencies.data.find((currency) => currency.id === row.coinId));
  const returnProfit = ((data.current_price - row.transaction_price) * row.quantity).toFixed(2);
  const avgPrice24h = formatDigit((data.high_24h + data.low_24h) / 2);
  const { priceChangeStyle } = trendingPriceChange(returnProfit);

  return (
    <TableRow>
      <TableCell component="th" scope="row" className="table-cell">
        <div className="table__image">
          <img className="undraggable" src={row.image} alt={row.name} />
        </div>
        {row.name} / {row.symbol.toUpperCase()}
      </TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {row.price}
      </TableCell>
      <TableCell>
        <div className={`${priceChangeStyle} table__dollar-prefix`}>{returnProfit}</div>
      </TableCell>
      <TableCell>
        {(+row.quantity).toFixed(6)} {row.symbol.toUpperCase()}
      </TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {avgPrice24h}
      </TableCell>
      <TableCell sx={hideOnMobileStyle} className="table__dollar-prefix">
        {formatDigit(data.current_price)}
      </TableCell>
    </TableRow>
  );
};

export const PortfolioTableTab = () => {
  const { sortedDataRows } = useTable("portfolio");

  return (
    <TableContainer component={Paper} className="mui-table">
      <Table aria-label="enhanced table">
        <DefaultTableHead headCells={HEAD_CELLS} />
        <TableBody>
          {sortedDataRows.map((row) => (
            <PortfolioTableTabRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
