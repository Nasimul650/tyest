"use client";
import React from "react";
import { 
  Zap, 
  Target, 
  Award, 
  TrendingUp, 
  DollarSign,
  CircleX,
  CircleCheckBig
} from "lucide-react";

interface ComparisonRow {
  feature: string;
  icon: React.ReactNode;
  algorize: {
    text: string;
    positive: boolean;
  };
  typicalAgencies: {
    text: string;
    positive: boolean;
  };
  fullTimeDesigner: {
    text: string;
    positive: boolean;
  };
  freelancers: {
    text: string;
    positive: boolean;
  };
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Speed",
    icon: <Zap size={20} color="#cf0" className="w-5 h-5 " />,
    algorize: { text: "Quick turnaround", positive: true },
    typicalAgencies: { text: "Slow, multi-step", positive: false },
    fullTimeDesigner: { text: "Uncertain", positive: true },
    freelancers: { text: "Unpredictable timing", positive: false },
  },
  {
    feature: "Flexibility",
    icon: <Target color="#cf0" className="w-5 h-5" />,
    algorize: { text: "Adapts to any need", positive: true },
    typicalAgencies: { text: "Fixed packages", positive: false },
    fullTimeDesigner: { text: "Narrow scope", positive: false },
    freelancers: { text: "Flexible but uneven", positive: true },
  },
  {
    feature: "Quality",
    icon: <Award color="#cf0" className="w-5 h-5" />,
    algorize: { text: "Consistently high", positive: true },
    typicalAgencies: { text: "Good but process-heavy", positive: true },
    fullTimeDesigner: { text: "Good, skill dependent", positive: true },
    freelancers: { text: "Uncertain", positive: false },
  },
  {
    feature: "Scalability",
    icon: <TrendingUp color="#cf0" className="w-5 h-5" />,
    algorize: { text: "Scale up anytime", positive: true },
    typicalAgencies: { text: "Hard to expand fast", positive: false },
    fullTimeDesigner: { text: "Limited capacity", positive: false },
    freelancers: { text: "Hard to scale", positive: false },
  },
  {
    feature: "Cost Effectiveness",
    icon: <DollarSign color="#cf0" className="w-5 h-5" />,
    algorize: { text: "High value for spend", positive: true },
    typicalAgencies: { text: "High cost, lower value", positive: false },
    fullTimeDesigner: { text: "Fixed salary & overhead", positive: false },
    freelancers: { text: "Budget friendly but risky", positive: true },
  },
];

export default function WhyChoose(): React.JSX.Element {
  return (
    <section className="min-h-screen bg-black text-white py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium bg-white/10 border border-white/20 rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Why Choose
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Get a premium website or custom business solution
            <br className="hidden sm:block" />
            that meets your goals and drives measurable growth.
          </p>
        </div>

        {/* Mobile View - Cards */}
        <div className="block lg:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#e5e5e5] rounded-lg text-blue-400">
                  {row.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{row.feature}</h3>
              </div>
              
              <div className="space-y-3">
                {/* Algorize */}
                <div className="bg-gradient-to-r from-lime-500/20 to-transparent border-l-4 border-lime-500 p-3 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">
                      Algorize
                    </span>
                    <CircleCheckBig color="#cf0" className="w-4 h-4" />
                  </div>
                  <p className="text-sm mt-1">{row.algorize.text}</p>
                </div>

                {/* Typical Agencies */}
                <div className="p-3 bg-white/5 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Typical Agencies
                    </span>
                    {row.typicalAgencies.positive ? (
                      <CircleCheckBig color="#cf0" className="w-4 h-4" />
                    ) : (
                      <CircleX className="w-3 h-3 text-red-400" />
                    )}
                  </div>
                  <p className="text-sm mt-1 text-gray-300">{row.typicalAgencies.text}</p>
                </div>

                {/* Full-time Designer */}
                <div className="p-3 bg-white/5 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Full-time Designer
                    </span>
                    {row.fullTimeDesigner.positive ? (
                      <CircleCheckBig color="#cf0" className="w-4 h-4" />
                    ) : (
                      <CircleX className="w-3 h-3 text-red-400" />
                    )}
                  </div>
                  <p className="text-sm mt-1 text-gray-300">{row.fullTimeDesigner.text}</p>
                </div>

                {/* Freelancers */}
                <div className="p-3 bg-white/5 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Freelancers
                    </span>
                    {row.freelancers.positive ? (
                      <CircleCheckBig color="#cf0"  className="w-4 h-4" />
                    ) : (
                      <CircleX className="w-3 h-3 text-red-400" />
                    )}
                  </div>
                  <p className="text-sm mt-1 text-gray-300">{row.freelancers.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 mb-2">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Feature
              </div>
              <div className="text-center">
                <span className="text-sm font-bold text-lime-400 uppercase tracking-wider">
                  Algorize
                </span>
              </div>
              <div className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider">
                Typical Agencies
              </div>
              <div className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider">
                Full-time Designer
              </div>
              <div className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider">
                Freelancers
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-0">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-5 gap-4 border-b border-white/10 ${
                    index === 0 ? 'border-t' : ''
                  }`}
                >
                  {/* Feature Column */}
                  <div className="flex items-center gap-3 py-4 px-4 bg-gradient-to-r from-blue-900/20 to-transparent">
                    <div className="p-2.5 bg-blue-500/20 rounded-lg text-blue-400">
                      {row.icon}
                    </div>
                    <span className="font-semibold text-base">{row.feature}</span>
                  </div>

                  {/* Algorize Column */}
                  <div className="flex flex-col items-center justify-center py-4 px-4 bg-gradient-to-r from-lime-500/10 to-transparent border-l-2 border-lime-500/50">
                    <CircleCheckBig color="#cf0" className="w-5 h-5 mb-2" />
                    <span className="text-sm text-center font-medium">
                      {row.algorize.text}
                    </span>
                  </div>

                  {/* Typical Agencies Column */}
                  <div className="flex flex-col items-center justify-center py-4 px-4 bg-white/5">
                    {row.typicalAgencies.positive ? (
                      <CircleCheckBig color="#cf0" className="w-5 h-5 mb-2" />
                    ) : (
                      <CircleX className="w-3 h-3 text-red-400 mb-2" />
                    )}
                    <span className="text-sm text-center text-gray-300">
                      {row.typicalAgencies.text}
                    </span>
                  </div>

                  {/* Full-time Designer Column */}
                  <div className="flex flex-col items-center justify-center py-4 px-4 bg-white/5">
                    {row.fullTimeDesigner.positive ? (
                      <CircleCheckBig color="#cf0" className="w-5 h-5 mb-2" />
                    ) : (
                      <CircleX className="w-3 h-3 text-red-400 mb-2" />
                    )}
                    <span className="text-sm text-center text-gray-300">
                      {row.fullTimeDesigner.text}
                    </span>
                  </div>

                  {/* Freelancers Column */}
                  <div className="flex flex-col items-center justify-center py-4 px-4 bg-white/5">
                    {row.freelancers.positive ? (
                      <CircleCheckBig color="#cf0" className="w-5 h-5 mb-2" />
                    ) : (
                      <CircleX className="w-3 h-3 text-red-400 mb-2" />
                    )}
                    <span className="text-sm text-center text-gray-300">
                      {row.freelancers.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
