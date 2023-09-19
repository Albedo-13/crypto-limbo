import { Link, useNavigate, useParams } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Spinner from "../spinner/Spinner";

import "./currencyItem.scss";

// WTF IS isBookmarkChecked(row.id) in MarketTable.jsx???
// нужно чекнуть че это для того, чтобы понять, какой тип данных используется
// для сохранения букмарков и далее использовать его для мок данных выпадающего списка
// пометить мок данные как временные, для замены на данные из бд

export const CurrencyItem = ({ coin }) => {
  console.log("currencyItem render");

  return (
    <section className="currency-item">
      <div className="container">
        <div className="currency-item-wrapper">
          <div className="currency-item-wrapper__main">
            <div className="currency-item-wrapper__header">
              <CurrencyItemSelect coin={coin} />
              <div style={{ backgroundColor: "red" }}>stats</div>
            </div>
            <div className="currency-item-graph">graph</div>
            <div className="currency-item-trade">buy / sell + tabs</div>
          </div>
          <div className="currency-item-order">
            <p>Order Book</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CurrencyItemSelect = ({ coin }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const currencyId = e.target.value;
    navigate(`/market/${currencyId}`);
  };

  const renderDropdown = (coin) => {
    return (
      <div>
        {coin.name}
        {/* <FormControl sx={{ p: 1, minWidth: "80%" }}> */}
        {/* not allow to uncheck bookmark (disabed and checked by default) */}
          <Select defaultValue={coin.id ?? ""} onChange={handleChange} inputProps={{ "aria-label": "Without label" }}>
            <MenuItem value={coin.id ?? ""}>{`${coin.name}`}</MenuItem>
            <MenuItem value={`bitcoin`}>Bitcoin</MenuItem>
            <MenuItem value={`ethereum`}>Ethereum</MenuItem>
            <MenuItem value={`binancecoin`}>BNB</MenuItem>
            <MenuItem value={`tron`}>TRON</MenuItem>
          </Select>
        {/* </FormControl> */}
      </div>
    );
  };

  return coin ? renderDropdown(coin) : <Spinner />;
};
