"use client";
import { Briefcase, Scale, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const SPARKLE_COUNT = 20;

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    client: "Jane Smith",
    icon: <Briefcase className="w-5 h-5 text-[#c6f128]" />,
  },
  {
    title: "E-commerce Platform",
    client: "Tech Store",
    icon: <ShoppingCart className="w-5 h-5 text-[#c6f128]" />,
  },
  {
    title: "Lawyer Website",
    client: "Adams Law Firm",
    icon: <Scale className="w-5 h-5 text-[#c6f128]" />,
  },
];

const TechIcons = [
  { icon: <div className="text-4xl">F</div>, name: "Figma", color: "#F24E1E" },
  {
    icon: <div className="text-4xl">Ps</div>,
    name: "Photoshop",
    color: "#31A8FF",
  },
  { icon: <div className="text-4xl">⚛</div>, name: "React", color: "#61DAFB" },
  {
    icon: <div className="text-4xl font-bold">N</div>,
    name: "Next.js",
    color: "#fff",
  },
  {
    icon: <div className="text-4xl">Lv</div>,
    name: "Laravel",
    color: "#FF2D20",
  },
  {
    icon: <div className="text-4xl">🐳</div>,
    name: "Docker",
    color: "#2496ED",
  },
  {
    icon: <div className="text-4xl">TS</div>,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    icon: <div className="text-4xl">🌿</div>,
    name: "MongoDB",
    color: "#47A248",
  },
];

