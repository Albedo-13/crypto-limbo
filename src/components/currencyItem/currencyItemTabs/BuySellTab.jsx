import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import { buySellSchema } from "../../../utils/validationSchemas";
import { buyCurrency, sellCurrency } from "../../../slices/portfolioSlice";
import { CustomSnackbar } from "../../snackbars/Snackbars";
import { useSnackbar } from "../../../hooks/snackbar.hook";

const FORM_ACTION_TYPES = ["buy", "sell"];
const PERCENT_BUTTON_VALUES = [25, 50, 75, 100];

const BuySellTabForm = ({ variant, coin, dispatchAction, handleSnackOpen }) => {
  const [percentButtonValue, setPercentButtonValue] = useState(25);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    trigger,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(buySellSchema) });
  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.portfolio.portfolio);
  const formVariant = FORM_ACTION_TYPES.find((action) => variant === action);

  useEffect(() => {
    updatePercentButtonValue();
  }, [percentButtonValue]);

  useEffect(() => {
    reset();
    setAdditionalFormData(coin);
  }, [isSubmitSuccessful, coin]);

  const updatePercentButtonValue = () => {
    setValue("percent", percentButtonValue);
  };

  const setAdditionalFormData = (coin) => {
    setValue("id", uuidv4());
    setValue("coinId", coin.id);
    setValue("symbol", coin.symbol);
    setValue("name", coin.name);
    setValue("action", variant);
    setValue("transaction_price", coin.market_data.current_price["usd"]);
    setValue("image", coin.image.small);
  };

  const handlePriceChange = (e) => {
    const newQuantity = +e.target.value / coin.market_data.current_price["usd"];
    newQuantity ? setValue("quantity", newQuantity.toFixed(6)) : setValue("quantity", "");
    trigger();
  };

  const handleQuantityChange = (e) => {
    const newPrice = +e.target.value * coin.market_data.current_price["usd"];
    newPrice ? setValue("price", newPrice.toFixed(2)) : setValue("price", "");
    trigger();
  };

  const handleActiveButtonChange = (e) => {
    setPercentButtonValue(+e.target.value);
  };

  const onSubmit = (data) => {
    if (!dispatchAction) {
      throw new Error("Unknown dispatch function");
    }

    switch (variant) {
      case "buy":
        onBuySubmit();
        break;
      case "sell":
        onSellSubmit();
        break;
      default:
        throw new Error("Unknown form action variant");
    }

    function isEnoughMoney(portfolio) {
      return portfolio.some((currency) => currency.coinId === data.coinId && currency.quantity >= data.quantity);
    }

    function onBuySubmit() {
      dispatch(dispatchAction(data));
      handleSnackOpen("success", "Successful transaction. Accepted");
    }

    function onSellSubmit() {
      if (isEnoughMoney(portfolio)) {
        dispatch(dispatchAction(data));
        handleSnackOpen("success", "Successful transaction. Accepted");
      } else {
        handleSnackOpen("error", "Not enough cryptocurrency in the wallet. Declined");
      }
    }
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

  const percentButtons = renderPercentButtons(PERCENT_BUTTON_VALUES);
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
        <ControlledTextField
          name="price"
          handleChange={handlePriceChange}
          control={control}
          placeholder={`Price (USD)`}
        />
        <div className="buy-sell-form__helper buy-sell-form__helper_left">{errors.price?.message}</div>
        <ControlledTextField
          name="quantity"
          handleChange={handleQuantityChange}
          control={control}
          placeholder={`Quantity ${coin.symbol.toUpperCase()}`}
        />
        <div className="buy-sell-form__helper buy-sell-form__helper_right">{errors.quantity?.message}</div>
      </div>
      <p className="buy-sell-form__text">Order Value Min. $ 1 To Max. $ 100,000</p>
      <div className="buy-sell-form__btn-group" aria-label="outlined button group">
        {percentButtons}
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

const ControlledTextField = ({ name, handleChange, control, placeholder }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type="number"
          value={value}
          onChange={(e) => {
            onChange(e);
            handleChange(e);
          }}
          error={!!error}
          autoComplete="transaction-amount"
          placeholder={placeholder}
          variant="outlined"
          classes={{ root: "input-text" }}
        />
      )}
    />
  );
};

export const BuySellTab = () => {
  const coin = useSelector((state) => state.currencies.singleCurrency);
  const { open, severity, message, handleOpen, handleClose } = useSnackbar();

  return (
    <div className="buy-sell">
      <div className="buy-sell__wrapper">
        <div className="buy-sell-form">
          <BuySellTabForm variant="buy" coin={coin} dispatchAction={buyCurrency} handleSnackOpen={handleOpen} />
        </div>
        <div className="buy-sell-form">
          <BuySellTabForm variant="sell" coin={coin} dispatchAction={sellCurrency} handleSnackOpen={handleOpen} />
        </div>
      </div>
      <CustomSnackbar open={open} handleClose={handleClose} severity={severity} message={message} />
    </div>
  );
};
