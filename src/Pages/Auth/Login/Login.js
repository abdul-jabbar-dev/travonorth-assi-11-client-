import { LockClosedIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Auth from '../Firebase/Auth'
import { FcGoogle } from 'react-icons/fc';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

// import { FcGoogle } from  "@react-icons/all-files/fa/FcGoogle";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginByEmail, googleLogin, setUser } = Auth()
    const location = useLocation()
    const history = useHistory()
    const user = useContext(UserContext)
    const redirectPath = location.state?.form || '/'
    user?.uid && history.push('/cart')
//login with google
    const handelGoogleLogin = () => {
        googleLogin()
            .then((result) => {

                const user = result.user;
                setUser(user)
                history.push(redirectPath)
            }).catch((error) => {
            });
    }
//login form
    const onSubmit = data => {
        history.push(redirectPath)

        loginByEmail(data.email, data.password)
    };
    return (
        <div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    {...register("email")}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    {...register("password", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Create an account
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                            <button onClick={handelGoogleLogin} className='block mx-auto mt-6'>
                                <FcGoogle fontSize={'2.5rem'} />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;