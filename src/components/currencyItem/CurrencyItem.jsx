import { CurrencyItemSelect } from "./CurrencyItemSelect";

import "./currencyItem.scss";

// TODO: 404 route to landing

export const CurrencyItem = ({ coin }) => {
  console.log("currencyItem render");

  return (
    <section className="currency-item">
      <div className="container">
        <div className="currency-item-wrapper">
          <div className="currency-item-wrapper__main">
            <div className="currency-item-wrapper__header">
              <CurrencyItemSelect coin={coin} />
              <div style={{ backgroundColor: "red" }}>stats</div>
            </div>
            <div className="currency-item-graph">graph</div>
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
