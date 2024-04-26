import { useEffect, useRef, useState } from "react";
import signupimg from "../../assets/backgroundimage/login.jpeg"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const SignIn = () => {
    const captcharef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const userCurrentCaptcha = captcharef.current.value;
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
            <div className=" hero-content flex flex-col justify-center items-center lg:flex-row p-2 md:p-16 rounded-xl shadow-lg  gap-20 bg-slate-200">
                {/* 1 */}
                <div>
                    <img src={signupimg} className="h-96" alt="Sign up" />
                </div>
                {/* 2 */}
                <div className="card shrink-0 w-full max-w-sm shadow-2xl text-black">
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
                            <input type="text" name="captcha" ref={captcharef} placeholder="type here" className="input input-bordered bg-white" required />
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs mt-2">Validate</button>
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disabled} type="submit" className="btn btn-primary" value="Sign In" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;