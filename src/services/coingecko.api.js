import { useHttp } from "../hooks/http.hook";
import { defaultCoingeckoApiSettings } from "./apiSettings";

const useCoingeckoService = () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, sparkline, locale } = defaultCoingeckoApiSettings;

  const getCurrencies = async () => {
    return await request(`${url}/coins/markets?vs_currency=${vsCurrency}&order=${order}&page=${1}&sparkline=${sparkline}&locale=${locale}`);
  }

  const getCurrenciesByCategory = async (category) => {
    return await request(
      `${url}/coins/markets?vs_currency=${vsCurrency}&category=${category}&order=${order}&sparkline=${sparkline}&locale=${locale}`
    );
  };

  const getCurrencyById = async (id) => {
    return await request(`${url}/coins/${id}`);
  };

  const getMarketDataById = async (id, days = 1) => {
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