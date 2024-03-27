import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/carousel1.jpg"
import img2 from "../../assets/carousel2.jpg"
import img3 from "../../assets/carousel3.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel >
                <div >
                    <img src={img1} />

                </div>
                <div >
                    <img src={img2} />

                </div>
                <div>
                    <img src={img3} />

                </div>
            </Carousel>

        </div>
    );
};

export default Banner;