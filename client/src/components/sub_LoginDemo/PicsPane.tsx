import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../styles/SwiperStyles.css';
import pic1 from '../../assets/pics/pic1.jpg';
import pic2 from '../../assets/pics/pic2.jpg';
import pic3 from '../../assets/pics/pic3.jpg';
import pic4 from '../../assets/pics/pic4.jpg';
import pic5 from '../../assets/pics/pic5.jpg';
import pic6 from '../../assets/pics/pic6.jpg';
import pic7 from '../../assets/pics/pic7.jpg';
import pic8 from '../../assets/pics/pic8.jpg';
import pic9 from '../../assets/pics/pic9.jpg';
import pic10 from '../../assets/pics/pic10.jpg';
import pic11 from '../../assets/pics/pic11.jpg';
import pic12 from '../../assets/pics/pic12.jpg';
import pic13 from '../../assets/pics/pic13.jpg';
import pic14 from '../../assets/pics/pic14.jpg';
import pic15 from '../../assets/pics/pic15.jpg';
import pic16 from '../../assets/pics/pic16.jpg';
import pic17 from '../../assets/pics/pic17.jpg';
import pic18 from '../../assets/pics/pic18.jpg';

import { Image } from 'react-bootstrap';

const PicsPane = ({ picScroll }: { picScroll: any }) => {
  return (
    <Swiper
      slidesPerView={3}
      grid={{
        fill: 'row',
        rows: 2,
      }}
      spaceBetween={15}
      loop={true}
      autoplay={picScroll}
      speed={3000}
      modules={[Autoplay, FreeMode, Grid, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={pic1}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic2}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic3}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic4}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic5}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic6}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic7}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic8}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic9}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic10}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic11}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic12}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic13}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic14}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic15}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic16}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic17}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pic18}
          alt="an employee"
          className="pic"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default PicsPane;
