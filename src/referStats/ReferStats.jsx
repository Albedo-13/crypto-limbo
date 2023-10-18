import React from "react";
import classnames from "classnames";

import "./referStats.scss";
import characterWorkingFront from "../assets/images/characterWorkingFront.webp";

const REFER_STATS = [
  {
    id: 1,
    value: "10M",
    label: "Trusted Users",
  },
  {
    id: 2,
    value: "$ 20B",
    label: "Coins Purchased",
  },
  {
    id: 3,
    value: "10",
    label: "Years of Experience",
  },
];

export const ReferStats = () => {
  const renderReferStatsItems = (items) => {
    return items.map((item, i) => {
      const isLastElement = i + 1 === items.length;
      return (
        <React.Fragment key={item.id}>
          <div className="refer-stats-item">
            <div className="refer-stats-item__value">{item.value}</div>
            <div className="refer-stats-item__label">{item.label}</div>
          </div>
          {isLastElement ? null : <div className="v-line_grey"></div>}
        </React.Fragment>
      );
    });
  };

  const referStatsItems = renderReferStatsItems(REFER_STATS);
  return (
    <section className="refer-stats">
      <div className="container">
        <div className="refer-stats_centered">
          <h1 className="refer-stats__title h-line_small-blue">Crypto Limbo</h1>
          <h2 className="refer-stats__subtitle">
            Poster Can Be One of The Effective Marketing and Advertising Materials.
          </h2>
          <p className="refer-stats__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus odio libero dolore cupiditate
            deserunt vero eos nam temporibus officiis quos eveniet maiores deleniti dolor praesentium, a iste accusamus
            est!
          </p>
        </div>
        <div className="refer-stats__img">
          <div className="bg-section-spray-small" />
          <img src={characterWorkingFront} alt="working character like it" />
        </div>
        <div className="refer-stats-info">
          {/* <ReferStatsItem item={REFER_STATS[0]} isLastInArray={false} /> */}
          {referStatsItems}
        </div>
      </div>
    </section>
  );
};
