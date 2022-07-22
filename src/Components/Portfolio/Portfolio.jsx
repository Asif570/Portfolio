import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../../img/sidebar.png";
import ecommerce from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.png";
import "swiper/css";
import { useSelector } from "react-redux";
function Portfolio() {
  const theme = useSelector((state) => state.darkMood);
  return (
    <div className="portfolio">
      <span style={theme ? { color: "#ffffff" } : {}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        className="p-swiper"
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
      >
        <SwiperSlide className="p-swiper-slide">
          <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide className="p-swiper-slide">
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide className="p-swiper-slide">
          <img src={hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide className="p-swiper-slide">
          <img src={musicapp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
