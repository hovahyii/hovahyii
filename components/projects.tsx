"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectData from '../public/projects.json'; // Import the JSON data
import Slideshow from "@/components/carousel";


interface ProjectPageProps {
  isDarkMode: boolean;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ isDarkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={`lg:w-2/3 overflow-y-auto ${isDarkMode ? 'dark' : ''}`}>
      <div className="mt-6 lg:mt-8 lg:ml-6">
        <h1 className={`text-4xl font-bold mb-4 text-center md:text-left ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h1>
        <div className="flex space-x-4 mb-2">
          <Badge
            className={selectedFilter === "Web" ? " bg-red-500" : " border-white"}
            onClick={() => handleFilterClick("Web")}
          >
            Web
          </Badge>
          <Badge
            className={selectedFilter === "Engineering" ? " bg-red-500" : " border-white"}
            onClick={() => handleFilterClick("Engineering")}
          >
            Engineering
          </Badge>
          <Badge
            className={selectedFilter === "IoT" ? " bg-red-500" : " border-white"}
            onClick={() => handleFilterClick("IoT")}
          >
            IoT
          </Badge>
          <Badge
            className={selectedFilter === "3D Modeling" ? " bg-red-500" : " border-white"}
            onClick={() => handleFilterClick("3D Modeling")}
          >
            3D Modeling
          </Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-6 lg:ml-6 lg:grid-cols-2 gap-4">
        {projectData
          .filter(
            (project) => !selectedFilter || project.filter.includes(selectedFilter)
          )
          .map((project, index) => (
            <Card key={index} className="w-full transition-shadow duration-300 hover:shadow-lg">
              <Link href={project.website} target="_blank" rel="noopener noreferrer" className="block">
                <CardHeader className="flex justify-start items-start">
                  <div className="flex items-center">
                    <Image src={project.logo} alt={project.name} width={32} height={32} className="mr-2" />
                    <CardTitle className="text-sm truncate">{project.name}</CardTitle>
                    <Badge
                      variant="default"
                      className={`flex absolute ml-56 md:ml-72 text-white ${
                        project.status === "Completed"
                          ? "bg-green-500"
                          : project.status === "On-going"
                          ? "bg-orange-500"
                          : project.status === "On-hold" ||
                            project.status === "Maintenance"
                          ? "bg-red-500"
                          : ""
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  {project.revenue && (
                    <Badge variant="default" className="bg-gray-200 text-black">
                      {project.revenue}
                    </Badge>
                  )}
                  {project.award && (
                    <Badge variant="default" className="bg-yellow-500 text-white ">
                      {project.award}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between">
                  <div className="text-xs" dangerouslySetInnerHTML={{ __html: project.type }} />
                </CardFooter>
              </Link>
            </Card>
          ))}
      </div>
      <Slideshow isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProjectPage;
