import { useState } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

const FORM_ACTION_TYPES = [
  {
    action: "buy",
    color: "green",
  },
  {
    action: "sell",
    color: "red",
  }
];

const BuySellForm = ({ variant, coin }) => {
  const [coinPrice, setCoinPrice] = useState("");
  const [coinQuantity, setCoinQuantity] = useState("");

  const handlePriceChange = (e) => {
    setCoinPrice(e.target.value);
    const inputValue = e.target.value === "" ? 0 : e.target.value;
    const newQuantity = inputValue / coin.market_data.current_price["usd"];
    setCoinQuantity(newQuantity === 0 ? "" : newQuantity);
  }

  const handleQuantityChange = (e) => {
    setCoinQuantity(e.target.value);
    const inputValue = e.target.value === "" ? 0 : e.target.value;
    const newPrice = inputValue * coin.market_data.current_price["usd"];
    setCoinPrice(newPrice === 0 ? "" : newPrice);
  }

  return (
    <form onSubmit={() => console.log("submitting")}>
      <div className="buy-sell-form__wrapper">
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
          <FormControlLabel required value="market" control={<Radio />} label="Market" />
          <FormControlLabel required value="limit" control={<Radio />} label="Limit" />
        </RadioGroup>
        <p>
          Available Balance- <span>$ 2,247,35.05</span>
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
            min: "1"
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
            min: "0"
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
          <Button variant="outlined">25%</Button>
          <Button variant="outlined">50%</Button>
          <Button variant="outlined">75%</Button>
          <Button variant="outlined">100%</Button>
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
