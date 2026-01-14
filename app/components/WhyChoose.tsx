"use client";
import {
  CheckCircle,
  CheckCircle2,
  CircleX,
  DollarSign,
  Medal,
  Palette,
  Target,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import React from "react";
import AnimatedMarquee from "./AnimatedMarquee";
import Button from "./ui/Button";

// Feature comparison data structure

interface FeatureComparison {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  algorize: {
    text: string;
    impact: "positive" | "negative";
  };
  agencies: {
    text: string;
    impact: "positive" | "negative";
  };
  designer: {
    text: string;
    impact: "positive" | "negative";
  };
  freelancers: {
    text: string;
    impact: "positive" | "negative";
  };
  tools: {
    text: string;
    impact: "positive" | "negative";
  };
}

const comparisonData: { features: FeatureComparison[] } = {
  features: [
    {
      name: "Speed",
      icon: Zap,
      algorize: {
        text: "Quick turnaround",
        impact: "positive",
      },
      agencies: {
        text: "Slow, multi-step",
        impact: "negative",
      },
      designer: {
        text: "Uncertain",
        impact: "positive",
      },
      freelancers: {
        text: "Unpredictable timing",
        impact: "negative",
      },
      tools: {
        text: "Fast setup",
        impact: "positive",
      },
    },
    {
      name: "Flexibility",
      icon: Target,
      algorize: {
        text: "Adapts to any need",
        impact: "positive",
      },
      agencies: {
        text: "Fixed packages",
        impact: "negative",
      },
      designer: {
        text: "Narrow scope",
        impact: "negative",
      },
      freelancers: {
        text: "Flexible but uneven",
        impact: "positive",
      },
      tools: {
        text: "Limited customization",
        impact: "negative",
      },
    },
    {
      name: "Quality",
      icon: CheckCircle2,
      algorize: {
        text: "Consistently high",
        impact: "positive",
      },
      agencies: {
        text: "Good but process-heavy",
        impact: "positive",
      },
      designer: {
        text: "Good, skill dependent",
        impact: "positive",
      },
      freelancers: {
        text: "Uncertain",
        impact: "negative",
      },
      tools: {
        text: "Template-based",
        impact: "negative",
      },
    },
    {
      name: "Scalability",
      icon: TrendingUp,
      algorize: {
        text: "Scale up anytime",
        impact: "positive",
      },
      agencies: {
        text: "Hard to expand fast",
        impact: "negative",
      },
      designer: {
        text: "Limited capacity",
        impact: "negative",
      },
      freelancers: {
        text: "Hard to scale",
        impact: "negative",
      },
      tools: {
        text: "Very limited",
        impact: "negative",
      },
    },
    {
      name: "Cost Effectiveness",
      icon: DollarSign,
      algorize: {
        text: "High value for spend",
        impact: "positive",
      },
      agencies: {
        text: "High cost, lower value",
        impact: "negative",
      },
      designer: {
        text: "Fixed salary & overhead",
        impact: "negative",
      },
      freelancers: {
        text: "Budget friendly but risky",
        impact: "positive",
      },
      tools: {
        text: "Low cost, low value",
        impact: "negative",
      },
    },
  ],
};

// Platform configuration
interface Platform {
  id: "algorize" | "agencies" | "designer" | "freelancers" | "tools";
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  isHighlighted: boolean;
}

const platforms: Platform[] = [
  {
    id: "algorize",
    name: "Algorize",
    icon: Medal,
    description:
      "Expert-driven and committed to higher quality, with efficient results and full support.",
    isHighlighted: true,
  },
  {
    id: "agencies",
    name: "Typical Agencies",
    icon: Palette,
    description:
      "Strong process and craft; longer timelines and premium pricing.",
    isHighlighted: false,
  },
  {
    id: "designer",
    name: "Full-time Designer",
    icon: Users,
    description:
      "Consistent brand knowledge, but higher costs and limited bandwidth.",
    isHighlighted: false,
  },
  {
    id: "freelancers",
    name: "Freelancers",
    icon: User,
    description:
      "Flexible and budget-friendly; variable consistency and availability.",
    isHighlighted: false,
  },
];

export default function WhyChoose(): React.JSX.Element {
  return (
    <>
      <section className="text-white py-12 md:py-20 px-4 md:px-6 lg:px-8 relative bg-black">
        {/* Decorative background glows with yellow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent-primary/15 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-primary/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 md:mb-6">
              <span className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium bg-white/10 border border-white/20 rounded-full">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-[60px] lg:leading-[75px] font-bold mb-4 md:mb-6">
              Why Choose
            </h2>
            <p className="text-sm text-sm md:text-[20px] text-[#b8b8b8] leading-[32px] max-w-2xl mx-auto px-4">
              Get a premium website or custom business solution
              <br className="hidden sm:block" />
              that meets your goals and drives measurable growth.
            </p>
          </div>

          {/* Column labels (md+) */}
          <div className="hidden md:block">
            <div
              className="mt-12 grid"
              style={{
                gridTemplateColumns: `minmax(200px, 1fr) repeat(${platforms.length}, minmax(180px, 1fr))`,
              }}
            >
              <div className="text-xs uppercase tracking-wide text-gray-400 p-4 text-left">
                Feature
              </div>
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className={`text-xs uppercase tracking-wide p-4 text-center ${
                    platform.isHighlighted
                      ? "text-accent-primary font-bold bg-[radial-gradient(circle_at_center,#ccff0042_0%,transparent_40%)]"
                      : "text-gray-400 bg-transparent"
                  }`}
                >
                  {platform.isHighlighted ? (
                    <div className="flex items-center justify-center gap-2">
                      <span>{platform.name}</span>
                    </div>
                  ) : (
                    platform.name
                  )}
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {comparisonData.features.map((feature, featureIndex) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.name}
                  className={`grid ${featureIndex === 0 ? "mt-4" : ""}`}
                  style={{
                    gridTemplateColumns: `minmax(200px, 1fr) repeat(${platforms.length}, minmax(180px, 1fr))`,
                  }}
                >
                  {/* Feature name column */}
                  <div
                    className={`flex items-center gap-3 p-4 bg-gray-900/50 ${
                      featureIndex === 0 ? "rounded-tl-2xl" : ""
                    } ${
                      featureIndex === comparisonData.features.length - 1
                        ? "rounded-bl-2xl"
                        : ""
                    } border-b border-r border-gray-800/80`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                      <FeatureIcon
                        className={`h-5 w-5 ${
                          platforms.some((p) => p.isHighlighted)
                            ? "text-accent-primary"
                            : "text-gray-500"
                        }`}
                      />
                    </div>
                    <span className="font-semibold text-white text-sm">
                      {feature.name}
                    </span>
                  </div>

                  {/* Platform columns */}
                  {platforms.map((platform, platformIndex) => {
                    const featureData = feature[platform.id];
                    const isPositive = featureData.impact === "positive";
                    const isNegative = featureData.impact === "negative";
                    const ImpactIcon = isPositive ? CheckCircle : CircleX;

                    return (
                      <div
                        key={platform.id}
                        className={`
                        p-4 flex items-center justify-center
                        ${
                          platform.isHighlighted
                            ? "bg-linear-to-br from-accent-primary/20 via-accent-primary/10 to-transparent"
                            : "bg-gray-900/30"
                        }
                        ${
                          featureIndex === 0 &&
                          platformIndex === platforms.length - 1
                            ? "rounded-tr-2xl"
                            : ""
                        }
                        ${
                          featureIndex === comparisonData.features.length - 1 &&
                          platformIndex === platforms.length - 1
                            ? "rounded-br-2xl"
                            : ""
                        }
                        ${
                          featureIndex === 0 && platform.isHighlighted
                            ? "border-t-2 border-accent-primary/30"
                            : "border-t border-gray-800/80"
                        }
                        ${
                          featureIndex === comparisonData.features.length - 1 &&
                          platform.isHighlighted
                            ? "border-b-2 border-accent-primary/30"
                            : "border-b border-gray-800/80"
                        }
                        ${
                          platformIndex === 0 && platform.isHighlighted
                            ? "border-l-2 border-accent-primary/30"
                            : platformIndex === 0
                            ? "border-l border-gray-800/80"
                            : ""
                        }
                        ${
                          platformIndex === platforms.length - 1 &&
                          platform.isHighlighted
                            ? "border-r-2 border-accent-primary/30"
                            : platformIndex === platforms.length - 1
                            ? "border-r border-gray-800/80"
                            : "border-r border-gray-800/80"
                        }
                      `}
                      >
                        <div className="flex items-center gap-2">
                          <ImpactIcon
                            className={`h-4 w-4 shrink-0 ${
                              isPositive
                                ? platform.isHighlighted
                                  ? "text-accent-primary"
                                  : "text-green-400"
                                : isNegative
                                ? "text-red-400/60"
                                : "text-gray-500"
                            }`}
                          />
                          <span
                            className={`text-xs text-center ${
                              platform.isHighlighted
                                ? "text-white font-medium"
                                : isPositive
                                ? "text-gray-300"
                                : "text-gray-400"
                            }`}
                          >
                            {featureData.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Mobile cards */}
          <div className="mt-10 space-y-6 md:hidden">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <div
                  key={platform.id}
                  className={`
                  rounded-2xl p-5
                  ${
                    platform.isHighlighted
                      ? "bg-linear-to-br from-accent-primary/20 via-accent-primary/10 to-transparent ring-2 ring-accent-primary/30 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                      : "bg-gray-900/50 ring-1 ring-gray-800/60"
                  }
                `}
                >
                  {/* Platform header */}
                  <div className="flex items-start gap-4 pb-4 border-b border-gray-800/80">
                    <div
                      className={`h-11 w-11 shrink-0 grid place-items-center rounded-xl ${
                        platform.isHighlighted
                          ? "bg-accent-primary/20 ring-1 ring-accent-primary/30"
                          : "bg-gray-800 ring-1 ring-gray-700/60"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          platform.isHighlighted
                            ? "text-accent-primary"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div
                        className={`text-base font-semibold tracking-tight ${
                          platform.isHighlighted ? "text-white" : "text-white"
                        }`}
                      >
                        {platform.name}
                      </div>
                      <p className="mt-1 text-xs text-gray-400">
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-4 space-y-3">
                    {comparisonData.features.map((feature) => {
                      const featureData = feature[platform.id];
                      const FeatureIcon = feature.icon;
                      const isPositive = featureData.impact === "positive";
                      const isNegative = featureData.impact === "negative";
                      const ImpactIcon = isPositive ? CheckCircle : CircleX;

                      return (
                        <div
                          key={feature.name}
                          className={`
                          flex items-start gap-3 p-3 rounded-lg
                          ${
                            platform.isHighlighted
                              ? "bg-gray-800/60"
                              : "bg-gray-800/40"
                          }
                        `}
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <FeatureIcon className="h-4 w-4 text-gray-500 shrink-0" />
                            <span className="text-xs font-medium text-gray-300 shrink-0">
                              {feature.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <ImpactIcon
                              className={`h-3.5 w-3.5 ${
                                isPositive
                                  ? platform.isHighlighted
                                    ? "text-accent-primary"
                                    : "text-green-400"
                                  : isNegative
                                  ? "text-red-400/60"
                                  : "text-gray-500"
                              }`}
                            />
                            <span
                              className={`text-xs ${
                                platform.isHighlighted
                                  ? "text-white"
                                  : isPositive
                                  ? "text-gray-300"
                                  : "text-gray-400"
                              }`}
                            >
                              {featureData.text}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full flex justify-center border-none  mt-10">
            <Button size="lg">Get Started</Button>
          </div>
        </div>
        <AnimatedMarquee />
      </section>
    </>
  );
}
