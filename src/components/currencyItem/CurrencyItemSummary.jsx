import { useSelector } from "react-redux";

import Skeleton from "@mui/material/Skeleton";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";

export const CurrencyItemSummary = () => {
  const coin = useSelector((state) => state.currencies.singleCurrency);
  const { priceChangeStyle, TrendingIcon } = trendingPriceChange(coin?.market_data.price_change_percentage_24h);

  const renderSummary = (coin) => {
    const calculate24hVolume = (coin) => {
      return coin.tickers.reduce((accum, value) => accum + value.converted_volume.usd, 0);
    };

    const volume24h = calculate24hVolume(coin);
    return (
      <>
        <div className="currency-item-summary">
          <div className="currency-item-summary__wrapper">
            <div className="currency-item-summary__block">
              <div className="currency-item-summary__label">Current Price</div>
              <div className="currency-item-summary__cost">{formatDigit(coin.market_data.current_price.usd)}</div>
            </div>
            <div className="v-line_grey"></div>
            <div className="currency-item-summary__block">
              <div className="currency-item-summary__label">24h Change</div>
              <div className={`${priceChangeStyle} currency-item-summary__change`}>
                <div className="currency-item-summary__change-usd">
                  {formatDigit(coin.market_data.price_change_24h_in_currency.usd)}
                </div>
                <div className="currency-item-summary__change-percent">
                  {TrendingIcon}
                  {formatPercentage(coin.market_data.price_change_percentage_24h)}
                </div>
              </div>
            </div>
            <div className="v-line_grey"></div>
            <div className="currency-item-summary__block">
              <div className="currency-item-summary__label">24h Low</div>
              <div className="currency-item-summary__cost">{formatDigit(coin.market_data.low_24h.usd)}</div>
            </div>
            <div className="v-line_grey"></div>
            <div className="currency-item-summary__block">
              <div className="currency-item-summary__label">24h High</div>
              <div className="currency-item-summary__cost">{formatDigit(coin.market_data.high_24h.usd)}</div>
            </div>
            <div className="v-line_grey"></div>
            <div className="currency-item-summary__block">
              <div className="currency-item-summary__label">24h Volume (USD)</div>
              <div className="currency-item-summary__cost">{formatDigit(volume24h)}</div>
            </div>
          </div>
        </div>
        <div className="currency-item-mobile-summary">
          test!
        </div>
      </>
    );
  };

  return coin ? renderSummary(coin) : <Skeleton variant="rounded" animation="wave" width={"100%"} height={61} />;
};
