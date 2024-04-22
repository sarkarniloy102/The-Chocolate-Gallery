import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                heading={"TESTIMONIALS"}
                subheading={"What Our Clients Say"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center justify-center text-center mx-20">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                // onChange={setRating}
                                />
                                <p className="">{review.details}</p>
                                <h3 className="text-2xl text-orange-500">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;