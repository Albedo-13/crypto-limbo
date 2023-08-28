import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";

import variables from "../../styles/_variables.scss?inline";
import { convertScssToObject } from "../../utils/utils";

import commas from "../../assets/icons/commas.webp";
import "./testimonials.scss";

const itemsSettings = [
  {
    id: 1,
    name: "John Doe",
    country: "USA, California",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    name: "Adrian Montes",
    country: "Russia, Moscow",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "Dillon Whitehead",
    country: "Poland, Krakow",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    name: "Mark Farley",
    country: "Serbia, Nis",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    name: "Siobhan Garrett",
    country: "Turkey, Stambul",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                <img src={commas} alt="quote symbol" />
              </div>
            </div>
            <div className="testimonials-item__review">{item.review}</div>
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
            Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a
            galley of type and scrambled type specimen book.
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
