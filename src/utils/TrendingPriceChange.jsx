import classNames from "classnames";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export const trendingPriceChange = (currency, styles) => {
  const isPercentageIncreasing = currency.price_change_percentage_24h >= 0;
  const TrendingIcon = isPercentageIncreasing ? (
    <TrendingUpIcon sx={{ fontSize: "20px" }} className="success" />
  ) : (
    <TrendingDownIcon sx={{ fontSize: "20px" }} className="error" />
  );
  const priceChangeStyles = classNames(styles, {
    success: isPercentageIncreasing,
    error: !isPercentageIncreasing,
  });

  return {
    priceChangeStyles,
    TrendingIcon,
  };
}
