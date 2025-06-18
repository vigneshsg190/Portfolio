import { Swiper, SwiperSlide } from 'swiper/react';
import myimg1 from '../assets/project-img-1.png';
import myimg2 from '../assets/project-img2.png';


import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const SliderSwiper = () => {
  return (
    <Swiper className='text-2xl' modules={[Navigation]} navigation={true} spaceBetween={20} slidesPerView={3} loop={true}breakpoints={{
        0: {
          slidesPerView: 1, // mobile
        },
        640: {
          slidesPerView: 1, // small tablets
        },
        768: {
          slidesPerView: 2, // tablets
        },
        1024: {
          slidesPerView: 3, // desktops
        },
      }}
    >
      <SwiperSlide><a href='https://www.aromadevelopers.com/aroma-lp/' target='_blank'><img src={myimg2} alt="1" className="rounded-xl text-4xl" /> My project 1</a></SwiperSlide>
      <SwiperSlide><a href='https://www.popularmaruti.com/lp/e-vitara-new/' target='_blank'><img src={myimg1} alt="2" className="rounded-xl" />My project 2</a></SwiperSlide>
      <SwiperSlide><a href='https://ravizpackages.com/raviz-kadavu-lp/' target='_blank'><img src={myimg2} alt="3" className="rounded-xl" />My project 3</a></SwiperSlide>
      <SwiperSlide><a href='https://www.popularmaruti.com/lp/nexa/fronx-new-lp/' target='_blank'><img src={myimg1} alt="4" className="rounded-xl" />My project 4</a></SwiperSlide>
    </Swiper>
  );
};

export default SliderSwiper;
