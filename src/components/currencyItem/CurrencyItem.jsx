import React, { useState } from "react";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { CurrencyItemSelect } from "./CurrencyItemSelect";
import { CurrencyItemSummary } from "./CurrencyItemSummary";
import { CurrencyItemGraph } from "./CurrencyItemGraph";
import { CurrencyItemTabs } from "./currencyItemTabs/CurrencyItemTabs";
import { CurrencyItemOrders } from "./CurrencyItemOrders";

import "./currencyItem.scss";

export const CurrencyItem = () => {
  const [isTabsMenuOpen, setIsTabsMenuOpen] = useState(false);

  const handleTabsMenuClickOpen = () => {
    setIsTabsMenuOpen(true);
  };

  const handleTabsMenuClickClose = () => {
    setIsTabsMenuOpen(false);
  };

  return (
    <section className="currency-item">
      <div className="container">
        <div className="currency-item-wrapper">
          <div className="currency-item-wrapper__main">
            <div className="market-overview-mobile">
              <IconButton className="market-overview-mobile__back" component={Link} to={`/market`}>
                <ArrowBackIcon />
              </IconButton>
              <h2 className="market-overview-mobile__title">Market Overview</h2>
              <IconButton className="market-overview-mobile__more" onClick={handleTabsMenuClickOpen}>
                <MoreVertIcon />
              </IconButton>
            </div>
            <div className="currency-item-wrapper__header">
              <CurrencyItemSelect />
              <CurrencyItemSummary />
            </div>
            <CurrencyItemGraph />
            <div className="currency-item-tabs">
              <CurrencyItemTabs handleTabsMenuClickClose={handleTabsMenuClickClose} isTabsMenuOpen={isTabsMenuOpen} />
            </div>
          </div>
          <CurrencyItemOrders />
        </div>
      </div>
    </section>
  );
};
