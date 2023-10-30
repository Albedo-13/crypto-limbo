import React from "react";

import "./referStats.scss";
import characterWorkingFront from "../../assets/images/characterWorkingFront.webp";

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
          <h2 className="refer-stats__subtitle">Invite your friends and receive generous bonuses</h2>
          <h3 className="refer-stats__text">
            Invite your friend to join the Crypto Limbo community and earn exciting bonuses together. By sharing your
            knowledge and experiences, you can both navigate this dynamic industry and unlock new opportunities for
            financial growth.
          </h3>
        </div>
        <div className="refer-stats__img">
          <div className="bg-section-spray-small" />
          <img src={characterWorkingFront} alt="working character like it" />
        </div>
        <div className="refer-stats-info">{referStatsItems}</div>
      </div>
    </section>
  );
};
