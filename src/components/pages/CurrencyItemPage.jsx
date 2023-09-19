import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../header/Header";
import { CurrencyItem } from "../currencyItem/CurrencyItem";

import { useHttp } from "../../hooks/http.hook";

// TODO: droplist with all tracked currencies. Bookmark ads/removes coin from db

//!! TODO!!: change table & faq backgrounds

export const CurrencyItemPage = () => {
  const { id } = useParams();
  const { request } = useHttp();
  const [coin, setCoin] = useState();

  useEffect(() => {
    handleRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // useEffect(() => {
  //   // handleRequest();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleRequest = async () => {
    await request(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((coin) => setCoin(coin))
      .catch(() => setCoin({})); // TODO: handle error
    console.log("fetched");
  };

  return (
    <>
      <Header />
      <main>
        <CurrencyItem coin={coin} />
      </main>
    </>
  );
};
