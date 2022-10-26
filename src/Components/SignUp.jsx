import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Contexts/UserContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { createUser, updateName, verifyEmail, signInWithGoogle, signInWithGithub } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const photoURL = form.url.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(photoURL, name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                updateName(name, photoURL)
                    .then(() => {
                        Swal.fire(
                            'Good job!',
                            'Your Name and URL Updated!',
                            'success'
                        )


                        verifyEmail()
                            .then(() => {
                                Swal.fire(
                                    'Good job!',
                                    'You have successfully signed Up!',
                                    'Please check your email for verification link.',
                                    'success'
                                )
                                navigate(from, { replace: true })
                            })
                            .catch(error => {
                                console.error(error.message)
                            })
                    })
                    .catch(error => {
                        console.error(error.message)
                    })
            })
            .catch(error => console.log(error))

    }


    const handleGoogleLogin = () => {
        signInWithGoogle().then(result => {
            Swal.fire(
                'Good job!',
                'You have successfully signed in!',
                'success'
            )
            console.log(result.user)
            navigate(from, { replace: true })
        })
    }

    const handleGithubLogin = () => {
        signInWithGithub().then(result => {
            Swal.fire(
                'Good job!',
                'You have successfully signed in!',
                'success'
            )
            console.log(result.user)
            navigate(from, { replace: true })
        })
    }


    return (
        <div>
            <div className=" items-center px-5 py-6 lg:px-20">
                <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transhtmlForm bg-white rounded-lg md:mt-0">
                    <div className="mt-8">
                        <div className="mt-6">
                            <div className='pb-5'>
                                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Sign Up.</h2>
                            </div>
                            <Form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-600"> Full Name </label>
                                    <div className="mt-1">
                                        <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your Name" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="url" className="block text-sm font-medium text-neutral-600"> Photo URL </label>
                                    <div className="mt-1">
                                        <input id="url" name="url" type="url" autoComplete="url" required placeholder="Your Photo URL" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email" required placeholder="Your Email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" autoComplete="current-password" required placeholder="Your Password" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                        <label htmlFor="remember-me" className="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                    </div>

                                    <div className="text-sm">
                                        <Link to="/signIn" className="font-medium text-blue-600 hover:text-blue-500">  Al-ready have an Account? </Link>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transhtmlForm bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign Up</button>
                                </div>
                            </Form>
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 text-neutral-600 bg-white"> Or continue with </span>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleGoogleLogin} type="submit" className="mb-5 w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transhtmlForm border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                            <defs>
                                                <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                                            </defs>
                                            <clipPath id="b">
                                                <use href="#a" overflow="visible"></use>
                                            </clipPath>
                                            <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                                            <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                            <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                            <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                                        </svg>
                                        <span className="ml-4"> Sign in with Google</span>
                                    </div>
                                </button>
                                <button onClick={handleGithubLogin} type="submit" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transhtmlForm border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <div className="flex items-center justify-center">
                                        <FaGithub className='text-gray-600' />
                                        <span className="ml-4"> Sign in with Github</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;