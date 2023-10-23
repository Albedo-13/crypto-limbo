import { Button } from "@mui/material";
import classNames from "classnames";
import { Link } from "react-router-dom";

import NorthEastIcon from "@mui/icons-material/NorthEast";

import { addZeroToNumber } from "../../utils/utils";

import "./whyChooseUs.scss";
import graphIncome from "../../assets/images/GraphIncome.webp";

const ITEMS_SETTINGS = [
  {
    id: 1,
    title: "Easy Trading",
    text: "Start your trading journey now and learn more about the exciting world of cryptocurrencies",
  },
  {
    id: 2,
    title: "24/7 Help Service",
    text: "From answering your questions to guiding you through complex issues, our expert team is here to help",
  },
  {
    id: 3,
    title: "Fast Service",
    text: "If you're looking for fast service and quick solutions to all your needs, you've come to the right place",
  },
  {
    id: 4,
    title: "Low Charges",
    text: "We are providing top-quality experience for extremely low charges just for your comfort",
  },
];

export const WhyChooseUs = () => {
  const renderItems = (items) => {
    return items.map((item, i) => {
      const isLastItem = i + 1 < items.length;
      const lineStyle = classNames({ "h-line_halfed": isLastItem, hidden: !isLastItem });
      return (
        <div key={item.id}>
          <div className="why-choose-us-item">
            <div className="why-choose-us-item__number">{addZeroToNumber(item.id)}</div>
            <div className="why-choose-us-item__wrapper">
              <p className="why-choose-us-item__title">{item.title}</p>
              <p className="why-choose-us-item__text">{item.text}</p>
            </div>
            <Button
              sx={{
                marginLeft: "40px",
              }}
              endIcon={<NorthEastIcon />}
              component={Link}
              to="/market"
            >
              Start Now
            </Button>
          </div>
          <hr className={lineStyle} />
        </div>
      );
    });
  };

  const items = renderItems(ITEMS_SETTINGS);
  return (
    <section className="why-choose-us">
      <div className="bg-section-spray-small" />
      <div className="container">
        <h2 className="why-choose-us__title">Why Choose Crypto Limbo ?</h2>
        <p className="why-choose-us__subtitle">
          The speed and simplicity of the interface, regular 24/7 support, adapted to mobile devices. All this makes
          Crypto Limbo stand out among its analogues!
        </p>
        <hr className="h-line" />
        <div className="why-choose-us__wrapper">
          <div className="why-choose-us__wrapper-left">{items}</div>
          <div className="why-choose-us__wrapper-right">
            <img className="why-choose-us__img undraggable" loading="lazy" src={graphIncome} alt="graph money income" />
          </div>
        </div>
      </div>
    </section>
  );
};
