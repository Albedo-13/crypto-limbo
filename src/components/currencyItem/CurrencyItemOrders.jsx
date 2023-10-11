import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";
import { DefaultTableHead, EnhancedTableHead } from "../table/TableEnhancers";
import { useTable } from "../../hooks/table.hook";
import Spinner from "../spinner/Spinner";
import green from "../../assets/icons/order-filters/green.svg";
import red from "../../assets/icons/order-filters/red.svg";
import greenRed from "../../assets/icons/order-filters/green-red.svg";

const HEAD_CELLS = [
  {
    id: "transaction_price",
    alignRight: false,
    disablePadding: true,
    label: "Price",
  },
  {
    id: "quantity",
    alignRight: false,
    disablePadding: true,
    label: "Qty.",
  },
  {
    id: "price",
    alignRight: false,
    disablePadding: true,
    label: "Total",
  },
];

const CurrencyItemOrdersRow = ({ row }) => {
  return (
    <TableRow>
      <TableCell className="table__dollar-prefix">{formatDigit(row.transaction_price)}</TableCell>
      <TableCell className="">{row.quantity.toFixed(5)}</TableCell>
      <TableCell>
        <div className="table__dollar-prefix">{formatDigit(row.price)}</div>
      </TableCell>
    </TableRow>
  );
};

const CurrencyItemOrdersTable = (dataSourceName, currentId) => {
  const { sortedDataRows } = useTable(dataSourceName);
  const filteredDataRows = sortedDataRows.filter((currency) => currency.coinId === currentId);

  return (
    <TableContainer component={Paper} className={`orders-table orders-table-${dataSourceName}`}>
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

  console.log("render CurrencyItemOrders");
  return (
    <aside className="orders">
      <div className="orders-filters">
        <p className="orders__header">Order book</p>
        <Stack direction="row" variant="contained" aria-label="order filters button group">
          <IconButton aria-label="purchases filter">
            <img src={green} alt="purchases" />
          </IconButton>
          <IconButton aria-label="sales filter">
            <img src={red} alt="sales" />
          </IconButton>
          <IconButton aria-label="all filter">
            <img src={greenRed} alt="both" />
          </IconButton>
        </Stack>
      </div>
      <hr className="h-line" />
      <div className="orders-tables">
        {CurrencyItemOrdersTable("purchases", id)}
        {CurrencyItemOrdersTable("sales", id)}
      </div>
    </aside>
  );
};
