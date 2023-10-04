import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import { buySellSchema } from "../../../utils/validationSchemas";
import { useDispatch } from "react-redux";
import { buyCurrency, sellCurrency } from "../../../slices/portfolioSlice";

const FORM_ACTION_TYPES = ["buy", "sell"];

// TODO: controlled form (https://www.react-hook-form.com/api/usecontroller/controller/)
// TODO: new porfolio slice
// TODO: extend validation schema

const percentButtonsData = [25, 50, 75, 100];

const BuySellForm = ({ variant, coin, dispatchFunc }) => {
  const [coinPrice, setCoinPrice] = useState("");
  const [coinQuantity, setCoinQuantity] = useState("");
  const [percentButtonValue, setPercentButtonValue] = useState(25);
  const formVariant = FORM_ACTION_TYPES.find((action) => variant === action);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(buySellSchema) });
  const dispatch = useDispatch();

  useEffect(() => {
    transformSubmittedFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updatePercentButtonValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentButtonValue]);

  const updatePercentButtonValue = () => {
    setValue("percent", percentButtonValue);
  };

  const transformSubmittedFormData = () => {
    setValue("id", uuidv4());
    const coinData = {
      coinId: coin.id,
      symbol: coin.symbol,
      action: variant,
      price: coin.market_data.current_price["usd"],
      // timestamp: new Date().getTime(),
      // timestamp: Date.now(),
    };
    setValue("data", coinData);
  };

  const handlePriceChange = (e) => {
    setCoinPrice(e.target.value);
    const newQuantity = +e.target.value / coin.market_data.current_price["usd"];
    setCoinQuantity(newQuantity === 0 ? "" : newQuantity);
    setValue("quantity", newQuantity);
  };

  const handleQuantityChange = (e) => {
    setCoinQuantity(e.target.value);
    const newPrice = +e.target.value * coin.market_data.current_price["usd"];
    setCoinPrice(newPrice === 0 ? "" : newPrice);
    setValue("price", newPrice);
  };

  const handleActiveButtonChange = (e) => {
    setPercentButtonValue(+e.target.value);
  };

  const onSubmit = (data) => {
    console.log("submitting", data);
    if (!dispatchFunc) {
      throw new Error("Unknown dispatch function");
    }

    dispatch(dispatchFunc(data));
    // reset();
  };

  const renderPercentButtons = (percentButtonsData) => {
    return percentButtonsData.map((value) => {
      const isActive = classNames({ active: percentButtonValue === value });
      return (
        <Button
          key={value}
          variant="outlined"
          value={value}
          onClick={handleActiveButtonChange}
          className={isActive}
          disabled={percentButtonValue === value}
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
        className={`buy-sell-submit__${formVariant}`}
      >
        {formVariant[0].toUpperCase() + formVariant.slice(1)} {coin.symbol.toUpperCase()}
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
          <BuySellForm variant="buy" coin={coin} dispatchFunc={buyCurrency} />
        </div>
        <div className="buy-sell-form">
          <BuySellForm variant="sell" coin={coin} dispatchFunc={sellCurrency} />
        </div>
      </div>
    </div>
  );
};
