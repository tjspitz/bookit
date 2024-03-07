import { useEffect, useRef } from 'react';
import { Image } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { pics } from '../../lib/pics';
import '../../styles/SwiperStyles.css';


const PicsPane = ({ autoPlay }: { autoPlay: boolean }) => {
  // use a ref to the Swiper component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  // when `autoplay` is toggled
  // check the Swiper ref's existence
  // if `autoPlay` is on, start autoplay
  // otherwise, stop autoplay
  useEffect(() => {
    if (swiperRef.current) {
      if (autoPlay) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  }, [autoPlay]);

  return (
    <Swiper
      className="mySwiper"
      loop
      autoplay
      slidesPerView={3}
      spaceBetween={15}
      speed={3000}
      ref={swiperRef}
      modules={[Autoplay, Grid]}
      grid={{
        rows: 2,
      }}
    >
      {pics.map((pic) => {
        return (
          <SwiperSlide>
            <Image
              src={pic}
              alt="an employee"
              className="pic"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PicsPane;
