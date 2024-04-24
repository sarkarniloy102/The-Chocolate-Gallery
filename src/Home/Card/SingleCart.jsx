

const SingleCart = ({ item }) => {
    const { image, name, details, price } = item;
    return (
        <section>
            <div className="card card-compact w-full md:w-96 h-96  shadow-xl">

                <figure className="relative">
                    <img src={image} className="" alt="Chocolate" />
                    <p className="absolute top-2 right-2 text-white text-xs  rounded-lg px-4  py-2 bg-black ">{price}</p>
                </figure>


                <div className="card-body text-black">
                    <h2 className="card-title">{name}</h2>

                    <p>{details}</p>

                    <div className="card-actions justify-center">
                        <button className="btn bg-slate-200 rounded-lg text-yellow-500 border-0 border-b-4 border-yellow-400">Add to cart</button>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCart;