import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

// TODO: drill coin to form (or just symbol?), check fetch readiness (loader?)

const BuySellForm = () => {
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
          name="__TEST__"
          type="text"
          id="coin-buy-price"
          autoComplete="current-password"
          placeholder="Price (USD)"
        />
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="__TEST__"
          type="text"
          id="coin-buy-price"
          autoComplete="current-password"
          placeholder={`Quantity`}
        />
      </div>
      <div>
        <p className="buy-sell-form__text">Order Value Min. ₹ 100 To Max. ₹ 50,000,00.00</p>
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
        Buy [CURRENCY]
      </Button>
      <p className="buy-sell-form__text buy-sell-form__fees">Fees Includes- (0.1 %)</p>
    </form>
  );
};

export const BuySell = () => {
  return (
    <div className="buy-sell">
      <div className="buy-sell__wrapper">
        <div className="buy-sell-form">
          <BuySellForm />
        </div>
        <div className="buy-sell-form">
          <BuySellForm />
        </div>
      </div>
    </div>
  );
};
