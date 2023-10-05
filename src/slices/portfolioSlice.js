import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [
    {
      quantity: '0.00404',
      price: '111',
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
  if (isPortfolioIncludesCoin(state, action)) {
    const index = state.portfolio.findIndex((currency => currency.data.coinId == action.payload.data.coinId));
    console.log(index);
    state.portfolio[index].price = +state.portfolio[index].price + +action.payload.price;
    state.portfolio[index].quantity = +state.portfolio[index].quantity + +action.payload.quantity;
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
    state.portfolio[index].price = +state.portfolio[index].price - +action.payload.price;
    state.portfolio[index].quantity = +state.portfolio[index].quantity - +action.payload.quantity;
  }
}

// const isAbleToSell = (state, action) => {
//   return isPortfolioIncludesCoin(state, action) && isEnoughMoney(state, action);
// }

const isEnoughMoney = (state, action) => {
  return state.portfolio.some((currency) => isPortfolioIncludesCoin(state, action) && currency.quantity >= action.payload.quantity);
}

const isPortfolioIncludesCoin = (state, action) => {
  return state.portfolio.some((currency) => currency.data.coinId === action.payload.data.coinId);
}

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    buyCurrency(state, action) {
      state.purchases = [...state.purchases, action.payload];
      addToPortfolio(state, action);
    },
    sellCurrency(state, action) {
      if (isEnoughMoney(state, action)) {
        removeFromPortfolio(state, action);
      }
    },


    test(state, action) {
      state.purchases = [...state.purchases, action.payload];
    },
  },
});

export const { buyCurrency, sellCurrency, test } = portfolioSlice.actions;
export default portfolioSlice.reducer;