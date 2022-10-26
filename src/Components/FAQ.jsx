import React, { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};


const FAQ = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        Importance of Computer Programming.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg ">
                        Computer programming is a fundamental skill for so many different applications, not just software development or cutting-edge research into artificial intelligence. It makes banking more accessible, smooths out supply lines, and creates those fantastic online experiences we love.
                    </p>
                </div>
                <div className="space-y-4">
                    <Item title="Is programming necessary to learn?">
                        Computer programming is a desirable skill because so much of our world is automated online. As a computer programmer, you will write and test code to create websites and software programs or to keep programs running and functioning well.
                    </Item>
                    <Item title="Is programming useful in future?">
                        Coding Skills Will Be Essential in Many Career Paths in The Near Future. Coding skills are a must-have in the new digital economy. People who want to become successful in the future, will have to learn how to code. Programmers are currently in high demand and will be even more so in the near future.
                    </Item>
                    <Item title="Which coding language is best?">
                        What coding and programming language should i learn? JavaScript and Python, two of the most popular languages in the startup industry, are in high demand. Most startups use Python-based backend frameworks such as Django (Python), Flask (Python), and NodeJS (JavaScript).
                    </Item>
                    <Item title="Is coding a good career?">
                        Yes! Coding can be a good career for many professionals. Those with coding jobs often enjoy a high salary, work flexibility (such as the ability to find a remote coding job), and plentiful job opportunities.
                    </Item>
                    <Item title="Does coding require math?">
                        While some fields of programming require you to have extensive knowledge of mathematics (such as game development and machine learning), you don't need advanced math skills for most coding jobs.
                    </Item>
                    <Item title="Can AI learn to code?">
                        Microsoft and Cambridge University researchers have developed artificial intelligence that can write code and called it DeepCoder. The tool can write working code after searching through a huge code database.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default FAQ;