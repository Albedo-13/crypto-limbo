import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";

import variables from "../../styles/_variables.scss?inline";
import { convertScssToObject } from "../../utils/utils";

import "./testimonials.scss";

const itemsSettings = [
  {
    id: 1,
    name: "John Doe",
    country: "USA, California",
    review:
      "Crypto Limbo is my favorite crypto trading site! The interface is clean, intuitive, and easy to navigate. The charting and trading tools are also great, making it easier to spot optimal entry and exit points.",
  },
  {
    id: 2,
    name: "Adrian Montes",
    country: "Russia, Moscow",
    review:
      "The fees are very competitive as well, so it's a great place to make trades without draining your wallet. Overall, Crypto Limbo is a great platform for both beginners and experienced traders. Highly recommended!",
  },
  {
    id: 3,
    name: "Dillon Whitehead",
    country: "Poland, Krakow",
    review:
      "Overall, I'm very happy with Crypto Limbo. It's a great way to trade cryptocurrency, and I highly recommend it to anyone looking for a reliable and efficient trading platform.",
  },
  {
    id: 4,
    name: "Mark Farley",
    country: "Serbia, Nis",
    review:
      "I have to say that the experience has been extraordinary. First off, the platform is really easy to use and user friendly. It provides a wealth of technical indicators, chart types, and analytical tools and help me make decisions.",
  },
  {
    id: 5,
    name: "Siobhan Garrett",
    country: "Turkey, Stambul",
    review:
      "I'm really impressed. The site is incredibly user-friendly and navigating around is simple and intuitive. The charting features are really impressive and make it easy to analyze the markets.",
  },
];

// TODO: add mouse wheel carousel scrolling

register();
export const Testimonials = () => {
  const swiperRef = useRef(null);

  {
    /* loop: true, scrollbar: true, mousewheelControl: true, */
  }
  useEffect(() => {
    const colors = convertScssToObject(variables);
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: { clickable: true },
      slidesPerView: "2.4",
      spaceBetween: 30,
      injectStyles: [
        `
        .swiper {
          padding-bottom: 67px;
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
  }, []);

  const renderCarouselItems = (items) => {
    return items.map((item) => {
      return (
        <swiper-slide key={item.id}>
          <div className="testimonials-item">
            <div className="testimonials-item__wrapper">
              <div className="testimonials-item__wrapper-left">
                <div className="testimonials-item__thumbnail">
                  <img src="https://thispersondoesnotexist.com/" loading="lazy" alt="person avatar" />
                </div>
                <div>
                  <div className="testimonials-item__name">{item.name}</div>
                  <div className="testimonials-item__country">{item.country}</div>
                </div>
              </div>
              <div className="testimonials-item__wrapper-right">
                <img src="/assets/icons/commas.webp" alt="quote symbol" />
              </div>
            </div>
            <p className="testimonials-item__review">{item.review}</p>
          </div>
        </swiper-slide>
      );
    });
  };

  const carouselItems = renderCarouselItems(itemsSettings);
  return (
    <section className="testimonials">
      <div className="bg-section-spray-big" />
      <div className="container">
        <div className="testimonials__wrapper">
          <h2 className="testimonials__title">What Traders Saying About Us!</h2>
          <p className="testimonials__text">
            Non-fictional positive reviews from real people (or from a chatbot, I don't know) about us. Yes, you can trust us with your finances, cryptocurrencies and credit cards without any doubt.
          </p>
        </div>
        <hr className="horizontal-separator" />

        <swiper-container ref={swiperRef} init="false">
          {carouselItems}
        </swiper-container>
      </div>
    </section>
  );
};
