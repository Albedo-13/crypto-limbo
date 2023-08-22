// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
const defaultApiSettings = {
  url: "https://api.coingecko.com/api/v3",
  vsCurrency: "usd",
  order: "market_cap_desc",
  page: 1,
  locale: "en",
};

export default defaultApiSettings;