import { useHttp } from "../hooks/http.hook";
import { defaultCoingeckoApiSettings } from "./apiSettings";

const useCoingeckoService = () => {
  const { request } = useHttp();
  const { url, vsCurrency, order, page, locale } = defaultCoingeckoApiSettings;

  const getCurrencies = async () => {
    return await request(`${url}/coins/markets?vs_currency=${vsCurrency}&order=${order}&page=${page}&locale=${locale}`);
  }

  const getCurrenciesByCategory = async (category) => {
    return await request(
      `${url}/coins/markets?vs_currency=${vsCurrency}&category=${category}&order=${order}&locale=${locale}`
    );
  };

  const getCurrencyById = async (id) => {
    return await request(`${url}/coins/${id}`)
  };

  return {
    getCurrencies,
    getCurrenciesByCategory,
    getCurrencyById,
  }
}

export default useCoingeckoService;