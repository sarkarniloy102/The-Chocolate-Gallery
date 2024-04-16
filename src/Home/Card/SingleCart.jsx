

const SingleCart = ({ item }) => {
    const { image, name, details, price } = item;
    return (
        <section>
            <div className="card card-compact w-96 h-96  shadow-xl">
                <figure><img src={image} className="" alt="Chocolate" /></figure>
                <div className="card-body text-black">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn bg-slate-200 text-yellow-500">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCart;