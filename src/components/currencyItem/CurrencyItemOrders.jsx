import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";
import { EnhancedTableHead } from "../table/TableEnhancers";
import { useTable } from "../../hooks/table.hook";
import Spinner from "../spinner/Spinner";

const HEAD_CELLS = [
  {
    id: "name",
    alignRight: false,
    disablePadding: true,
    label: "Price (XXX)",
  },
  {
    id: "current_price",
    alignRight: true,
    disablePadding: false,
    label: "Qty. (XXX)",
  },
  {
    id: "price_change_percentage_24h",
    alignRight: true,
    disablePadding: false,
    label: "Total (XXX)",
  },
];

const CurrencyItemOrdersRow = ({ row }) => {
  const data = useSelector((state) => state.currencies.data);
  const filteredData = data.find((currency) => currency.id === row.coinId);

  console.log("data:", filteredData?.id, row.coinId);

  // const returnProfit = ((filteredData?.current_price - row.transaction_price) * row.quantity).toFixed(2);
  // const avgPrice24h = formatDigit((data.high_24h + data.low_24h) / 2);
  const { priceChangeStyle } = trendingPriceChange(228);

  return (
    <TableRow>
      <TableCell scope="row" className="table__dollar-prefix">
        {row.transaction_price}
      </TableCell>
      <TableCell className="">{row.quantity.toFixed(6)}</TableCell>
      <TableCell>
        <div className="table__dollar-prefix">{row.price}</div>
      </TableCell>
    </TableRow>
  );
};

export const CurrencyItemOrders = () => {
  const loadingStatus = useSelector((state) => state.currencies.loadingStatus);
  const { order, orderBy, handleOrderDebounced, sortedDataRows } = useTable("portfolio");

  const renderCurrencyItemOrders = () => {
    return (
      <aside className="orders">
        <div className="orders-filters">
          <p>order book</p>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </div>
        <TableContainer component={Paper} className="mui-table">
          <Table sx={{ minWidth: 1 }} aria-label="enhanced table">
            <EnhancedTableHead headCells={HEAD_CELLS} order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
            <TableBody>
              {sortedDataRows.map((row) => (
                <CurrencyItemOrdersRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </aside>
    );
  };

  return loadingStatus === "idle" ? renderCurrencyItemOrders() : <Spinner />;
};
