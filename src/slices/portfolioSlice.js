import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [
    {
      quantity: 0.04004,
      price: 1000,
      tradeType: 'market',
      id: '4b683e8a-fad6-443f-a55e-d11293534f8e',
      data: {
        coinId: 'bitcoin',
        symbol: 'btc',
        action: 'buy',
        price: 27444
      },
      percent: 25,
    },
  ], purchases: [], sales: []
};

const addToPortfolio = (state, action) => {
  state.purchases = [...state.purchases, action.payload];
  if (isPortfolioIncludesCoin(state, action)) {
    const index = state.portfolio.findIndex((currency => currency.data.coinId == action.payload.data.coinId));
    state.portfolio[index].price = (+state.portfolio[index].price + +action.payload.price).toFixed(2);
    state.portfolio[index].quantity = (+state.portfolio[index].quantity + +action.payload.quantity).toFixed(6);
  } else {
    state.portfolio = [...state.portfolio, action.payload];
  }
}

const removeFromPortfolio = (state, action) => {
  state.sales = [...state.sales, action.payload];
  const index = state.portfolio.findIndex((currency => currency.data.coinId == action.payload.data.coinId));
  if (state.portfolio[index].quantity - action.payload.quantity === 0) {
    state.portfolio = state.portfolio.filter((currency) => currency.data.coinId !== action.payload.data.coinId);
  } else {
    state.portfolio[index].price = (+state.portfolio[index].price - +action.payload.price).toFixed(2);
    state.portfolio[index].quantity = (+state.portfolio[index].quantity - +action.payload.quantity).toFixed(6);
  }
}

const isPortfolioIncludesCoin = (state, action) => {
  return state.portfolio.some((currency) => currency.data.coinId === action.payload.data.coinId);
}

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
