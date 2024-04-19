import signupimg from "../../assets/extra/registration.png"

const SignUp = () => {
    return (
        <section className="flex flex-row-reverse justify-center gap-10 items-center py-20 rounded-xl shadow-xl ">
            {/* image part */}
            <div>
                <img src={signupimg} className="h-96" alt="" />
            </div>
            {/* form part */}
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                </div>
                <form  action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Do not have an account yet?
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</a>.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;