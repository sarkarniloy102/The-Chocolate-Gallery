
import signupimg from "../../assets/backgroundimage/login.jpeg"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photourl)
                    .then(() => {
                        // saved user information in database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user prfile updated");
                                    reset();
                                    Swal.fire({
                                        position: "center-center",
                                        icon: "success",
                                        title: "User Profile created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true })
                                }
                            })

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
    };

    return (

        <div className=" hero max-h-screen py-20  flex flex-col justify-center items-center">
            <Helmet>
                <title>TCG | Sign Up</title>
            </Helmet>

            <div className=" hero-content flex flex-col-reverse justify-center items-center lg:flex-row-reverse p-2 md:p-16 rounded-xl shadow-lg  gap-20 bg-slate-200">
                {/* 1 */}
                <div>
                    <img src={signupimg} className="h-96" alt="Sign up" />
                </div>
                {/* 2 */}
                <div className="card shrink-0 w-full max-w-sm shadow-2xl text-black">
                    <h2 className="text-3xl font-bold text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Write name here" className="input input-bordered bg-white" required />
                            {errors.name && <span className="text-red-600 flex justify-center">This field is required</span>}
                        </div>
                        {/* photourl */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photourl", { required: true })} placeholder="enter photourl" className="input input-bordered bg-white" required />
                            {errors.photourl && <span className="text-red-600 flex justify-center">PhotoURL is required</span>}
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered bg-white" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 12,
                                pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                            })} name="password" placeholder="password" className="input input-bordered bg-white" required />
                            {/* error handling */}
                            {errors.password?.type === 'minLength' && <p className="text-red-500" role="alert">Password must be 6 character</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-500" role="alert">Password must be less than 13 character</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500" role="alert">Password must have one uppercase & one lowercase & one special character & one digit</p>}

                        </div>

                        <div className="form-control mt-6">

                            <input type="submit" className="btn bg-violet-500 text-black hover:text-white border-none" value="Sign Up" />
                        </div>
                        <div className="divider"></div> 
                        <SocialLogin></SocialLogin>
                        <p className="flex justify-center items-center"><small>Aleready registered? <NavLink to={"/signin"} className="text-violet-600 hover:underline hover:text-[D1A054]">Go to Sign In</NavLink> </small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;