import { useState } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import classNames from "classnames";

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

const percentButtonsData = ["25", "50", "75", "100"];

const BuySellForm = ({ variant, coin }) => {
  const [coinPrice, setCoinPrice] = useState("");
  const [coinQuantity, setCoinQuantity] = useState("");
  const [activeButtonValue, setActiveButtonValue] = useState("25");

  const handlePriceChange = (e) => {
    setCoinPrice(e.target.value);
    const inputValue = e.target.value === "" ? 0 : e.target.value;
    const newQuantity = inputValue / coin.market_data.current_price["usd"];
    setCoinQuantity(newQuantity === 0 ? "" : newQuantity);
  };

  const handleQuantityChange = (e) => {
    setCoinQuantity(e.target.value);
    const inputValue = e.target.value === "" ? 0 : e.target.value;
    const newPrice = inputValue * coin.market_data.current_price["usd"];
    setCoinPrice(newPrice === 0 ? "" : newPrice);
  };

  const handleActiveButtonChange = (e) => {
    setActiveButtonValue(e.target.value);
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

  const percentButtons = renderPercentButtons(percentButtonsData);
  return (
    <form onSubmit={() => console.log("submitting")}>
      <div className="buy-sell-form__wrapper">
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
          <FormControlLabel required value="market" control={<Radio />} label="Market" />
          <FormControlLabel required value="limit" control={<Radio />} label="Limit" />
        </RadioGroup>
        <p>
          Available Balance- <span>$ X,XXX,XX.XX</span>
        </p>
      </div>
      <div className="buy-sell-form__wrapper">
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="price"
          type="number"
          value={coinPrice}
          onChange={handlePriceChange}
          inputProps={{
            min: "1",
          }}
          required
          id="trade-price"
          autoComplete="current-password"
          placeholder="Price (USD)"
        />
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="quantity"
          type="number"
          value={coinQuantity}
          onChange={handleQuantityChange}
          inputProps={{
            step: "0.1",
            min: "0",
          }}
          required
          id="trade-qty"
          autoComplete="current-password"
          placeholder={`Quantity (${coin.symbol.toUpperCase()})`}
        />
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
      >
        Buy {coin.symbol.toUpperCase()}
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
