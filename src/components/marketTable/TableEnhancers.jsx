import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

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

export const EnhancedTableToolbar = ({ selectedList, searchParam, onSearch }) => {
  const renderSelectedList = selectedList.map((selectedCurrency) => (
    <Button key={selectedCurrency.id} variant="text" component={Link} to={`/market/${selectedCurrency.id}`}>
      {selectedCurrency.symbol}
    </Button>
  ));

  return (
    <Toolbar className="mui-toolbar-market">
      <div className="bg-section-spray-small spray_dark" />
      <div className="market-table-watchlist">{renderSelectedList}</div>
      <TextField
        className="mui-searchbar"
        placeholder="Search Here"
        variant="outlined"
        name="search"
        defaultValue={searchParam}
        onChange={onSearch}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </Toolbar>
  );
};

export const EnhancedTableHead = ({ order, orderBy, onOrder }) => {
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
