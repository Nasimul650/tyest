"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { homeData } from "../data/data";
import ProjectCard from "./ui/ProjectCard";
import ProjectModal from "./ui/ProjectModal";

const FeaturedProjects: React.FC = () => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = homeData.data.projects;

  useEffect(() => {
    // Top row - moves left
    if (topRowRef.current) {
      gsap.to(topRowRef.current, {
        x: -500,
        duration: 15,
        repeat: -1,
        ease: "none",
      });
    }

    // Bottom row - moves right
    if (bottomRowRef.current) {
      gsap.to(bottomRowRef.current, {
        x: 500,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  const handleCardClick = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div
      id="featuredProjects"
      className="relative bg-black py-20 px-6 overflow-hidden text-left"
    >
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-blue-950/30"></div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="mx-16 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured projects
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of projects showcasing our expertise and creativity in
            web development.
          </p>
        </div>

        {/* Top Row - Moving Left with Tilt */}
        <div className="relative mb-8 overflow-visible -rotate-3 transform">
          <div className="overflow-hidden relative">
            {/* Left Shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            {/* Right Shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            <div ref={topRowRef} className="flex gap-8 w-max">
              {[...projects, ...projects, ...projects].map((project, index) => (
                <div
                  key={`top-${index}`}
                  onClick={() => handleCardClick(project)}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Moving Right with Opposite Tilt */}
        <div className="relative mb-16 overflow-visible -rotate-3 transform">
          <div className="overflow-hidden relative">
            {/* Left Shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            {/* Right Shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            <div
              ref={bottomRowRef}
              className="flex gap-8 w-max -translate-x-[500px]"
            >
              {[...projects, ...projects, ...projects].map((project, index) => (
                <div
                  key={`top-${index}`}
                  onClick={() => handleCardClick(project)}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-5xl font-bold text-white mb-2">250+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-5xl font-bold text-white">120+</span>
            </div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="text-5xl font-bold text-white">15</span>
            </div>
            <div className="text-gray-400 text-sm">Industry Awards</div>
          </div>
        </div>
      </div>
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default FeaturedProjects;
