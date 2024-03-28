import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'


// import image
import swipe1 from "../../assets/swiper/1.jpg"
import swipe2 from "../../assets/swiper/2.jpg"
import swipe3 from "../../assets/swiper/3.jpg"
import swipe4 from "../../assets/swiper/4.jpg"
import swipe5 from "../../assets/swiper/5.jpg"
import swipe6 from "../../assets/swiper/6.jpg"
import swipe7 from "../../assets/swiper/7.jpg"
import swipe8 from "../../assets/swiper/8.jpg"

const Category = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={swipe1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swipe2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swipe3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full w-full' src={swipe4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full w-full' src={swipe5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full w-full' src={swipe6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full w-full' src={swipe7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swipe8} alt="" />
                </SwiperSlide>
              
            </Swiper>
        </div>
    );
};

export default Category;