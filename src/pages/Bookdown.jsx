import React from 'react'
import Header from '../components/header/Header';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer/Footer';

import TimeLine from '../components/timeLine/TimeLine';

export default function Bookdown() {
    const { isDarkMode } = useTheme();

    const timelineItems = [
        {
            title: 'Finished chapter of Pruebas Hipotesis dos poblaciones',
            date: 'Released on June 17th, 2024',
            description: 'Completed the chapter on hypothesis testing for two populations.',
            latest: true
        },
        {
            title: 'Addding new changes of the chapter 5',
            date: 'Released on May 26th, 2024',
            description: 'Incorporated new changes to chapter 5.',
            latest: false
        },
        {
            title: 'Adding new cases for the Conditions and statistical contrast',
            date: 'Released on May 15th, 2024',
            description: 'Added new cases for conditions and statistical contrasts.',
            latest: false
        },
        {
            title: 'Finished version of Pruebas de hipotesis para una poblacion',
            date: 'Released on May 1st, 2024',
            description: 'Completed the chapter on hypothesis testing for one population.',
            latest: false
        },
        {
            title: 'Adding first chapters and R implementations',
            date: 'Released on March 25th, 2024',
            description: 'Started with the first chapters and R implementations.',
            latest: false
        },
        {
            title: 'Implementing AMSMath on Bookdown',
            date: 'Released on March 22th, 2024',
            description: 'Building the first chapter of the book involves implementing new formulas and graphs.',
            latest: false
        },
        {
            title: 'Understanding R-Sintax',
            date: 'Released on March 20th, 2024',
            description: 'Implementing R formulas to recreate mathematical graphs.',
            latest: false
        },
        {
            title: 'Starting with R-Studio',
            date: 'Released on March 18th, 2024',
            description: 'Learning how to compile and build packages on R-Studio.',
            latest: false
        }
        
    ];

    return (
        <>
            <Header />
            <div className={`transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} py-16 sm:py-24 lg:py-32 min-h-screen`}>
                <div className="container mx-auto px-12 sm:px-32 lg:px-20" data-aos="zoom-in">
                    <div className="pb-10">
                        <h1 className="text-xl sm:text-2xl font-bold pb-4">
                            What is a Bookdown?
                        </h1>
                        <h2 className="text-sm sm:text-base lg:text-lg">
                            Bookdown is a powerful tool that enables you to write technical and scientific books efficiently using a simple markup language called Markdown. With Bookdown, you can organize your content into chapters, sections, and subsections, and include elements such as images, tables, mathematical formulas, and programming code.
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-between mt-3">
                        <div className="w-full sm:w-1/2 lg:pr-2 mb-4 sm:mb-0">
                            <a href="https://bookdown.org/yihui/bookdown/">
                                <img src="bookdown/b1.png" alt="BookdownExample1" className="h-64 w-full object-cover rounded-lg" />
                            </a>
                        </div>
                        <div className="w-full sm:w-1/2 lg:pl-2">
                            <a href="https://rubenfcasal.github.io/bookdown_intro/intro.html">
                                <img src="bookdown/b2.png" alt="BookdownExample2" className="h-64 w-full object-cover rounded-lg" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-3 mb-4">
                        <h2 className="text-sm sm:text-base lg:text-lg">
                            Examples like those websites are very well-designed books that everybody can read, with separated sections, titles, clean formatting, etc. Right now, I'm working with my math teacher to convert his simple PDF into a book using Bookdown. That's why I'm learning and utilizing my skills to build that book with resources like LaTeX, R-Studio, and some R to create graphics and other elements.
                        </h2>
                        <h1 className="text-blue-600 text-xl sm:text-2xl font-bold mt-3 mb-5">Timeline</h1>
                    </div>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {timelineItems.map((item, index) => (
                            <TimeLine
                                key={index}
                                title={item.title}
                                date={item.date}
                                description={item.description}
                                latest={item.latest}
                            />
                        ))}
                    </ol>
                    <div className="mt-12 mb-8">
                        <h2 className="text-sm sm:text-base lg:text-lg">
                            Once the project is completed, the repository, which contains the code and materials used to create the book including the implementation of R formulas for mathematical graphs, will be posted. This delay in sharing the repository is necessary to respect copyright and to protect any private information contained within the project. Once everything is ready and any sensitive information is removed or appropriately secured, the repository will be made available for others to access and review.
                        </h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
