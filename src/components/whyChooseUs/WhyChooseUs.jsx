import { Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import classNames from "classnames";

import "./whyChooseUs.scss";
import GraphIncome from "../../assets/images/GraphIncome.webp";
import { addZeroToNumber } from "../../utils/utils";

const itemsSettings = [
  {
    id: 1,
    title: "Easy Trading",
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    id: 2,
    title: "24/7 Help Service",
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    id: 3,
    title: "Fast Service",
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    id: 4,
    title: "Low Charges",
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

export const WhyChooseUs = () => {
  const renderItems = (items) => {
    return items.map((item, i) => {
      const isLastItem = i + 1 < items.length;
      const lineStyle = classNames({ "horizontal-separator__halfed": isLastItem, hidden: !isLastItem });
      return (
        <div key={item.id}>
          <div className="why-choose-us-item">
            <div className="why-choose-us-item__number">{addZeroToNumber(item.id)}</div>
            <div className="why-choose-us-item__wrapper">
              <div className="why-choose-us-item__title">{item.title}</div>
              <div className="why-choose-us-item__text">{item.text}</div>
            </div>
            <Button
              sx={{
                marginLeft: "40px",
              }}
              endIcon={<NorthEastIcon />}
            >
              Start Now
            </Button>
          </div>
          <hr className={lineStyle} />
        </div>
      );
    });
  };

  const items = renderItems(itemsSettings);
  return (
    <section className="why-choose-us">
      <div className="bg-section-spray-small" />
      <div className="container">
        <h2 className="why-choose-us__title">Why Choose Crypto Brains!</h2>
        <p className="why-choose-us__subtitle">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <hr className="horizontal-separator" />
        <div className="why-choose-us__wrapper">
          <div className="why-choose-us__wrapper-left">{items}</div>
          <div className="why-choose-us__wrapper-right">
            <img className="why-choose-us__img" src={GraphIncome} alt="graph money income" />
          </div>
        </div>
      </div>
    </section>
  );
};
