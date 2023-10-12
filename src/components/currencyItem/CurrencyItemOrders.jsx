import { useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { formatDigit } from "../../utils/utils";
import { DefaultTableHead } from "../table/TableEnhancers";
import { useTable } from "../../hooks/table.hook";

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
      <TableCell className="">{row.quantity.toFixed(6)}</TableCell>
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
        <h2 className="orders__header">Order book</h2>
      <hr className="h-line" />
      <div className="orders-tables">
        {CurrencyItemOrdersTable("purchases", id)}
        {CurrencyItemOrdersTable("sales", id)}
      </div>
    </aside>
  );
};
