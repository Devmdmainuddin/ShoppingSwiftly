
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

        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full">
                <img  src="https://i.ibb.co/zSHGLtR/14.jpg" className="w-full h-[400px] object-cover" />
           
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
           
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Dpdwj5m/10.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
          
                   
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nMGKqWx/7.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
    
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/1m3W3Pj/6.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nMGKqWx/7.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Dpdwj5m/10.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">  
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Dpdwj5m/10.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">    
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Dpdwj5m/10.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
                </div>
            </div>
        </SwiperSlide>
       

      </Swiper>
    </>

    );
};



export default Carousel;