export default function AnimatedBentoGrid() {
  type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  };
  type Sparkle = {
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
  };
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const data = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));

    setSparkles(data);
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#c6f128] opacity-20"
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(198, 241, 40, 0.3); }
          50% { box-shadow: 0 0 40px rgba(198, 241, 40, 0.6); }
        }

        @keyframes buttonFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .tech-icon:hover {
          transform: translateY(-5px) scale(1.1);
          transition: all 0.3s ease;
        }

        .cta-button {
          animation: buttonFloat 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 10px 40px rgba(198, 241, 40, 0.5);
        }

        .cta-button:nth-child(2) {
          animation-delay: 0.5s;
        }

        .cta-button:nth-child(3) {
          animation-delay: 1s;
        }

        .project-card {
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateX(5px);
          background: rgba(198, 241, 40, 0.1);
        }

        .avatar-ring {
          transition: all 0.3s ease;
        }

        .avatar-ring:hover {
          transform: scale(1.2);
          z-index: 10;
        }

        .tag-badge {
          transition: all 0.3s ease;
        }

        .tag-badge:hover {
          background: rgba(198, 241, 40, 0.3);
          transform: scale(1.1);
        }
      `}</style>

      <div className="relative z-10 py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-slide-in">
          Built with Modern
        </h1>
        <h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 animate-slide-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-[#c6f128]">Technology & Expertise</span>
        </h2>

        <div className="mx-auto max-w-7xl space-y-6">
          {/* ROW 1 — TOP (3 CARDS) */}
          <div className="flex flex-col gap-6 lg:flex-row text-left">
            {/* 1. Client Satisfaction */}
            <div
              className="flex-1 justify-center items-center flex flex-col relative overflow-hidden rounded-3xl border border-[#333] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 transition-all duration-300 hover:border-[#c6f128] hover:shadow-[0_0_30px_rgba(198,241,40,0.3)] animate-slide-in"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-8 relative">
                <div className="flex gap-3 mb-3">
                  {AVATARS.slice(0, 4).map((src, i) => (
                    <div
                      key={i}
                      className="avatar-ring h-14 w-14 rounded-full overflow-hidden border-2 border-gray-700 ring-2 ring-black"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <img
                        src={src}
                        className="h-full w-full object-cover"
                        alt="Client"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pl-7">
                  {AVATARS.slice(4, 7).map((src, i) => (
                    <div
                      key={i}
                      className="avatar-ring h-14 w-14 rounded-full overflow-hidden border-2 border-gray-700 ring-2 ring-black"
                      style={{ animationDelay: `${(i + 4) * 0.1}s` }}
                    >
                      <img
                        src={src}
                        className="h-full w-full object-cover"
                        alt="Client"
                      />
                    </div>
                  ))}
                </div>

                {hoveredCard === 1 && (
                  <svg
                    className="absolute top-10 left-12 w-64 h-32 opacity-30"
                    viewBox="0 0 200 100"
                  >
                    <path
                      d="M 20,20 L 80,40 M 60,30 L 100,60 M 120,40 L 160,50"
                      stroke="#c6f128"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4,4"
                      className="animate-pulse-slow"
                    />
                  </svg>
                )}
              </div>

              <h3 className="mb-2 w-full text-2xl font-bold ">Client Satisfaction</h3>
              <p className="text-sm text-white">
                Trusted by leading businesses who love working with us and
                achieving exceptional results
              </p>
            </div>

            {/* 2. Recent Projects */}
            <div
              className="flex-1 relative overflow-hidden rounded-3xl border border-[#333] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 transition-all duration-300 hover:border-[#c6f128] hover:shadow-[0_0_30px_rgba(198,241,40,0.3)] animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >

              <div className="space-y-3">
                {PROJECTS.map((p, i) => (
                  <div
                    key={i}
                    className="project-card flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-[#333] hover:border-[#c6f128]"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gray-800 flex items-center justify-center">
                        {p.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-xs text-gray-500">{p.client}</p>
                      </div>
                    </div>

                    <span className="rounded-full bg-[#c6f128]/10 px-3 py-1 text-[10px] text-[#c6f128] border border-[#c6f128]/20 animate-pulse-slow">
                      ✓ Completed
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="pt-4 text-xl font-bold">Recent Projects</h3>

              <p className="mt-2 text-xs text-gray-500">
                Showcasing our latest work and successful client partnerships
              </p>
            </div>

            {/* 3. Free Consultation */}
            <div
              className="flex-1 relative overflow-hidden rounded-3xl border border-[#333] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 transition-all duration-300 hover:border-[#c6f128] hover:shadow-[0_0_30px_rgba(198,241,40,0.3)] animate-slide-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {["Innovative", "Revolutionary", "Empowering"].map((t, i) => (
                  <span
                    key={i}
                    className="tag-badge rounded-full border border-[#c6f128]/20 bg-black/50 px-4 py-2 text-xs text-[#c6f128]"
                  >
                    {t} +
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2">
                Free Consultation & Strategy Session
              </h3>
              <p className="text-sm text-gray-400">
                Book a complimentary 30-minute consultation to discuss your
                project needs and get expert recommendations
              </p>
            </div>
          </div>

          {/* ROW 2 — BOTTOM (2 CARDS) */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* 4. Cutting Edge Tech */}
            <div
              className="flex-1 relative overflow-hidden rounded-3xl border border-[#333] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 transition-all duration-300 hover:border-[#c6f128] hover:shadow-[0_0_30px_rgba(198,241,40,0.3)] animate-slide-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="mb-6 text-xl font-bold">
                Cutting-Edge Technologies
              </h3>

              <div className="flex flex-wrap gap-4">
                {TechIcons.map((t, i) => (
                  <div
                    key={i}
                    className="tech-icon h-20 w-20 rounded-2xl bg-black border border-[#333] flex items-center justify-center hover:border-[#c6f128] hover:bg-[#c6f128]/5"
                    style={{
                      color: t.color,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {t.icon}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-400">
                We leverage the latest frameworks, libraries, and tools to
                deliver high-performance, scalable solutions for your business.
              </p>
            </div>

            {/* 5. Floating CTA */}
            <div
              className="flex-1 relative overflow-hidden rounded-3xl border border-[#333] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 flex items-center justify-center animate-slide-in"
              style={{ animationDelay: "0.8s" }}
            >
              {/* Animated sparkles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {sparkles.map((s) => (
                  <span
                    key={s.id}
                    className="absolute h-1 w-1 rounded-full bg-[#c6f128] opacity-40"
                    style={{
                      left: `${s.left}%`,
                      top: `${s.top}%`,
                      animation: `sparkle ${s.duration}s ease-in-out infinite`,
                      animationDelay: `${s.delay}s`,
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,241,40,0.15),transparent_70%)] animate-pulse-slow" />

              <div className="relative z-10 text-center space-y-4">
                <h3 className="text-2xl font-bold mb-6">
                  Full-Service Digital Agency
                </h3>
                <p className="text-sm text-gray-400 mb-8">
                  From design to development, we provide end-to-end solutions
                  for your digital needs
                </p>
                <p className="text-xs text-gray-500 mb-8">
                  Schedule your free strategy session today
                </p>

                <div className="flex flex-col gap-4 items-center">
                  <button className="cta-button rounded-full bg-[#c6f128] px-8 py-3 font-bold text-black shadow-lg hover:shadow-[0_0_30px_rgba(198,241,40,0.5)]">
                    🌐 Build Your Website
                  </button>
                  <button className="cta-button rounded-full bg-[#c6f128] px-8 py-3 font-bold text-black shadow-lg hover:shadow-[0_0_30px_rgba(198,241,40,0.5)]">
                    📅 Book Consultation
                  </button>
                  <button className="cta-button rounded-full bg-[#c6f128] px-8 py-3 font-bold text-black shadow-lg hover:shadow-[0_0_30px_rgba(198,241,40,0.5)]">
                    ✨ Start Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
