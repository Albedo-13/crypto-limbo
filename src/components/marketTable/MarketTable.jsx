import { useState } from "react";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
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

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage, comparator } from "../../utils/utils";
import "./marketTable.scss";

// TODO: sorting algo to utils
// TODO: save bookmarks (redux? firebase? db is the best solution imo, temporarily into state)

// TODO на завтра:
// 2: поисковая строка, проверить правильность поиска (arr.filter), проверить синергию с
// другим функционалом таблицы (фильтрами и тд).
// 3: bg spray
// 4: букмарки и watchlist, временно сохранять в стейте массивом (сами бм - ссылки)
// 5: Стили таблицы, вынести их в defaultMuiStyles? доделать другие TODOs.
// 6?: оптимизация, рефакторинг, memo, callback, проверить частоту ререндеров,
// сбилдить и посмотреть нагрузку, убрать console logs
// 7: transition group

const headCells = [
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
    label: "Price",
  },
  {
    id: "price_change_percentage_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h Change",
  },
  {
    id: "total_volume",
    alignRight: true,
    disablePadding: false,
    label: "24h Volume",
  },
  {
    id: "high_24h",
    alignRight: true,
    disablePadding: false,
    label: "24h High",
  },
  {
    id: "market_cap",
    alignRight: true,
    disablePadding: false,
    label: "Market Cap",
  },
  {
    id: "action",
    alignRight: true,
    disablePadding: false,
    label: "Action",
  },
];

const transformData = (data) => {
  return data.map(
    ({ id, name, symbol, current_price, price_change_percentage_24h, total_volume, high_24h, market_cap }) => ({
      id,
      name,
      symbol,
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

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const MarketTableRow = ({ row }) => {
  const { priceChangeStyles, TrendingIcon } = trendingPriceChange(row, "market-table__change");

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.name} / {row.symbol.toUpperCase()}
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
  const data = useSelector((state) => state.currencies.data);

  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("market_cap");

  const [displayedRowsNumber, setDisplayedRowsNumber] = useState(16);
  const incDisplayedRowsBy = 16;

  console.log(order, orderBy);

  // const [selected, setSelected] = useState([]);
  // const [dense, setDense] = useState(false);

  const handleRequestSort = (headerId) => {
    const isAsc = orderBy === headerId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(headerId);
  };

  const handleLoadMore = () => {
    console.log("load more");
    setDisplayedRowsNumber(() => displayedRowsNumber + incDisplayedRowsBy);
  };

  const sortRows = (rows) => {
    const modifier = order === "desc" ? -1 : 1;
    return rows.sort((a, b) => comparator(a, b, orderBy, modifier));
  };

  const rows = transformData(data.slice(0, displayedRowsNumber));
  const sortedRows = sortRows(rows);

  const loadMoreBtn =
    displayedRowsNumber >= data.length ? (
      ""
    ) : (
      <Button
        sx={{
          width: 240,
          display: "block",
          margin: "60px auto 0",
        }}
        variant="contained"
        onClick={handleLoadMore}
      >
        Load More
      </Button>
    );

  console.log("rerender", displayedRowsNumber);
  return (
    <section className="market-table">
      <div className="container">
        {/* //! classes should be base start point */}
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
            <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {sortedRows.map((row) => (
                <MarketTableRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {loadMoreBtn}
      </div>
    </section>
  );
};
