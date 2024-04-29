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

const ProjectPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="lg:w-2/3 overflow-y-auto">
      <div className="mt-6 lg:mt-8 lg:ml-6">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="flex space-x-4 mb-2">
          <Badge
  className={selectedFilter === "Web" ? "selected" : ""}
  onClick={() => handleFilterClick("Web")}
          >
            Web
          </Badge>
          <Badge
            className={selectedFilter === "Engineering" ? "selected" : ""}

            onClick={() => handleFilterClick("Engineering")}
          >
            Engineering
          </Badge>
          <Badge
  className={selectedFilter === "IoT" ? "selected" : ""}
  onClick={() => handleFilterClick("IoT")}
          >
            IoT
          </Badge>
          <Badge
  className={selectedFilter === "3D Modeling" ? "selected" : ""}
  onClick={() => handleFilterClick("3D Modeling")}
          >
            3D Modeling
          </Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-6 lg:ml-6 lg:grid-cols-2 gap-4">
        {projectData
          .filter(
            (project) => !selectedFilter || project.filter === selectedFilter
          )
          .map((project, index) => (
            <Card key={index} className="w-full transition-shadow duration-300 hover:shadow-lg">
              <Link href={project.website} target="_blank" rel="noopener noreferrer" className="block">
                <CardHeader className="flex justify-start items-start ">
                  <div className="flex items-center">
                    <Image src={project.logo} alt={project.name}  width={32} height={32}  className="mr-2" />
                    <CardTitle className="text-sm">{project.name}</CardTitle>
                  
                    <Badge
                      variant="default"
                      className={`flex absolute ml-56 md:ml-80 text-white ${
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
                </CardHeader>
        
                <CardContent>
            
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between">
                  <div className="text-xs" dangerouslySetInnerHTML={{__html:project.type}} />
                </CardFooter>
              </Link>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProjectPage;
