import { Parallax } from 'react-parallax';


const Cover = ({ img, title, details }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="">
                <div className="hero h-[500px]" >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-black opacity-70 py-8 md:py-16 px-12 md:px-32">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-2xl md:text-5xl font-bold uppercase text-white">{title}</h1>
                            <p className="mb-5 text-xs md:text-base uppercase text-white">{details}</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;