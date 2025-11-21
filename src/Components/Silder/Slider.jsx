import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/image/elden.jpg'
import img2 from '../../assets/image/god.avif'
import img3 from '../../assets/image/car.jpeg'



const Slider = () => {
    return (
        <div className='mt-4'>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img className="w-full h-[400px] object-center" src={img1} alt=""  /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[400px] object-center" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[400px] object-center" src={img3} alt="" /></SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default Slider;