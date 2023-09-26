import React from "react";

import { CurrencyItemSelect } from "./CurrencyItemSelect";
import { CurrencyItemSummary } from "./CurrencyItemSummary";
import { CurrencyItemGraph } from "./CurrencyItemGraph";

import "./currencyItem.scss";

// TODO: 404 route to landing
// TODO?: Spinner? skeleton?
// TODO: on bookmark change drop fallback while fetching
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
            <div className="currency-item-trade">buy / sell + tabs</div>
          </div>
          <div className="currency-item-order">
            <p>Order Book</p>
          </div>
        </div>
      </div>
    </section>
  );
};
