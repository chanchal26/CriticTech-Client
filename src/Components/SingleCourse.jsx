import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const data = useLoaderData();
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-purple-700">

                        {data.name}
                    </h2>

                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src={data.image}
                        alt=""
                    />
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">

                    Platform
                </h2>
                <p className="text-base text-gray-700 md:text-lg pb-5">
                    {data.platform}
                </p>
                <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">

                    Skill Needed
                </h2>
                <p className="text-base text-gray-700 md:text-lg pb-5">
                    {data.skill}
                </p>
                <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">

                    Benefits
                </h2>
                <p className="text-base text-gray-700 md:text-lg pb-5">
                    {data.benefits}
                </p>
                <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">

                    Popularity
                </h2>
                <p className="text-base text-gray-700 md:text-lg pb-5">
                    {data.popularity}
                </p>
                <h2 className="max-w-lg mb-6 font-sans text-xl font-semibold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">

                    Description
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                    {data.description}
                </p>
                <div className='gap-5'>
                    <Link to='/price' className='mr-4 mb-4'><button className="btn btn-wide">Get Premium Access</button></Link>
                    <Link><button className="btn btn-wide">Download PDF</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;