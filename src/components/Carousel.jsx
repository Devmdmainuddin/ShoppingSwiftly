
import { Swiper, SwiperSlide } from 'swiper/react';

// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";

import 'swiper/css';
import 'swiper/css/navigation';
// import SwiperCore, { Navigation } from "swiper";
// SwiperCore.use([Navigation]);
import { Navigation,Autoplay } from 'swiper/modules';
const Carousel = () => {

    return (
        <>
      <Swiper
       navigation={true}
        loop={true} 
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
         modules={[Navigation,Autoplay]}  className="mySwiper">

        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>

      </Swiper>
    </>

    );
};



export default Carousel;