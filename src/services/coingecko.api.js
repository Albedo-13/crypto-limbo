import { useHttp } from "../hooks/http.hook";
import { defaultCoingeckoApiSettings } from "./apiSettings";

const useCoingeckoService = () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, locale } = defaultCoingeckoApiSettings;

  const getCurrencies = async () => {
    console.log("* getCurrencies");
    return await request(`${url}/coins/markets?vs_currency=${vsCurrency}&order=${order}&page=${1}&locale=${locale}`);
  }

  const getCurrenciesByCategory = async (category) => {
    console.log("* getCurrenciesByCategory");
    return await request(
      `${url}/coins/markets?vs_currency=${vsCurrency}&category=${category}&order=${order}&locale=${locale}`
    );
  };

  const getCurrencyById = async (id) => {
    console.log("* getCurrencyById");
    return await request(`${url}/coins/${id}`);
  };

  const getMarketDataById = async (id, days = 1) => {
    console.log("* getMarketDataById");
    return await request(`${url}/coins/${id}/market_chart?vs_currency=${vsCurrency}&days=${days}`)
  }

  return {
    getCurrencies,
    getCurrenciesByCategory,
    getCurrencyById,
    getMarketDataById,
  }
}

export default useCoingeckoService;