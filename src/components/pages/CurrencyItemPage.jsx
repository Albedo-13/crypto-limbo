import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { CurrencyItem } from "../currencyItem/CurrencyItem";

import useCoingeckoService from "../../services/coingecko.api";

export const CurrencyItemPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const { getCurrencyById } = useCoingeckoService();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrencyById(id)
      .then((coin) => setCoin(coin))
      .catch(() => navigate("/market", { replace: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{coin ? `${coin.name}: price & chart | Crypto Limbo` : `Crypto Limbo`}</title>
      </Helmet>

      <Header />
      <main>
        <CurrencyItem coin={coin} />
      </main>
    </>
  );
};
