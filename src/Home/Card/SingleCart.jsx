import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const SingleCart = ({ item }) => {
    const { image, name, details, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleAddToCart = ((item) => {
        console.log(item);
        if (user && user.email) {
            // TODO: information added to database
        }
        else {
            Swal.fire({
                title: "You have to Sign-In to add cart",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign In"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin')
                }
            });
        }
    })

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
                        <button onClick={() => handleAddToCart(item)} className="btn bg-slate-200 rounded-lg text-yellow-500 border-0 border-b-4 border-yellow-400">Add to cart</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCart;