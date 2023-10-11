import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";
import { DefaultTableHead, EnhancedTableHead } from "../table/TableEnhancers";
import { useTable } from "../../hooks/table.hook";
import Spinner from "../spinner/Spinner";

const HEAD_CELLS = [
  {
    id: "transaction_price",
    alignRight: true,
    disablePadding: true,
    label: "Price",
  },
  {
    id: "quantity",
    alignRight: true,
    disablePadding: true,
    label: "Qty.",
  },
  {
    id: "price",
    alignRight: true,
    disablePadding: true,
    label: "Total",
  },
];

// TODO: дисплей только текущих позиций. у битка отображать историю только битков

const CurrencyItemOrdersRow = ({ row }) => {
  return (
    <TableRow>
      <TableCell className="table__dollar-prefix">{row.transaction_price}</TableCell>
      <TableCell className="">{row.quantity.toFixed(6)}</TableCell>
      <TableCell>
        <div className="table__dollar-prefix">{row.price}</div>
      </TableCell>
    </TableRow>
  );
};

const CurrencyItemOrdersTable = (dataSourceName, currentId) => {
  const { sortedDataRows } = useTable(dataSourceName);
  const filteredDataRows = sortedDataRows.filter((currency) => currency.coinId === currentId);

  return (
    <TableContainer component={Paper} className="mui-table mui-table-small">
      <Table stickyHeader sx={{ minWidth: 1 }} aria-label="enhanced table">
        <DefaultTableHead headCells={HEAD_CELLS} />
        <TableBody>
          {filteredDataRows.map((row) => (
            <CurrencyItemOrdersRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const CurrencyItemOrders = () => {
  const { id } = useParams();
  // console.log("id", id);
  // const loadingStatus = useSelector((state) => state.currencies.loadingStatus);
  // const { order, orderBy, handleOrderDebounced, sortedDataRows } = useTable(dataSourceName);
  // console.log(sortedDataRows.filter((currency) => currency.coinId ===));

  // const data = useSelector((state) => state.currencies.data);
  // const filteredData = data.find((currency) => currency.id === row.coinId);
  // const { priceChangeStyle } = trendingPriceChange(228);

  // const renderCurrencyItemOrders = () => {
  //   return (
  //     <aside className="orders">
  //       <div className="orders-filters">
  //         <p>order book</p>
  //         <Button>1</Button>
  //         <Button>2</Button>
  //         <Button>3</Button>
  //       </div>
  //       <div className="orders-tables">
  //         {renderCurrencyItemOrdersTable("purchases")}
  //         {/* {renderCurrencyItemOrdersTable("sales")} */}
  //       </div>
  //     </aside>
  //   );
  // };

  console.log("render CurrencyItemOrders");
  // return renderCurrencyItemOrders();
  return (
    <aside className="orders">
      <div className="orders-filters">
        <p>order book</p>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
      <div className="orders-tables">
        {CurrencyItemOrdersTable("purchases", id)}
        {CurrencyItemOrdersTable("sales", id)}
      </div>
    </aside>
  );
};
