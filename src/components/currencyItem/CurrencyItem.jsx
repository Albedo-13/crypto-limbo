import React from "react";

import { CurrencyItemSelect } from "./CurrencyItemSelect";
import { CurrencyItemSummary } from "./CurrencyItemSummary";
import { CurrencyItemGraph } from "./CurrencyItemGraph";
import { CurrencyItemTabs } from "./currencyItemTabs/CurrencyItemTabs";

import "./currencyItem.scss";

// TODO?: Spinner? skeleton?
// TODO: tabs somewhere here (https://stackoverflow.com/questions/56972436/material-ui-button-active-style)

export const CurrencyItem = ({ coin }) => {
  console.log("currencyItem render", coin);
  return (
    <section className="currency-item">
      <div className="container">
        <div className="currency-item-wrapper">
          <div className="currency-item-wrapper__main">
            <div className="currency-item-wrapper__header">
              <CurrencyItemSelect coin={coin} />
              <CurrencyItemSummary coin={coin} />
            </div>
            <CurrencyItemGraph coin={coin} />
            <div className="currency-item-tabs">
              <CurrencyItemTabs />
            </div>
          </div>
          <div className="currency-item-order">
            <p>Order Book</p>
          </div>
        </div>
      </div>
    </section>
  );
};
