import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

import "./startTrading.scss";
import { StartTradingItem } from "./startTradingItem";

const itemsSettings = [
  {
    id: 1,
    color: "#f8931a",
    icon: <PersonOutlineIcon />,
    title: "Create Account",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "Sign Up Now",
  },
  {
    id: 2,
    color: "#bd47fc",
    icon: <AccountBalanceOutlinedIcon />,
    title: "Verify Bank Account",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "Verify Now",
  },
  {
    id: 3,
    color: "#27c28a",
    icon: <AccountBalanceWalletOutlinedIcon />,
    title: "Add Fund in Wallet",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "Add Now",
  },
  {
    id: 4,
    color: "#f72357",
    icon: <AutoGraphOutlinedIcon />,
    title: "Start Trading",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "Start Now",
  },
];

export const StartTrading = () => {
  const renderItems = (items) => {
    return items.map((item) => {
      return <StartTradingItem key={item.id} item={item} />;
    });
  };

  const items = renderItems(itemsSettings);
  return (
    <section className="start-trading">
      <div className="container">
        <div className="w66pr">
          <h2 className="start-trading__title">Start Trading In Simple Process</h2>
          <p className="start-trading__subtitle">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <hr className="horizontal-separator" />
        <div className="start-trading-items">{items}</div>
      </div>
    </section>
  );
};
