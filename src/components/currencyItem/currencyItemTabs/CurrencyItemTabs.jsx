import { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { BuySellTab } from "./BuySellTab";
import { WatchlistTableTab } from "./WatchlistTableTab";
import { PortfolioTab } from "./PortfolioTab";
import Spinner from "../../spinner/Spinner";

import "./currencyItemTabs.scss";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      key={index}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const CurrencyItemTabs = ({ coin }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  console.log("tabrender");
  const renderItemTabs = (coin) => {
    return (
      <Box className={"mui-tabs"} sx={{ width: "100%" }}>
        <Box className={"mui-tabs-header"}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab tabIndex={0} label="Buy / Sell" {...a11yProps(0)} />
            <Tab tabIndex={0} label="Watchlist" {...a11yProps(1)} />
            <Tab tabIndex={0} label="Portfolio" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel className={"mui-tabs-panel"} value={value} index={0}>
          <BuySellTab coin={coin} />
        </TabPanel>
        <TabPanel className={"mui-tabs-panel"} value={value} index={1}>
          <WatchlistTableTab />
        </TabPanel>
        <TabPanel className={"mui-tabs-panel"} value={value} index={2}>
          <PortfolioTab />
        </TabPanel>
      </Box>
    );
  };

  return coin ? renderItemTabs(coin) : <Spinner />;
};
