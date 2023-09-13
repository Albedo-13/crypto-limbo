import { useState } from "react";
import { useSelector } from "react-redux";

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

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";
import "./marketTable.scss";

// TODO: sorting algo to utils
// TODO: save bookmarks (redux? firebase? db is the best solution imo, temporarily into state)

// TODO на завтра:
// 1: преобразовать табличные данные ($, ,, стрелочки и разукрасить)
// 2: подгрузка элементов по кнопке (эдж кейс на 100 элементов - убрать кнопку)
// 2.5: bg spray))
// 3: букмарки и watchlist, временно сохранять в стейте массивом (сами бм - ссылки)
// 4: поисковая строка, проверить правильность поиска (arr.filter), проверить синергию с
// другим функционалом таблицы (фильтрами и тд).
// 5: Стили таблицы, вынести их в defaultMuiStyles? доделать другие TODOs.
// 6?: оптимизация, рефакторинг, memo, callback, проверить частоту ререндеров,
// сбилдить и посмотреть нагрузку, убрать console logs

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Coin Name",
  },
  {
    id: "current_price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "price_change_percentage_24h",
    numeric: true,
    disablePadding: false,
    label: "24h Change",
  },
  {
    id: "total_volume",
    numeric: true,
    disablePadding: false,
    label: "24h Volume",
  },
  {
    id: "high_24h",
    numeric: true,
    disablePadding: false,
    label: "24h High",
  },
  {
    id: "market_cap",
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

const transformData = (data) => {
  return data.map(
    ({ id, name, current_price, price_change_percentage_24h, total_volume, high_24h, market_cap }) => ({
      id,
      name,
      current_price,
      price_change_percentage_24h,
      total_volume,
      high_24h,
      market_cap,
    })
  );
};

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  // TODO: почистить пропсы и код

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
};

export const MarketTableRow = ({ row }) => {
  const { priceChangeStyles, TrendingIcon } = trendingPriceChange(row, "market-table__change");

  console.log(row.price_change_percentage_24h);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.current_price)}</TableCell>
      <TableCell>
        <div className={`${priceChangeStyles} market-table__percent-postfix`}>
          {TrendingIcon}
          {formatPercentage(row.price_change_percentage_24h)}
        </div>
      </TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.total_volume)}</TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.high_24h)}</TableCell>
      <TableCell className="market-table__dollar-prefix">{formatDigit(row.market_cap)}</TableCell>
      <TableCell>Trade</TableCell>
    </TableRow>
  );
};

export const MarketTable = () => {
  //! TODO: memoize useselector
  const data = useSelector((state) => state.currencies.data.slice(0, 10));

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

  const sortRows = (rows) => {
    const modifier = order === "desc" ? -1 : 1;
    return rows.sort((a, b) => comparator(a, b, orderBy, modifier));
  };

  const rows = transformData(data);
  const sortedRows = sortRows(rows);

  console.log("rerender", data);
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
              // rowCount={rows.length}
            />
            <TableBody>
              {sortedRows.map((row) => (
                <MarketTableRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};
