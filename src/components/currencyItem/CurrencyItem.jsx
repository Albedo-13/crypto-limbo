import React from "react";

import { CurrencyItemSelect } from "./CurrencyItemSelect";
import { CurrencyItemSummary } from "./CurrencyItemSummary";
import { CurrencyItemGraph } from "./CurrencyItemGraph";
import { CurrencyItemTabs } from "./currencyItemTabs/CurrencyItemTabs";
import { CurrencyItemOrders } from "./CurrencyItemOrders";

import "./currencyItem.scss";

export const CurrencyItem = () => {
  return (
    <section className="currency-item">
      <div className="container">
        <div className="currency-item-wrapper">
          <div className="currency-item-wrapper__main">
            <div className="currency-item-wrapper__header">
              <CurrencyItemSelect />
              <CurrencyItemSummary />
            </div>
            <CurrencyItemGraph />
            <div className="currency-item-tabs">
              <CurrencyItemTabs />
            </div>
          </div>
          <CurrencyItemOrders />
        </div>
      </div>
    </section>
  );
};
