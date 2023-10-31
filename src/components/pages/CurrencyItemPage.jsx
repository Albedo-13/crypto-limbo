import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../header/Header";
import { CurrencyItem } from "../currencyItem/CurrencyItem";
import { fetchCurrency } from "../../slices/currenciesSlice";

const CurrencyItemPage = () => {
  const { id } = useParams();
  const coin = useSelector((state) => state.currencies.singleCurrency);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency(id))
      .unwrap()
      .catch(() => navigate("/market", { replace: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{coin ? `${coin.name}: price & chart | Crypto Limbo` : `Crypto Limbo`}</title>
        <meta name="description" content={coin ? `Track the latest ${coin.name} price, market cap, trading volume and more with Crypto Limbo ${coin.symbol} price chart and popular cryptocurrency price tracker` : `Crypto Limbo`} />
      </Helmet>

      <Header />
      <main>
        <CurrencyItem />
      </main>
    </>
  );
};

export default CurrencyItemPage;
