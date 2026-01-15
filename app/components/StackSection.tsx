"use client";

import { CalendarCheck2, Check, Globe, Plus, Star } from "lucide-react";
import Image from "next/image";
import {
  memo,
  useMemo,
  useRef,
  type MutableRefObject,
  type Ref,
  type RefObject,
} from "react";

import { homeData } from "../data/data";
import { AnimatedBeam, Circle } from "./ui/animated-beam";
import Marquee from "./ui/marquee1";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { Sparkles as SparklesComp } from "./ui/sparkles";
import { TimelineContent } from "./ui/timeline-animation";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface Technology {
  id: number;
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  slug: string;
  client: string;
  previewImage: string;
  date: string;
}

/* -------------------------------------------------------------------------- */
/*                              Project Item                                  */
/* -------------------------------------------------------------------------- */

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="group w-[95%] mx-auto bg-bg-card rounded-2xl p-2 border border-border-primary shadow-sm hover:shadow-md hover:bg-bg-card/90 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-bg-tertiary">
            <Image
              src={project.previewImage}
              alt={project.title}
              width={40}
              height={40}
              sizes="40px"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-text-primary">
              {project.title}
            </p>
            <p className="text-xs text-text-muted">{project.client}</p>
          </div>
        </div>

        <span className="px-2 py-1 rounded-full text-xs bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
          <Check className="inline w-3 h-3 mr-1" />
          Completed
        </span>
      </div>
    </div>
  );
};

