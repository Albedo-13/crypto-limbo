import { v4 as uuidv4 } from "uuid";
import "./roadMap.scss";

const ROADMAP_DATA = [
  {
    id: 1,
    title: "Executive summary.",
    descriptions: [
      "A brief overview of the project's goals and objectives.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
    year: 2018,
  },
  {
    id: 2,
    title: "Product strategy.",
    descriptions: [
      "A detailed description of the product or service the project will offer, including its unique value proposition.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
    year: 2019,
  },
  {
    id: 3,
    title: "Market analysis.",
    descriptions: [
      "A detailed analysis of the target market, including its size, growth potential, and competition.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
    year: 2020,
  },
  {
    id: 4,
    title: "Milestones and deadlines.",
    descriptions: [
      "A timeline of the project's development milestones and deadlines. This should include the launch date of the website, beta testing, and full deployment.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
    year: 2021,
  },
  {
    id: 5,
    title: "Resource breakdown.",
    descriptions: [
      "A detailed breakdown of the resources required for the project, including the team members, technology, and budget.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
    year: 2022,
  },
  {
    id: 6,
    title: "Marketing strategy.",
    descriptions: [
      "A detailed plan for promoting the website and attracting users, including social media, advertising, and partnerships.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
    year: 2023,
  },
  {
    id: 7,
    title: "Future aspirations.",
    descriptions: [
      "A vision for the future of the project, including plans for expansion and future development.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
    year: 2024,
  },
];

const RoadMapItem = ({ item }) => {
  return (
    <div className="roadmap-item">
      <div className="roadmap-item-aside">
        <div className="roadmap-item-aside-line">
          <span className="line">
            <div className="circle"></div>
          </span>
        </div>
        <div className="roadmap-item-aside-year">{item.year}</div>
      </div>
      <div className="roadmap-item-main">
        <h3 className="roadmap-item-main-title">{`${item.id}. ${item.title}`}</h3>
        <div className="roadmap-item-main-descriptions">
          {item.descriptions.map((description) => {
            return <p key={`${item.id}-${uuidv4()}`}>{description}</p>;
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
        <h1 className="roadmap-title">Roadmap Journey From 2018 To 2024</h1>
        <p className="roadmap-subtitle">Step by step we are getting better... and you are with us!</p>
        <hr className="h-line" />
        <div>{roadMapItems}</div>
      </div>
    </section>
  );
};
