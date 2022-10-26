import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://critictech-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (

        <section className='grid grid-cols-6'>
            <div className='col-span-1 mt-12'>
                {
                    categories.map(category => <p className='text-center py-3 text-green-700 hover:text-green-400' key={category.id}><Link to={`/courses/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
            <div className=" px-4 py-12 sm:px-6 lg:py-16 lg:px-8 col-span-5">
                <div className=" mx-auto max-w-7xl">
                    <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                        {
                            categories.map(category =>
                                <div key={category.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                    <div className="flex-shrink-0">
                                        <img className="object-cover w-full h-48" src={category.image} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                        <div className="flex-1">
                                            <div className="block mt-2">
                                                <p className="text-xl font-semibold text-neutral-600">{category.name}</p>
                                                <p className="mt-3 text-base text-gray-500">{category.description.slice(0, 150) + "..."}</p>
                                                <button className='bg-green-600 hover:bg-green-400 text-white px-10 py-1 mt-5'><Link to={`/courses/${category.id}`}>Show Details</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;