import { useContext, useEffect, useState } from "react";
import signupimg from "../../assets/backgroundimage/login.jpeg"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2'
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const SignIn = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: "center-center",
                    icon: "success",
                    title: "Sign in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
                console.log(user);
            })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const userCurrentCaptcha = e.target.value;
        if (validateCaptcha(userCurrentCaptcha)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }

        console.log(userCurrentCaptcha);
    }

    return (
        <div className=" hero max-h-screen py-20  flex flex-col justify-center items-center">
            <Helmet>
                <title>TCG | Sign In</title>
            </Helmet>

            <div className=" hero-content flex flex-col-reverse justify-center items-center lg:flex-row p-2 md:p-16 rounded-xl shadow-lg  gap-20 bg-slate-200">
                {/* 1 */}
                <div>
                    <img src={signupimg} className="h-96" alt="Sign up" />
                </div>
                {/* 2 */}
                <div className="card shrink-0 w-full max-w-sm shadow-2xl text-black">
                    <h2 className="text-3xl font-bold text-center">Sign In</h2>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        {/* captcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="type here" className="input input-bordered bg-white" required />
                            {/* <button onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs mt-2">Validate</button> */}
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disabled} type="submit" className="btn bg-violet-500 text-black hover:text-white border-none" value="Sign In" />
                        </div>
                        <div className="divider"></div>
                        <SocialLogin></SocialLogin>
                        <p className="flex justify-center items-center"><small>New here? <NavLink to={"/signup"} className="text-violet-600 hover:underline hover:text-[D1A054]">Create a new account</NavLink> </small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;