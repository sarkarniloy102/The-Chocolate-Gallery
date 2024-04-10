

const SingleCart = ({item}) => {
    const { image, name, recipe } = item;
    return (
        <section>
            <div className="card   shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn bg-slate-200 text-yellow-500">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCart;