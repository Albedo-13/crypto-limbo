import classNames from "classnames";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export const trendingPriceChange = (currencyPriceChange) => {
  const isPercentageIncreasing = currencyPriceChange >= 0;
  const TrendingIcon = isPercentageIncreasing ? (
    <TrendingUpIcon sx={{ fontSize: "20px" }} className="success" />
  ) : (
    <TrendingDownIcon sx={{ fontSize: "20px" }} className="error" />
  );
  const priceChangeStyle = classNames({
    success: isPercentageIncreasing,
    error: !isPercentageIncreasing,
  });
  return {
    priceChangeStyle,
    TrendingIcon,
  };
}
