import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { BuySellTab } from "./BuySellTab";
import { WatchlistTableTab } from "./WatchlistTableTab";
import { PortfolioTableTab } from "./PortfolioTableTab";

import "./currencyItemTabs.scss";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      key={index}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const CurrencyItemTabs = ({ handleTabsMenuClickClose, isTabsMenuOpen }) => {
  const [value, setValue] = useState(0);
  const coin = useSelector((state) => state.currencies.singleCurrency);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const renderItemTabs = () => {
    return (
      <Box className={"mui-tabs"} sx={{ width: "100%" }} onClick={handleTabsMenuClickClose}>
        <Box className={classNames("mui-tabs-header", { "mui-tabs-header-mobile-active": isTabsMenuOpen })}>
          <Tabs value={value} onChange={handleChange} aria-label="Tabs">
            <Tab tabIndex={0} label="Buy / Sell" {...a11yProps(0)} />
            <Tab tabIndex={0} label="Watchlist" {...a11yProps(1)} />
            <Tab tabIndex={0} label="Portfolio" {...a11yProps(2)} />
          </Tabs>
          <IconButton
            className="mui-tabs-header-mobile-active__close"
            onClick={handleTabsMenuClickClose}
            aria-label="close"
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <TabPanel className={"mui-tabs-panel"} value={value} index={0}>
          <BuySellTab />
        </TabPanel>
        <TabPanel className={"mui-tabs-panel"} value={value} index={1}>
          <WatchlistTableTab />
        </TabPanel>
        <TabPanel className={"mui-tabs-panel"} value={value} index={2}>
          <PortfolioTableTab />
        </TabPanel>
      </Box>
    );
  };

  return coin ? renderItemTabs() : <Skeleton variant="rounded" animation="wave" width={"100%"} height={79} />;
};
