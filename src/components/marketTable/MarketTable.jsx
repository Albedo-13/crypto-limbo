import { useState } from "react";
import { useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage, comparator } from "../../utils/utils";
import "./marketTable.scss";

// TODO: save bookmarks (redux? firebase? db is the best solution imo, temporarily into state)

// TODO на завтра:
// 5: Стили таблицы, вынести их в defaultMuiStyles? доделать другие TODOs.
// 6?: оптимизация, рефакторинг, memo, callback, проверить частоту ререндеров,
// сбилдить и посмотреть нагрузку, убрать console logs
// ?q=searchString, закинуть стейт в поисковую строку. Видео на ютубе было у того приятного парня

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

const EnhancedTableToolbar = ({ selectedList, onSearch }) => {
  const renderSelectedList = selectedList.map((selectedCurrency) => (
    <Button key={selectedCurrency.id} variant="text" component={Link} href="#">
      {selectedCurrency.symbol}
    </Button>
  ));

  return (
    <Toolbar className="mui-toolbar-market">
      <div className="bg-section-spray-small spray_dark"></div>

      <div className="market-table-watchlist">{renderSelectedList}</div>
      <TextField
        className="mui-searchbar"
        placeholder="Search Here"
        variant="outlined"
        name="search"
        onChange={onSearch}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </Toolbar>
  );
};

const EnhancedTableHead = ({ order, orderBy, onOrder }) => {
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
              onClick={() => onOrder(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const MarketTableRow = ({ row, onCheck, isChecked }) => {
  const { priceChangeStyles, TrendingIcon } = trendingPriceChange(row, "market-table__change");

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Checkbox
          className="mui-checkbox-bookmark"
          aria-label="watchlist bookmark"
          onChange={onCheck}
          checked={isChecked}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
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
  const data = useSelector((state) => state.currencies.data);

  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("market_cap");

  const [displayedRowsNumber, setDisplayedRowsNumber] = useState(16);
  const incDisplayedRowsBy = 16;

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchDebounced = useDebouncedCallback(handleSearch, 350);

  const handleOrderBy = (headerId) => {
    const isAsc = orderBy === headerId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(headerId);
  };
  const handleOrderDebounced = useDebouncedCallback(handleOrderBy, 250);

  const handleLoadMore = () => {
    setDisplayedRowsNumber(() => displayedRowsNumber + incDisplayedRowsBy);
  };

  const handleCheck = (e, row) => {
    console.log("handleCheck: ", row.symbol, e.target.checked);

    if (e.target.checked) {
      const newSelectedCurrency = {
        id: row.id,
        symbol: row.symbol.toUpperCase(),
      };

      setSelected([...selected, newSelectedCurrency]);
    } else {
      const filterSelected = selected.filter((currency) => currency.id !== row.id);
      setSelected(filterSelected);
    }
  };

  const sortByColumn = (rows) => {
    const modifier = order === "desc" ? -1 : 1;
    return rows.sort((a, b) => comparator(a, b, orderBy, modifier));
  };

  const sortBySearchbar = (rows) => {
    const searchTransform = search.toLowerCase();
    return rows.filter((row) => row.id.includes(searchTransform));
  };

  const isBookmarkChecked = (id) => {
    return selected.some((currency) => currency.id === id);
  };

  const rows = transformData(data.slice(0, displayedRowsNumber));
  const sortedRows = sortBySearchbar(sortByColumn(rows));

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
        disabled={!!search}
      >
        Load More
      </Button>
    );

  console.log("rerender");
  return (
    <section className="market-table">
      <div className="container">
        <EnhancedTableToolbar selectedList={selected} onSearch={handleSearchDebounced} />
        <TableContainer component={Paper} className="mui-table">
          <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
            <EnhancedTableHead order={order} orderBy={orderBy} onOrder={handleOrderDebounced} />
            <TableBody>
              {sortedRows.map((row) => (
                <MarketTableRow
                  key={row.id}
                  row={row}
                  isChecked={isBookmarkChecked(row.id)}
                  onCheck={(e) => handleCheck(e, row)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {loadMoreBtn}
      </div>
    </section>
  );
};
