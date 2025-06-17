import { Swiper, SwiperSlide } from 'swiper/react';
import myimg1 from '../assets/project-img-1.png';
import myimg2 from '../assets/project-img2.png';


import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const SliderSwiper = () => {
  return (
    <Swiper className='text-2xl' modules={[Navigation]} navigation={true} spaceBetween={20} slidesPerView={3} loop={true}>
      <SwiperSlide><a href='https://www.aromadevelopers.com/aroma-lp/' target='_blank'><img src={myimg2} alt="1" className="rounded-xl text-4xl" /> My project 1</a></SwiperSlide>
      <SwiperSlide><a href='https://www.popularmaruti.com/lp/e-vitara-new/' target='_blank'><img src={myimg1} alt="2" className="rounded-xl" />My project 2</a></SwiperSlide>
      <SwiperSlide><a href='https://ravizpackages.com/raviz-kadavu-lp/' target='_blank'><img src={myimg2} alt="3" className="rounded-xl" />My project 3</a></SwiperSlide>
      <SwiperSlide><a href='https://www.popularmaruti.com/lp/nexa/fronx-new-lp/' target='_blank'><img src={myimg1} alt="4" className="rounded-xl" />My project 4</a></SwiperSlide>
    </Swiper>
  );
};

export default SliderSwiper;


<div class="grid-x grid-padding-x">
  <div class="cell">
    <h3>Contact Us</h3>
  </div>
  <div class="cell">
    [text* Name placeholder "Name" ]
  </div>
  <div class="cell">
    [email* Email placeholder "Email"]
  </div>
  <div class="cell">
    [intl_tel* PhoneNumber id:intelphone class:intel-phone initialCountry:in preferredCountries:in minlength:10 maxlength:13 placeholder "Phone Number"]
  </div>
  <div class="cell">
    [textarea* Message placeholder "Message"]
    [hidden Project id:projectsName]
    [hidden Form "Contact Form Project Form"]
  </div>
  <div class="cell">
    [submit class:button  class:contact-button class:expanded "Submit"]
  </div>
</div>