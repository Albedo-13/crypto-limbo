import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CurrencyItemSelect } from "./CurrencyItemSelect";
import { CurrencyItemSummary } from "./CurrencyItemSummary";
import { CurrencyItemGraph } from "./CurrencyItemGraph";

import "./currencyItem.scss";

import useCoingeckoService from "../../services/coingecko.api";

// TODO: 404 route to landing
// TODO?: Spinner? skeleton?
// TODO: on bookmark change drop fallback while fetching

export const CurrencyItem = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const { getCurrencyById } = useCoingeckoService();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrencyById(id)
      .then((coin) => setCoin(coin))
      .catch(() => navigate("/market")); // TODO: handle error
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
            <CurrencyItemGraph />
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
