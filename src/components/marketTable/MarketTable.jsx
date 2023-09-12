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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};
