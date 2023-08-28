import "./testimonials.scss";
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";

// TODO: slider to new function
// TODO: commas.png to webp
// TODO: active bullet width different size

import commas from "../../assets/icons/commas.png";

// Import Swiper styles
import variables from "../../styles/_variables.scss?inline";
import { convertScssToObject } from "../../utils/utils";
import "swiper/css";

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
        .swiper-pagination-bullet {
          width: 30px;
          height: 4px;
          border-radius: 0;
          background-color: ${colors.white};
        }
        .swiper {
          padding-bottom: 70px;
        }
        .swiper-pagination-bullet-active {
          width: 40px;
        }
        // .swiper-pagination-bullets {
        //   color: red;
        // }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="testimonials">
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
          <swiper-slide>
            <div className="testimonials-item">
              <div className="testimonials-item__wrapper">
                <div className="testimonials-item__wrapper-left">
                  <div className="testimonials-item__thumbnail">
                    <img src="https://thispersondoesnotexist.com/" loading="lazy" alt="person avatar" />
                  </div>
                  <div>
                    <div className="testimonials-item__name">John Doe</div>
                    <div className="testimonials-item__country">USA, America</div>
                  </div>
                </div>
                <div className="testimonials-item__wrapper-right">
                  <img src={commas} alt="" />
                </div>
              </div>
              <div className="testimonials-item__review">
                Lorem, ipsum dolor sit amet consectetur adipisicin
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="testimonials-item">
              <div className="testimonials-item__wrapper">
                <div className="testimonials-item__wrapper-left">
                  <div className="testimonials-item__thumbnail">
                    <img src="https://thispersondoesnotexist.com/" loading="lazy" alt="person avatar" />
                  </div>
                  <div>
                    <div className="testimonials-item__name">John Doe</div>
                    <div className="testimonials-item__country">USA, America</div>
                  </div>
                </div>
                <div className="testimonials-item__wrapper-right">
                  <img src={commas} alt="" />
                </div>
              </div>
              <div className="testimonials-item__review">
                Lorem, ipsum dolor sit amet consectetur adipisicin
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="testimonials-item">
              <div className="testimonials-item__wrapper">
                <div className="testimonials-item__wrapper-left">
                  <div className="testimonials-item__thumbnail">
                    <img src="https://thispersondoesnotexist.com/" alt="person avatar" />
                  </div>
                  <div>
                    <div className="testimonials-item__name">John Doe</div>
                    <div className="testimonials-item__country">USA, America</div>
                  </div>
                </div>
                <div className="testimonials-item__wrapper-right">
                  <img src={commas} alt="" />
                </div>
              </div>
              <div className="testimonials-item__review">
                Lorem, ipsum dolor sit amet consectetur adipisicin
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img src="https://d2ph5fj80uercy.cloudfront.net/05/cat947.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat2986.jpg" alt="" />
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
};