const Feature3 = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = homeData.data.projects;
  const technologies: Technology[] = homeData.data.technologies;

  // Stable refs (VERY important) — create plain ref objects with useMemo so we don't access .current during render
  const divRefs = useMemo(
    () =>
      Array.from(
        { length: 7 },
        () => ({ current: null } as MutableRefObject<HTMLElement | null>)
      ),
    []
  );

  return (
    <section ref={timelineRef} className="p-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <article className="max-w-5xl mx-auto pb-10 text-center px-8 ">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-primary"
          >
            Built with Modern <br />
            Technology & Expertise
          </h2>
        </article>

        <div className="sm:grid sm:grid-cols-12 gap-4 space-y-4 sm:space-y-0">
          {/* ------------------------------------------------------------------ */}
          {/*                          Client Satisfaction                        */}
          {/* ------------------------------------------------------------------ */}

          <TimelineContent
            animationNum={3}
            timelineRef={timelineRef}
            className="lg:col-span-4 col-span-6 relative border-2 border-accent-primary/30 rounded-xl bg-gradient-to-b from-bg-card pb-20 overflow-hidden"
          >
            <div
              ref={containerRef}
              className="relative flex items-center justify-center py-8 px-4"
            >
              <div className="flex flex-col gap-10 w-full">
                <div className="flex justify-between">
                  {divRefs.slice(0, 4).map((ref, i) => (
                    <Circle
                      key={i}
                      ref={ref as unknown as Ref<HTMLDivElement>}
                      className="bg-bg-secondary p-[1px]"
                    >
                      <Image
                        src="/assets/user.jpg"
                        alt="User"
                        width={40}
                        height={40}
                        sizes="40px"
                        className="rounded-full object-cover"
                      />
                    </Circle>
                  ))}
                </div>

                <div className="flex justify-between w-[80%] mx-auto">
                  {divRefs.slice(4).map((ref, i) => (
                    <Circle
                      key={i}
                      ref={ref as unknown as Ref<HTMLDivElement>}
                      className="bg-bg-secondary p-[1px]"
                    >
                      <Image
                        src="/assets/user.jpg"
                        alt="User"
                        width={40}
                        height={40}
                        sizes="40px"
                        className="rounded-full object-cover"
                      />
                    </Circle>
                  ))}
                </div>
              </div>

              {divRefs.map((from, i) =>
                divRefs
                  .slice(i + 1)
                  .map((to, j) => (
                    <AnimatedBeam
                      key={`${i}-${j}`}
                      containerRef={
                        containerRef as unknown as RefObject<HTMLElement>
                      }
                      fromRef={from as unknown as RefObject<HTMLElement>}
                      toRef={to as unknown as RefObject<HTMLElement>}
                      dotted
                      dotSpacing={8}
                      duration={3 + j}
                      gradientStartColor="#ccff00"
                      gradientStopColor="#a3d900"
                    />
                  ))
              )}
            </div>

            <article className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bg-card via-bg-card to-transparent text-left">
              <h3 className="text-lg md:text-xl font-medium text-text-primary">
                Client Satisfaction
              </h3>
              <p className="text-xs md:text-sm text-text-muted">
                Trusted by leading businesses who love working with us and
                achieving exceptional results
              </p>
            </article>

            <ProgressiveBlur
              className="absolute top-0 left-0 right-0 h-62"
              direction="bottom"
              blurIntensity={0.06}
            />
          </TimelineContent>

          {/* ------------------------------------------------------------------ */}
          {/*                            Recent Projects                          */}
          {/* ------------------------------------------------------------------ */}

          <TimelineContent
            animationNum={4}
            timelineRef={timelineRef}
            className="lg:col-span-4 col-span-6 relative border-2 border-accent-primary/30 rounded-xl bg-gradient-to-b from-bg-card overflow-hidden p-2"
          >
            <div className="space-y-1 mb-8 text-left">
              {projects.slice(0, 3).map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
              <ProgressiveBlur
                className="absolute top-10 left-0 right-0 h-75"
                direction="bottom"
                blurIntensity={0.4}
              />
            </div>

            <article className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-bg-card via-bg-card to-transparent text-left">
              <h3 className="text-lg md:text-xl font-medium text-text-primary mb-1">
                Recent Projects
              </h3>
              <p className="text-xs md:text-sm text-text-muted">
                Showcasing our latest work and successful client partnerships
              </p>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={5}
            timelineRef={timelineRef}
            className="lg:col-span-4 col-span-6 relative border-2 border-accent-primary/30 p-2 rounded-xl flex flex-col justify-between overflow-hidden bg-gradient-to-b from-bg-card "
          >
            <div className="space-y-0.5 flex flex-col items-center pt-10 pb-2 relative z-10">
              <TimelineContent
                animationNum={6}
                timelineRef={timelineRef}
                className="flex gap-0"
              >
                <button className=" px-4 h-10 rounded-lg hover:bg-accent-primary hover:shadow-lg hover:shadow-accent-primary/30 hover:text-text-accent text-accent-primary border border-accent-primary grid place-content-center text-[16px]">
                  Innovative
                </button>
                <button className=" px-2 h-10 hover:bg-accent-primary hover:text-text-accent rounded-full text-accent-primary border border-accent-primary grid place-content-center ">
                  <Plus className="h-6 w-6" />
                </button>
              </TimelineContent>
              <TimelineContent
                animationNum={7}
                timelineRef={timelineRef}
                className="flex gap-0 pl-4"
              >
                <button className=" px-2 h-10 bg-accent-primary  text-text-accent rounded-full  border border-accent-primary grid place-content-center">
                  <Plus className="h-6 w-6" />
                </button>
                <button className=" px-6 h-10 rounded-lg bg-accent-primary/20 text-accent-primary border border-accent-primary grid place-content-center text-[16px]">
                  Revolutionary
                </button>
              </TimelineContent>

              <TimelineContent
                animationNum={8}
                timelineRef={timelineRef}
                className="flex gap-0 pr-8"
              >
                <button className=" px-6 h-10 rounded-lg hover:bg-accent-primary hover:shadow-lg hover:shadow-accent-primary/30 hover:text-text-accent  text-accent-primary border border-accent-primary grid place-content-center text-[16px]">
                  Empowering
                </button>
                <button className=" px-2 h-10 hover:bg-accent-primary hover:shadow-lg hover:shadow-accent-primary/30 hover:text-text-accent rounded-full text-accent-primary border border-accent-primary grid place-content-center">
                  <Plus className="h-6 w-6" />
                </button>
              </TimelineContent>
            </div>

            <article className="relative z-10 text-left">
              <h3 className="px-1 pt-1 text-text-primary xl:text-xl text-lg font-medium">
                Free Consultation & Strategy Session
              </h3>
              <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
                Book a complimentary 30-minute consultation to discuss your
                project needs and get expert recommendations
              </p>
            </article>
            <SparklesComp
              density={100}
              speed={1.2}
              size={1.2}
              direction="top"
              opacitySpeed={2}
              color="#0f0f0f"
              className="absolute z-10 bottom-0 h-full w-full "
            />

            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[35%] w-full"
              blurIntensity={3}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute -top-20 left-0 h-[40%] w-full"
              blurIntensity={0.5}
            />
          </TimelineContent>

          {/* ------------------------------------------------------------------ */}
          {/*                        Cutting Edge Technologies                    */}
          {/* ------------------------------------------------------------------ */}

          <TimelineContent
            animationNum={6}
            timelineRef={timelineRef}
            className="col-span-6 h-96 relative border-2 border-accent-primary/30 rounded-lg bg-gradient-to-b from-bg-card overflow-hidden"
          >
            <div className="mt-6">
              <Marquee className="[--duration:20s] [--gap:3rem] pb-6">
                {technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="w-20 h-20 rounded-xl bg-bg-secondary border border-border-primary p-2 flex items-center justify-center hover:border-accent-primary mx-4"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={60}
                      height={60}
                      sizes="60px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:20s] [--gap:3rem] pb-6">
                {technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="w-20 h-20 rounded-xl bg-bg-secondary border border-border-primary p-2 flex items-center justify-center hover:border-accent-primary mx-4"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={60}
                      height={60}
                      sizes="60px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            <article className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-bg-card via-bg-card to-transparent text-left">
              <h3 className="text-3xl md:text-2xl font-medium text-text-primary mb-2">
                Cutting-Edge Technologies
              </h3>
              <p className="text-xs md:text-sm text-text-muted">
                We leverage the latest frameworks, libraries, and tools to
                deliver high-performance, scalable solutions for your business.
              </p>
            </article>
          </TimelineContent>

          {/* ------------------------------------------------------------------ */}
          {/*                              CTA Section                            */}
          {/* ------------------------------------------------------------------ */}

          <TimelineContent
            animationNum={7}
            timelineRef={timelineRef}
            className="md:col-span-6 col-span-12 relative rounded-xl overflow-hidden border-2 md:h-full h-96 border-accent-primary/30 bg-gradient-to-b from-bg-card"
          >
            <div className="relative h-full w-full overflow-hidden">
              <SparklesComp
                density={800}
                speed={1.2}
                size={1.2}
                direction="top"
                opacitySpeed={2}
                color="#ccff00"
                className="absolute inset-x-0 bottom-0 h-full w-full "
              />
            </div>
            <TimelineContent
              animationNum={8}
              timelineRef={timelineRef}
              className="flex gap-2 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary justify-between p-2 top-6 rounded-xl absolute -left-48 rotate-6"
            >
              <p className="text-text-primary text-[16px]">
                Custom Web Development
              </p>
              <button className="bg-accent-primary sm:w-fit w-72 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent text-[20px]">
                <Globe size={20} /> Build Your Website
              </button>
            </TimelineContent>

            {/* Top Right Rotated Card */}
            <TimelineContent
              animationNum={9}
              timelineRef={timelineRef}
              className="flex gap-4 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary p-2 top-24 rounded-xl absolute -right-10 -rotate-6"
            >
              <button className="bg-accent-primary sm:w-fit w-72 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent text-[20px]">
                <CalendarCheck2 size={20} /> Book Consultation
              </button>
              <p className="text-text-primary text-[16px]">
                Schedule your free strategy call
              </p>
            </TimelineContent>
            <TimelineContent
              animationNum={10}
              timelineRef={timelineRef}
              className="flex gap-4 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary p-2 bottom-32 rounded-xl absolute -left-10 rotate-6"
            >
              <p className="text-text-primary text-[16px]">
                Professional UI/UX Design
              </p>
              <button className="bg-accent-primary sm:w-fit w-52 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent text-[20px]">
                <Star size={20} /> Start Design
              </button>
            </TimelineContent>

            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[35%] w-full"
              blurIntensity={0.5}
            />
            <article className="absolute z-10 right-0 bottom-0 left-0 w-full bg-gradient-to-t from-bg-card via-bg-card to-transparent p-3 pt-[100px] text-left">
              <h3 className="px-1 pt-1 text-text-primary text-xl font-medium">
                Full-Service Digital Agency
              </h3>
              <p className="mt-1 px-1 pb-1 font-normal text-text-muted text-sm w-full">
                From design to development, we provide end-to-end solutions for
                your digital needs
              </p>
            </article>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
};

export default memo(Feature3);
