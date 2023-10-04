import { createSlice } from "@reduxjs/toolkit";

const initialState = { portfolio: [], purchases: [], sales: [] };

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

const isAbleToSell = (state, action) => {
  return state.portfolio.some(() => isPortfolioIncludesCoin(state, action) && isEnoughMoney(state, action));
}

const isEnoughMoney = (state, action) => {
  return state.portfolio.some((currency) => currency.quantity >= action.payload.quantity && currency.price >= action.payload.price);
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
      // if (isAbleToSell(state, action)) {
      //   state.sales = [...state.sales, action.payload];
      // }
    },


    test(state, action) {
      state.purchases = [...state.purchases, action.payload];
    },
  },
});

export const { buyCurrency, sellCurrency, test } = portfolioSlice.actions;
export default portfolioSlice.reducer;
