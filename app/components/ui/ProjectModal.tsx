"use client";

import { gsap } from "gsap";
import { Calendar, ExternalLink, Share2, Tag, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Button from "./Button";

interface Technology {
  id?: number;
  name: string;
  icon?: string;
}

interface Category {
  id?: number;
  name: string;
  slug?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    client: string;
    categories: Category[] | string[];
    date: string;
    demoUrl: string;
    images: string[];
    previewImage: string;
    description: string;
    features: { title: string; description: string }[];
    technologies: Technology[] | string[];
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const images = project?.images;

  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % images.length);

  const shareUrl = "/";

  const prev = () =>
    setActive((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!modalRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        }
      );
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categories = project.categories.map((c) =>
    typeof c === "string" ? c : c.name
  );

  return (
    <div
      className="fixed inset-0 z-[9999] bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Center wrapper */}
      <div className="h-screen w-full flex items-center justify-center p-6">
        {/* Modal */}
        <div
          ref={modalRef}
          className="relative w-full max-w-[1200px] max-h-[90vh] rounded-3xl bg-[#0b0b0c] shadow-[0_40px_120px_rgba(0,0,0,0.7)] flex flex-col"
        >
          {/* HEADER (sticky, always visible) */}
          <div className="flex items-center justify-between px-8 py-6 shrink-0">
            <h2 className="text-lg font-semibold text-white">
              {project.title}
            </h2>
            <div className="relative">
              <div className="md:absolute -right-80 -top-10 rounded-full bg-white/15 hover:bg-white/10 p-2">
                <button
                  onClick={onClose}
                  className="w-9 h-9 transition flex items-center justify-center text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="overflow-y-auto px-8 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
              {/* LEFT SIDEBAR */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-[#111] border border-white/10 overflow-hidden">
                  <div className="bg-[#d4ff00] px-5 py-3 text-sm font-semibold text-black">
                    Project Details
                  </div>

                  <div className="p-5 space-y-7 text-sm text-white/80">
                    <div className="flex gap-3">
                      <Tag className="w-5 h-5" />
                      <div>
                        <p className="text-sm uppercase text-white mb-2">
                          Project Name
                        </p>
                        <p>{project.title}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <User className="w-5 h-5" />
                      <div>
                        <p className="text-sm uppercase text-white mb-2">
                          Client
                        </p>
                        <p>{project.client}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Tag className="w-5 h-5" />
                      <div>
                        <p className="text-xs uppercase text-white mb-3">
                          Categories
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {categories.map((cat, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center rounded-full bg-[#5a6b16] px-3 py-1 text-xs text-gray-200 border"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Calendar className="w-5 h-5" />
                      <div>
                        <p className="text-xs uppercase text-white mb-2">
                          Date
                        </p>
                        <p>{formattedDate}</p>
                      </div>
                    </div>

                    <div className="flex md:flex-row flex-col gap-3 pt-2">
                      {/* Primary */}
                      <Button
                        href={project.demoUrl}
                        className="bg-[#d4ff00] text-black hover:opacity-90"
                      >
                        <ExternalLink className="md:w-4 md:h-4 mr-1 w-4 h-3.5" />
                        <span>View Live</span>
                      </Button>

                      {/* Secondary */}
                      <Button className="bg-gray-950 text-white border-gray-300 hover:bg-gray-900">
                        <ExternalLink className="md:w-4 md:h-4 mr-1 w-4 h-3.5" />
                        <span>View Demo</span>
                      </Button>
                    </div>

                    <div className="pt-4 border-t  border-neutral-700 flex justify-between flex-wrap items-center gap-3">
                      <h3 className="text-light font-medium flex items-center">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share:
                      </h3>
                      <div className="flex gap-2">
                        <FacebookShareButton
                          url={shareUrl}
                          title={project.title}
                          className="hover:opacity-80 transition-opacity duration-300"
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={shareUrl}
                          title={project.title}
                          className="hover:opacity-80 transition-opacity duration-300"
                        >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={shareUrl}
                          className="hover:opacity-80 transition-opacity duration-300"
                        >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton
                          url={shareUrl}
                          title={project.title}
                          separator=" - "
                          className="hover:opacity-80 transition-opacity duration-300"
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-[#111] border border-white/10 p-6 text-center">
                  <h3 className="text-white font-semibold mb-2 text-2xl">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    Lets discuss how our service can help your business grow.
                  </p>
                  <Button className="px-16 border rounded-full border-white bg-[#d4ff00] py-4 text-sm font-medium text-black">
                    Lets Talk
                  </Button>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="space-y-10">
                {/* IMAGE CAROUSEL */}
                <div className="relative rounded-2xl bg-[#111] p-4">
                  {/* Main Image */}
                  <div className="relative h-[360px] rounded-xl overflow-hidden">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                      <Image
                        fill
                        src={images[active]}
                        alt={project.title}
                        className="object-cover"
                      />
                    </div>

                    {/* Controls */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
                        >
                          ‹
                        </button>
                        <button
                          onClick={next}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {images.length > 1 && (
                    <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                      {images.map((img: string, i: number) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition ${
                            active === i
                              ? "border-[#d4ff00]"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`thumb-${i}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* PROJECT OVERVIEW */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Project Overview
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* FEATURES */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Key Features
                  </h3>
                  <div className="space-y-4 bg-[#19191C] p-5 rounded-xl">
                    {project.features.map((f: any, i: number) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#d4ff00]/20 text-[#d4ff00] flex items-center justify-center">
                          ✓
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {f.title}
                          </p>
                          <p className="text-xs text-white/50">
                            {f.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECHNOLOGY STACK */}
                <div className="bg-[#19191C] p-8 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((t: any, i: number) => {
                      const name = typeof t === "string" ? t : t.name;
                      const icon = typeof t === "string" ? null : t.icon;

                      return (
                        <div
                          key={i}
                          className="rounded-xl bg-[#111] border border-white/10 p-4 w-[110px] text-center"
                        >
                          {icon ? (
                            <Image
                              src={icon}
                              alt={name}
                              width={40}
                              height={40}
                              className="mx-auto mb-2 object-contain"
                            />
                          ) : (
                            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-black flex items-center justify-center text-white font-bold">
                              {name[0]}
                            </div>
                          )}
                          <p className="text-xs text-white/70">{name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SCROLLABLE */}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
