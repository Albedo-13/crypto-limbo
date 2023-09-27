import { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { BuySell } from "./BuySell";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export const CurrencyItemTabs = () => {
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

  return (
    <Box className={"mui-tabs"} sx={{ width: "100%" }}>
      <Box className={"mui-tabs-header"} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab tabIndex={0} label="Buy / Sell" {...a11yProps(0)} />
          <Tab tabIndex={0} label="Watchlist" {...a11yProps(1)} />
          <Tab tabIndex={0} label="Portfolio" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className={"mui-tabs-panel"} value={value} index={0}>
        <BuySell />
      </TabPanel>
      <TabPanel className={"mui-tabs-panel"} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel className={"mui-tabs-panel"} value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};
