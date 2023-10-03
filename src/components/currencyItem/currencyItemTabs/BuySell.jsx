import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import classNames from "classnames";
import { buySellSchema } from "../../../utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

const FORM_ACTION_TYPES = [
  {
    action: "buy",
    color: "green",
  },
  {
    action: "sell",
    color: "red",
  },
];

// TODO: controlled form (https://www.react-hook-form.com/api/usecontroller/controller/)
// TODO: new porfolio slice

const percentButtonsData = [25, 50, 75, 100];

const BuySellForm = ({ variant, coin }) => {
  const [coinPrice, setCoinPrice] = useState("");
  const [coinQuantity, setCoinQuantity] = useState("");
  const [activeButtonValue, setActiveButtonValue] = useState(25);
  const formVariant = FORM_ACTION_TYPES.find((item) => variant === item.action);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(buySellSchema) });

  useEffect(() => {
    setValue("percent", activeButtonValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButtonValue]);

  const handlePriceChange = (e) => {
    setCoinPrice(e.target.value);
    const inputValue = e.target.value === "" ? 0 : e.target.value;
    const newQuantity = inputValue / coin.market_data.current_price["usd"];
    setCoinQuantity(newQuantity === 0 ? "" : newQuantity);
    setValue("quantity", newQuantity === 0 ? "" : newQuantity);
  };

  const handleQuantityChange = (e) => {
    setCoinQuantity(e.target.value);
    const inputValue = e.target.value === "" ? 0 : e.target.value;
    const newPrice = inputValue * coin.market_data.current_price["usd"];
    setCoinPrice(newPrice === 0 ? "" : newPrice);
    setValue("price", newPrice === 0 ? "" : newPrice);
  };

  const handleActiveButtonChange = (e) => {
    setActiveButtonValue(+e.target.value);
  };

  const onSubmit = (data) => {
    console.log("submitting", data);
    // reset();
  };

  const renderPercentButtons = (percentButtonsData) => {
    return percentButtonsData.map((value) => {
      const isActive = classNames({ active: activeButtonValue === value });
      return (
        <Button
          key={value}
          variant="outlined"
          value={value}
          onClick={handleActiveButtonChange}
          className={isActive}
          disabled={activeButtonValue === value}
        >
          {value}%
        </Button>
      );
    });
  };

  console.log(errors);
  const percentButtons = renderPercentButtons(percentButtonsData);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="buy-sell-form__wrapper">
        <RadioGroup aria-labelledby="radio buttons group" defaultValue="market" name="radio-buttons-group">
          <FormControlLabel {...register("tradeType")} value="market" control={<Radio />} label="Market" />
          <FormControlLabel {...register("tradeType")} value="limit" control={<Radio />} label="Limit" />
        </RadioGroup>
        <div className="buy-sell-form__balance">$ X,XXX,XXX.XX</div>
      </div>
      <div className="buy-sell-form__wrapper">
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          {...register("price")}
          type="number"
          value={coinPrice}
          onChange={handlePriceChange}
          error={!!errors.price?.message}
          autoComplete="transaction-amount"
          placeholder="Price (USD)"
        />
        <div className="buy-sell-form__helper buy-sell-form__helper_left">{errors.price?.message}</div>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          {...register("quantity")}
          type="number"
          value={coinQuantity}
          onChange={handleQuantityChange}
          error={!!errors.quantity?.message}
          placeholder={`Quantity (${coin.symbol.toUpperCase()})`}
        />
        <div className="buy-sell-form__helper buy-sell-form__helper_right">{errors.quantity?.message}</div>
      </div>
      <div>
        <p className="buy-sell-form__text">Order Value Min. $ 1 To Max. $ 100,000</p>
        <div className="buy-sell-form__btn-group" aria-label="outlined button group">
          {percentButtons}
        </div>
      </div>
      <Button
        sx={{
          width: "100%",
          marginTop: "28px",
        }}
        variant="contained"
        type="submit"
        className={`buy-sell-submit__${formVariant.action}`}
      >
        {formVariant.action[0].toUpperCase() + formVariant.action.slice(1)} {coin.symbol.toUpperCase()}
      </Button>
      <p className="buy-sell-form__text buy-sell-form__fees">Fees Includes- (0.1 %)</p>
    </form>
  );
};

export const BuySell = ({ coin }) => {
  return (
    <div className="buy-sell">
      <div className="buy-sell__wrapper">
        <div className="buy-sell-form">
          <BuySellForm variant="buy" coin={coin} />
        </div>
        <div className="buy-sell-form">
          <BuySellForm variant="sell" coin={coin} />
        </div>
      </div>
    </div>
  );
};
