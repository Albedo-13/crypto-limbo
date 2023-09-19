import "./currencyItem.scss";

export const CurrencyItem = ({ coin }) => {
  // const { name } = props.coin;

  return (
    <section className="currency-item">
      <div className="container">
        <div className="currency-item-wrapper">
          <div className="currency-item-wrapper__main">
            <div className="currency-item-wrapper__header">
              <div style={{ backgroundColor: "red" }}>{coin?.name}</div>
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
