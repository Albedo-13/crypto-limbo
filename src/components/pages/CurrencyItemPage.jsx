import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../header/Header";
import { CurrencyItem } from "../currencyItem/CurrencyItem";
import { fetchCurrency } from "../../slices/currenciesSlice";

export const CurrencyItemPage = () => {
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
      </Helmet>

      <Header />
      <main>
        <CurrencyItem coin={coin} />
      </main>
    </>
  );
};
