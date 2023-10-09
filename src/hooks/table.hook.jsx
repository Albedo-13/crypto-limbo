import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams } from "react-router-dom";

import Button from "@mui/material/Button";

import { addBookmark, removeBookmark } from "../slices/bookmarksSlice";
import { comparator } from "../utils/utils";

export const useTable = (dataSourceName) => {
  const data = useSelector((state) => {
    switch (dataSourceName) {
      case "currencies":
        return state.currencies.data;
      case "portfolio":
        return state.portfolio.portfolio;
    }
  });
  const bookmarks = useSelector((state) => state.bookmarks.data);
  const dispatch = useDispatch();
  
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("market_cap");

  const [displayedRowsNumber, setDisplayedRowsNumber] = useState(16);
  const incDisplayedRowsBy = 16;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";

  const handleSearch = (e) => {
    setSearchParams((params) => {
      params.set("q", e.target.value);
      return params;
    });
    if (!searchParams.get("q")) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
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
    if (e.target.checked) {
      const newSelectedCurrency = {
        id: row.id,
        symbol: row.symbol.toUpperCase(),
        name: row.name,
      };

      dispatch(addBookmark(newSelectedCurrency));
    } else {
      dispatch(removeBookmark(row.id));
    }
  };

  const sortByColumn = (rows) => {
    const modifier = order === "desc" ? -1 : 1;
    return rows.sort((a, b) => comparator(a, b, orderBy, modifier));
  };

  const sortBySearchbar = (rows) => {
    if (!search) {
      searchParams.delete("q");
    }

    const searchTransform = search.toLowerCase();
    return rows.filter((row) => row.id.includes(searchTransform));
  };

  const isBookmarkChecked = (id) => {
    return bookmarks.some((currency) => currency.id === id);
  };

  const rows = data.slice(0, displayedRowsNumber);
  const sortedDataRows = sortBySearchbar(sortByColumn(rows));

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

  return {
    bookmarks,
    search,
    order,
    orderBy,
    handleSearchDebounced,
    handleOrderDebounced,
    handleCheck,
    isBookmarkChecked,
    sortedDataRows,
    loadMoreBtn,
  };
};
