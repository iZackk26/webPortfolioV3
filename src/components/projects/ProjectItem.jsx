import React from 'react'
import { Link } from 'react-router-dom'
import ButtonProject from '../buttons/ButtonProject'

export default function ProjectItem({ project }) {
    return (
        <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 p-4 sm:p-6" data-aos="zoom-in">
            <div className="relative w-full h-48 md:w-48 md:h-48">
                <img
                    src={project.image}
                    alt="Project Image"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-bold">
                    <a href={project.linkTo} className="hover:underline" target="_blank" rel="noopener noreferrer">
                        {project.title}
                    </a>
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags && project.tags.map((tag, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="pt-2">
                    <ButtonProject text="Read More" linkTo={project.linkTo} />
                </div>
            </div>
        </article>
    );
}
