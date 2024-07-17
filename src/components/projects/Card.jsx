import React from 'react'

export default function Card({ image, title, description, navigateTo }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
          <a href={`/${navigateTo}`}>
            <img className="rounded-t-lg w-full" src={image} alt="" />
          </a>
          <div className="p-5 flex flex-col flex-grow">
            <a href={`/${navigateTo}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{description}</p>
            <div className="flex justify-start">
              <a
                href={`/${navigateTo}`}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#614385] to-[#516395] group-hover:from-[#614385] group-hover:to-[#516395] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[#614385]/50 dark:focus:ring-[#516395]/50 hover:shadow-lg hover:shadow-[#614385]/50 hover:shadow-[#516395]/50"

              >
                <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Read More
                </span>
              </a>
            </div>
          </div>
        </div>
      );
}
