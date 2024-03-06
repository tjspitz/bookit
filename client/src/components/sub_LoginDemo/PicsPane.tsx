// import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../styles/SwiperStyles.css';

const PicsPane = () => {
  return (
      <Swiper
        slidesPerView={3}
        grid={{
          fill: 'row',
          rows: 2,
        }}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay, FreeMode, Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Picture 1</SwiperSlide>
        <SwiperSlide>Picture 2</SwiperSlide>
        <SwiperSlide>Picture 3</SwiperSlide>
        <SwiperSlide>Picture 4</SwiperSlide>
        <SwiperSlide>Picture 5</SwiperSlide>
        <SwiperSlide>Picture 6</SwiperSlide>
        <SwiperSlide>Picture 7</SwiperSlide>
        <SwiperSlide>Picture 8</SwiperSlide>
        <SwiperSlide>Picture 9</SwiperSlide>
        <SwiperSlide>Picture 10</SwiperSlide>
      </Swiper>
  );
};

export default PicsPane;
