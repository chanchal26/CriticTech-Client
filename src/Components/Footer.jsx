import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <Link
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-purple-400 dark:text-violet-400">
                            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Company
                        </span>
                    </Link>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-semibold tracking-wide text-gray-800">
                            Category
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    World
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Games
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    References
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-gray-800">
                            Business
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Web
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    eCommerce
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Business
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Entertainment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-gray-800">Apples</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Media
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Brochure
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Nonprofit
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Educational
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-gray-800">Cherry</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Infopreneur
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Personal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Wiki
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Forum
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2022 CriticTech All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <Link
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                        </svg>
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                            <circle cx="15" cy="15" r="4" />
                            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                        </svg>
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;