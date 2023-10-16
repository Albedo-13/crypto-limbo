import "./roadMap.scss";

const ROADMAP_DATA = [
  {
    id: 1,
    title: "The standard Lorem Ipsum passage, used since the 1500s.",
    descriptions: [
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    ],
    year: 2018,
  },
  {
    id: 2,
    title: "The standard Lorem Ipsum passage, used since the 1500s.",
    descriptions: [
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    ],
    year: 2019,
  },
  {
    id: 3,
    title: "The standard Lorem Ipsum passage, used since the 1500s.",
    descriptions: [
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    ],
    year: 2020,
  },
];

const RoadMapItem = ({ item }) => {
  return (
    <div className="roadmap-item">
      <div className="roadmap-item-aside">
        <div className="roadmap-item-aside-line!">------</div>
        <div className="roadmap-item-aside-year!">{item.year}</div>
      </div>
      <div className="roadmap-item-main">
        <h3 className="roadmap-item-main-title">{`${item.id}. ${item.title}`}</h3>
        <div className="roadmap-item-main-descriptions">
          {item.descriptions.map((description) => {
            return <p className="roadmap-item-main-description!">{description}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export const RoadMap = () => {
  const renderRoadMapItems = (roadmapData) => {
    return roadmapData.map((item) => <RoadMapItem item={item} key={item.id} />);
  };

  const roadMapItems = renderRoadMapItems(ROADMAP_DATA);
  return (
    <section className="roadmap">
      <div className="container">
        <h1>Roadmap Journey From 2018 To 2024</h1>
        <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <hr className="h-line" />
        <div className="roadmap-items">{roadMapItems}</div>
      </div>
    </section>
  );
};
