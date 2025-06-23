'use client';

import React from 'react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  gradient: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  buttonText,
  buttonLink,
  gradient
}) => (
  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
    {/* Glow Effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
    
    <div className="relative z-10 flex flex-col h-full">
      <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mb-6">
        {features.map((feature, i) => (
          <p key={i} className="text-gray-300 flex items-center mb-2">
            <svg className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </p>
        ))}
      </div>
      
      <div className="text-4xl font-bold text-white mb-6 mt-auto">
        {price}
      </div>
      
      <Link 
        href={buttonLink} 
        className={`w-full text-center px-8 py-4 bg-gradient-to-r ${gradient.replace('from-', 'from-').replace('to-', 'to-')} rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25`}
      >
        {buttonText}
      </Link>
    </div>
  </div>
);

const PricingSection: React.FC = () => {
  const [planType, setPlanType] = React.useState('individual');

  const individualPlans: PricingCardProps[] = [
    {
      title: "Free",
      description: "Ideal for getting started with AI-powered development",
      price: "$0",
      features: [
        "Chat on web",
        "Generate code & visualize data",
        "Write, edit, and create content",
        "Analyze text and images",
        "Ability to search the web",
      ],
      buttonText: "Get Started",
      buttonLink: "/sign-up",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Pro",
      description: "For everyday productivity and advanced features",
      price: "$17",
      features: [
        "Everything in Free, plus:",
        "More usage*",
        "Access Claude Code directly in your terminal",
        "Access to unlimited Projects",
        "Access to Research",
        "Connect Google Workspace",
        "Connect any content or tool through Integrations",
        "Extended thinking for complex work",
        "Ability to use more Claude models",
      ],
      buttonText: "Choose Pro",
      buttonLink: "/sign-up",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Max",
      description: "For high-demand users and enterprise-level tasks",
      price: "From $100",
      features: [
        "Everything in Pro, plus:",
        "Choose 5x or 20x more usage than Pro*",
        "Higher output limits for all tasks",
        "Early access to advanced features",
        "Priority access at high traffic times",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact-sales",
      gradient: "from-green-500 to-emerald-600"
    },
  ];

  const teamEnterprisePlans: PricingCardProps[] = [
    {
      title: "Team",
      description: "Collaborative AI development for small teams",
      price: "Custom",
      features: [
        "All Pro features",
        "Shared workspaces",
        "Team management",
        "Priority support",
      ],
      buttonText: "Inquire for Team",
      buttonLink: "/contact-sales",
      gradient: "from-orange-500 to-yellow-600"
    },
    {
      title: "Enterprise",
      description: "Tailored solutions for large organizations",
      price: "Custom",
      features: [
        "All Max features",
        "Dedicated infrastructure",
        "Advanced security & compliance",
        "On-premise deployment options",
        "24/7 Enterprise support",
      ],
      buttonText: "Inquire for Enterprise",
      buttonLink: "/contact-sales",
      gradient: "from-red-500 to-rose-600"
    },
  ];

  const currentPlans = planType === 'individual' ? individualPlans : teamEnterprisePlans;

  return (
    <section className="relative z-10 py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-12">
          Explore plans
        </h2>

        {/* Plan Type Toggle */}
        <div className="inline-flex p-1 bg-gray-800/50 rounded-full mb-12 border border-gray-700/50">
          <button 
            className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${planType === 'individual' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setPlanType('individual')}
          >
            Individual
          </button>
          <button 
            className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${planType === 'team' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setPlanType('team')}
          >
            Team & Enterprise
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-12">
          Prices shown do not include applicable tax. <a href="#" className="text-cyan-400 hover:text-cyan-300">*Usage limits apply.</a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection; 