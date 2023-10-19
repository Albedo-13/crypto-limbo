import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

import "./simpleStep.scss";
import { SimpleStepItem } from "./SimpleStepItem";

const ITEMS_SETTINGS = [
  {
    id: 1,
    color: "#f8931a",
    icon: <PersonOutlineIcon />,
    title: "Create Account",
    text: "It's a simple, fast and secure way to create an account and start trading. You don't need any technical skills, just fill the fields with valid data. Thats it!",
    buttonText: "Sign Up Now",
    link: "/signup",
  },
  {
    id: 2,
    color: "#bd47fc",
    icon: <AccountBalanceOutlinedIcon />,
    title: "Verify Bank Account",
    text: "It's quick and safe - perfect for when you just want to make sure your money is where you think it is. Just enter your bank details and Crypto Limbo will do the rest.",
    buttonText: "Verify Now",
    link: "#",
  },
  {
    id: 3,
    color: "#27c28a",
    icon: <AccountBalanceWalletOutlinedIcon />,
    title: "Add Fund in Wallet",
    text: "Add funds to your cryptocurrency wallet. It is simple, safe, and works with almost all wallets. You can use it anywhere in the world, without needing to verified ID",
    buttonText: "Add Now",
    link: "#",
  },
  {
    id: 4,
    color: "#f72357",
    icon: <AutoGraphOutlinedIcon />,
    title: "Start Trading",
    text: "Finally, you can start tracking and trading any cryptocurrencies on the way to your lambo. Buy cheaper, sell more expensive. Everything is in your hands!",
    buttonText: "Start Now",
    link: "/market",
  },
];

export const SimpleStep = () => {
  const renderItems = (items) => {
    return items.map((item) => {
      return <SimpleStepItem key={item.id} item={item} />;
    });
  };

  const items = renderItems(ITEMS_SETTINGS);
  return (
    <section className="simple-step" id="start-trading">
      <div className="bg-section-spray-big" />
      <div className="container">
        <div className="w65pr">
          <h2 className="simple-step__title">Start Trading In Simple Process</h2>
          <p className="simple-step__subtitle">
          Go through a couple of simple steps: Sign up, Verifying, Adding wallet. It takes just a few minutes and then you can start trading with Crypto Limbo - one of the largest cryptocurrency exchanges in the world
          </p>
        </div>
        <hr className="h-line" />
        <div className="simple-step-items">{items}</div>
      </div>
    </section>
  );
};
