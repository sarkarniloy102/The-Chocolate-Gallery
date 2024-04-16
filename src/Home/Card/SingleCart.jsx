

const SingleCart = ({ item }) => {
    const { image, name, details, price } = item;
    return (
        <section>
            <div className="card card-compact w-96 h-96  shadow-xl">

                <figure className="relative">
                    <img src={image} className="" alt="Chocolate" />
                    <p className="absolute top-2 right-2 text-white text-xs  rounded-lg px-4  py-2 bg-black ">{price}</p>
                </figure>


                <div className="card-body text-black">
                    <h2 className="card-title">{name}</h2>

                    <p>{details}</p>

                    <div className="card-actions justify-center">
                        <button className="btn bg-slate-200 text-yellow-500">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCart;