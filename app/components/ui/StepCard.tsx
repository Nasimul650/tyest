export default function StepCard({ number, title, description, position }) {
  return (
    <div
      className={`step-card flex ${
        position === "right" ? "justify-end" : "justify-start"
      } mb-40`}
    >
      <div
        className={`relative transform-gpu ${
          position === "left" ? "-rotate-6" : "rotate-6"
        } hover:rotate-0 transition-transform duration-500 ease-out`}
      >
        {/* CURVED CONNECTOR */}
        <svg
          className={`absolute top-6 ${
            position === "right" ? "right-full" : "left-full"
          } hidden md:block`}
          width="140"
          height="120"
          viewBox="0 0 140 120"
        >
          <path
            d={
              position === "right"
                ? "M140 10 C60 60, 60 60, 10 110"
                : "M0 10 C80 60, 80 60, 130 110"
            }
            fill="none"
            stroke="#525252"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
        </svg>

        {/* CARD */}
        <div className="group relative bg-gradient-to-br from-zinc-800/60 to-zinc-900/80 backdrop-blur-md border border-zinc-700/80 rounded-3xl p-8 max-w-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-4">
          {/* HOVER ENERGY GLOW */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(212,255,0,0.18),transparent_60%)]" />

          {/* INNER SHINE */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent opacity-60" />

          {/* NUMBER BADGE */}
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#d4ff00] flex items-center justify-center shadow-[0_0_25px_rgba(212,255,0,0.65)]">
            <span className="text-black font-bold text-lg">{number}</span>
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
