import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../header/Header";
import { CurrencyItem } from "../currencyItem/CurrencyItem";

import { useHttp } from "../../hooks/http.hook";

// TODO: droplist with all tracked currencies. Bookmark ads/removes coin from db

export const CurrencyItemPage = () => {
  const { id } = useParams();
  const { request } = useHttp();

  const onFetch = async () => {
    const temp = await request(`https://api.coingecko.com/api/v3/coins/${id}`);
    console.log(temp);
  };

  useEffect(() => {
    onFetch();
  }, []);

  console.log(id);
  return (
    <>
      <Header />
      <main>
        <CurrencyItem />
      </main>
    </>
  );
};
