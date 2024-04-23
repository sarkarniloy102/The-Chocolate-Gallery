import SingleCart from "../../Home/Card/SingleCart";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CartMap = ({ category }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    // Function to chunk the category into groups of 4
    const CartPerPage = (array, size) => {
        const PerPageArray = [];
        for (let i = 0; i < array.length; i += size) {
            PerPageArray.push(array.slice(i, i + size));
        }
        return PerPageArray;
    };
    // Create chunks of category, 4 items each
    const CartsPerPage = CartPerPage(category, 3);
    return (
        <div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={1}
            >
                {CartsPerPage.map((group, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                group.map(item =>
                                    <SingleCart
                                        key={item._id}
                                        item={item}
                                    >

                                    </SingleCart>
                                )
                            }
                        </div>
                    </SwiperSlide>

                ))}


            </Swiper>
        </div>
    );
};

export default CartMap;