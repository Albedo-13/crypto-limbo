import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

const BuySellForm = ({ symbol }) => {
  return (
    <Box className="buy-sell-block">
      <form onSubmit={() => console.log("submitting")}>
        <div>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            <FormControlLabel value="market" control={<Radio />} label="Market" />
            <FormControlLabel value="limit" control={<Radio />} label="Limit" />
          </RadioGroup>
          <p>
            Available Balance- <span>$ 2,247,35.05</span>
          </p>
        </div>
        <div>
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
      </form>
    </Box>
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
