import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import variables from "../../styles/_variables.scss?inline";
import { addZeroToNumber, convertScssToObject } from "../../utils/utils";

import "./ReferWhyUsCarousel.scss";
import characterWorkingAngled from "../../assets/images/characterWorkingAngled.webp";

const ITEMS_SETTINGS = [
  {
    id: 1,
    title: "Easy And Secure Trading With CryptoBrains",
    descriptions: [
      "Start your trading journey now and learn more about the exciting world of cryptocurrencies.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
  },
  {
    id: 2,
    title: "24/7 Help Service",
    descriptions: [
      "From answering your questions to guiding you through complex issues, our expert team is here to help.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
  },
  {
    id: 3,
    title: "Fast Service",
    descriptions: [
      "If you're looking for fast service and quick solutions to all your needs, you've come to the right place.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
  },
  {
    id: 4,
    title: "Low Charges",
    descriptions: [
      "We are providing top-quality experience for extremely low charges just for your comfort.",
      'Once upon a time, in New York City in 1941... at this club open to all comers to play, night after night, at a club named "Minston\'s Play House" in Harlem, they play jazz sessions competing with each other. Young jazz men with a new sense are gathering. At last they created a new genre itself. They are sick and tired of the conventional fixed style jazz. They\'re eager to play jazz more freely as they wish then... in 2071 in the universe... The bounty hunters, who are gathering in the spaceship "BEBOP", will play freely without fear of risky things. They must create new dreams and films by breaking traditional styles. The work, which becomes a new genre itself, will be called...',
    ],
  },
];

register();
export const ReferWhyUsCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    initCarousel(swiperRef);
  }, []);

  const initCarousel = (ref) => {
    const colors = convertScssToObject(variables);
    const swiperContainer = ref.current;
    const params = {
      pagination: { clickable: true },
      slidesPerView: "1",
      spaceBetween: 30,
      injectStyles: [
        `
        .swiper {
          padding-bottom: 75px;
        }
        .swiper-pagination-bullet {
          width: 30px;
          height: 4px;
          border-radius: 0;
          background-color: ${colors.white};
        }
        .swiper-pagination-bullet-active {
          width: 40px;
        }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  };

  const renderCarouselItems = (items) => {
    return items.map((item) => {
      return (
        <swiper-slide key={item.id}>
          <div className="refer-why-us-item">
            <h2 className="refer-why-us-item__number">{addZeroToNumber(item.id)}.</h2>
            <div className="refer-why-us-item__title">{item.title}</div>
            <div>
              {item.descriptions.map((descr) => {
                return (
                  <p className="refer-why-us-item__description" key={item.id}>
                    {descr}
                  </p>
                );
              })}
            </div>
          </div>
        </swiper-slide>
      );
    });
  };

  const carouselItems = renderCarouselItems(ITEMS_SETTINGS);
  return (
    <section className="refer-why-us">
      <div className="container">
        <div className="refer-why-us-wrapper">
          <div className="refer-why-us-swiper-wrapper">
            <swiper-container ref={swiperRef} init="false">
              {carouselItems}
            </swiper-container>
          </div>
          <div className="refer-why-us__img">
            <div className="bg-img-spray_round"></div>
            <img src={characterWorkingAngled} className="undraggable" alt="working character" />
          </div>
        </div>
      </div>
    </section>
  );
};
