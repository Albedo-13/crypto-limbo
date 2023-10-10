import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [
    {
      quantity: 0.420000,
      price: 1111.36,
      id: "f53eb767-59cb-4dd5-bd3e-39f83ce14e8a",
      tradeType: "market",
      coinId: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      action: "buy",
      transaction_price: 27784,
      image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400",
    },
    {
      quantity: 0.500000,
      price: 808.63,
      id: "c63d4d9d-58be-4d9c-9486-28bd1c84f8ae",
      tradeType: "market",
      coinId: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      action: "buy",
      transaction_price: 1617.27,
      image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628",
    },
  ],
  purchases: [
    {
      quantity: 0.420001,
      price: 1111.36,
      id: "f53eb767-59cb-4dd5-bd3e-39f83ce14e8a",
      tradeType: "market",
      coinId: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      action: "buy",
      transaction_price: 27784,
      image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400",
    },
    {
      quantity: 0.500001,
      price: 808.63,
      id: "c63d4d9d-58be-4d9c-9486-28bd1c84f8ae",
      tradeType: "market",
      coinId: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      action: "buy",
      transaction_price: 1617.27,
      image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628",
    },
  ],
  sales: [],
};

const addToPortfolio = (state, action) => {
  state.purchases = [...state.purchases, action.payload];
  if (isPortfolioIncludesCoin(state, action)) {
    const index = state.portfolio.findIndex((currency) => currency.coinId == action.payload.coinId);
    state.portfolio[index].price = (+state.portfolio[index].price + +action.payload.price).toFixed(2);
    state.portfolio[index].quantity = (+state.portfolio[index].quantity + +action.payload.quantity).toFixed(6);
    state.portfolio[index].transaction_price = (+action.payload.transaction_price).toFixed(2);
  } else {
    state.portfolio = [...state.portfolio, action.payload];
  }
};

const removeFromPortfolio = (state, action) => {
  state.sales = [...state.sales, action.payload];
  const index = state.portfolio.findIndex((currency) => currency.coinId == action.payload.coinId);
  if (state.portfolio[index].quantity - action.payload.quantity === 0) {
    state.portfolio = state.portfolio.filter((currency) => currency.coinId !== action.payload.coinId);
  } else {
    state.portfolio[index].price = (+state.portfolio[index].price - +action.payload.price).toFixed(2);
    state.portfolio[index].quantity = (+state.portfolio[index].quantity - +action.payload.quantity).toFixed(6);
  }
};

const isPortfolioIncludesCoin = (state, action) => {
  return state.portfolio.some((currency) => currency.coinId === action.payload.coinId);
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    buyCurrency(state, action) {
      addToPortfolio(state, action);
    },
    sellCurrency(state, action) {
      removeFromPortfolio(state, action);
    },
  },
});

export const { buyCurrency, sellCurrency } = portfolioSlice.actions;
export default portfolioSlice.reducer;
