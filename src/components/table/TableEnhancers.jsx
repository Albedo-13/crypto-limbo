import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const EnhancedTableToolbar = ({ bookmarksList, searchParam, onSearch }) => {
  const renderBookmarksList = bookmarksList.map((bookmarkedCurrency) => (
    <Button key={bookmarkedCurrency.id} variant="text" component={Link} to={`/market/${bookmarkedCurrency.id}`}>
      {bookmarkedCurrency.symbol}
    </Button>
  ));

  return (
    <Toolbar className="mui-toolbar">
      <div className="bg-section-spray-small spray_dark" />
      <div className="table-watchlist">{renderBookmarksList}</div>
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

export const EnhancedTableHead = ({ headCells, order, orderBy, onOrder }) => {
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
