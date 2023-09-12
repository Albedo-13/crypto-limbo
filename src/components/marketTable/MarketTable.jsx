import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";

import { visuallyHidden } from "@mui/utils";

import "./marketTable.scss";

// TODO: sorting algo to utils
// TODO: save bookmarks (redux? firebase?)
function createData(name, price, change, volume, high, marketCap, action) {
  return { name, price, change, volume, high, marketCap, action };
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Coin Name",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "change",
    numeric: true,
    disablePadding: false,
    label: "24h Change",
  },
  {
    id: "volume",
    numeric: true,
    disablePadding: false,
    label: "24h Volume",
  },
  {
    id: "high",
    numeric: true,
    disablePadding: false,
    label: "24h High",
  },
  {
    id: "marketCap",
    numeric: true,
    disablePadding: false,
    label: "Market Cap",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

const rows = [
  createData("bitcoin", 27000, 5.76, 221412414, 4124124, 363636363, "Trade"),
  createData("etherium", 5000, -0.26, 32112414, 3214122, 321312322, "Trade"),
  createData("test", 1000, 1, 111111, 111111, 111111, "Trade"),
  createData("test1", 3000, 1, 111111, 111111, 111111, "Trade"),
  createData("test2", 2000, 1, 111111, 111111, 111111, "Trade"),
  createData("test3", 500, 1, 111111, 111111, 111111, "Trade"),
  createData("test4", 1500, 1, 111111, 111111, 111111, "Trade"),
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export const MarketTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");

  console.log(order, orderBy);
  // const [selected, setSelected] = useState([]);
  // const [dense, setDense] = useState(false);

  //! remove
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (headerId) => {
    const isAsc = orderBy === headerId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(headerId);
  };

  const comparator = (a, b, orderBy, modifier) => {
    if (a[orderBy] <= b[orderBy]) {
      return -1 * modifier;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1 * modifier;
    }
    return 0;
  };

  const sortRows = () => {
    const modifier = order === "desc" ? -1 : 1;
    return rows.sort((a, b) => comparator(a, b, orderBy, modifier));
  };

  const sortedRows = sortRows();
  return (
    <section className="market-table">
      <div className="container">
        {/* //! classes should be base start point */}
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
            <EnhancedTableHead
              // numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {sortedRows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.change}</TableCell>
                  <TableCell align="right">{row.volume}</TableCell>
                  <TableCell align="right">{row.high}</TableCell>
                  <TableCell align="right">{row.marketCap}</TableCell>
                  <TableCell align="right">{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};
