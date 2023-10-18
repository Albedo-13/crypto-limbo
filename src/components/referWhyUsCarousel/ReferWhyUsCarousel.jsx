import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import variables from "../../styles/_variables.scss?inline";
import { convertScssToObject } from "../../utils/utils";

import "./ReferWhyUsCarousel.scss";
import characterWorkingAngled from "../../assets/images/characterWorkingAngled.webp";

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
      slidesPerView: "2",
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
  };
  
  return (
    <section className="refer-why-us">
      <div className="container">
        <swiper-container ref={swiperRef} init="false">
          <swiper-slide>1</swiper-slide>
          <swiper-slide>2</swiper-slide>
          <swiper-slide>3</swiper-slide>
        </swiper-container>
        <div className="refer-why-us__img">
          <img src={characterWorkingAngled} alt="working character" />
        </div>
      </div>
    </section>
  );
};
