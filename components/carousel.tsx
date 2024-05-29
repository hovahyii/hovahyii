"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import projectData from '../public/photos.json'; // Import the JSON data

interface CarouselProps {
  isDarkMode: boolean;
}


const Photos: React.FC<CarouselProps> = ({ isDarkMode }) => {
  return (
    <div className="md:ml-8  overflow-y-auto">
      <div className="mt-6 lg:mt-8">
        <h1 className={`text-4xl font-bold mb-4 text-center md:text-left  ${isDarkMode ? 'text-white' : 'text-black'}`}>Photos</h1>
      </div>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {projectData.map((project, index) => (
          <div key={index} className="relative w-full h-96">
            <Image 
              src={project.photo} 
              alt={project.name} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-md bg-gray-200"
            />
            <p className="legend">{project.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Photos;
