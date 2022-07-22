import React from "react";
import "./Testiomonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profileimg1 from "../../img/profile1.jpg";
import profileimg2 from "../../img/profile2.jpg";
import profileimg3 from "../../img/profile3.jpg";
import profileimg4 from "../../img/profile4.jpg";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function Testiomonial() {
  const clients = [
    {
      img: profileimg1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non asperiores magnam. Atque hic in veritatis? Mollitia, asperiores quo dolorem fugiat perspiciatis sapiente nesciunt. Et aliquid quod expedita quas optio?",
    },
    {
      img: profileimg2,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non asperiores magnam. Atque hic in veritatis? Mollitia, asperiores quo dolorem fugiat perspiciatis sapiente nesciunt. Et aliquid quod expedita quas optio?",
    },
    {
      img: profileimg3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non asperiores magnam. Atque hic in veritatis? Mollitia, asperiores quo dolorem fugiat perspiciatis sapiente nesciunt. Et aliquid quod expedita quas optio?",
    },
    {
      img: profileimg4,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi non asperiores magnam. Atque hic in veritatis? Mollitia, asperiores quo dolorem fugiat perspiciatis sapiente nesciunt. Et aliquid quod expedita quas optio?",
    },
  ];
  return (
    <div className="testiomonial">
      <div className="t-heading">
        <span>Clients alaways get </span>
        <span> Exceptional work</span>
        <span> from me .. . </span>
      </div>
      <div className="blur t-blur1"></div>
      <div className="blur t-blur2"></div>
      <Swiper
        className="t-swiper"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor={true}
        slidesPerView={1}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index} className="t-slide">
              <div className="test">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testiomonial;
