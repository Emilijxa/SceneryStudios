'use client';

import React from 'react';

interface TemplateSidebarProps {
  onTemplateSelect: (template: string) => void;
}

const templates = [
  {
    id: 'stripe-integration',
    title: 'Stripe Integration',
    description: 'Implement Stripe payment processing',
    content: `Please provide a step-by-step guide for implementing Stripe payment processing in a Next.js application, including:
1. Setting up Stripe account and API keys
2. Installing necessary dependencies
3. Creating a payment form component
4. Implementing the payment intent API
5. Handling webhooks
6. Testing the integration`
  },
  {
    id: 'prisma-user-model',
    title: 'Prisma User Model',
    description: 'User and Subscription schema',
    content: `Please help me create a Prisma schema for a SaaS application with the following requirements:
1. User model with authentication fields
2. Subscription model with different tiers
3. Relationship between User and Subscription
4. Include necessary indexes and constraints
5. Add example queries for common operations`
  },
  {
    id: 'prisma-subscription-model',
    title: 'Prisma Subscription Model',
    description: 'Subscription management schema',
    content: `Please help me create a Prisma schema for subscription management with:
1. Different subscription tiers (Free, Pro, Enterprise)
2. Billing cycle handling
3. Subscription status tracking
4. Payment history
5. Usage limits and quotas`
  },
  {
    id: 'env-templates',
    title: 'Environment Variables',
    description: 'Configuration templates',
    content: `Please provide a comprehensive .env template for a Next.js SaaS application that includes:
1. Supabase configuration
2. Stripe API keys and webhook secret
3. Clerk authentication keys
4. Database connection strings
5. Other necessary environment variables
Include comments explaining each variable's purpose.`
  }
];

export default function TemplateSidebar({ onTemplateSelect }: TemplateSidebarProps) {
  return (
    <div className="w-64 h-full bg-muted/30 backdrop-blur-sm border-r border-primary/20 p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4 text-primary">Templates</h2>
      <div className="space-y-2">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateSelect(template.content)}
            className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors duration-200 border border-primary/20"
          >
            <h3 className="font-medium text-foreground">{template.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
} 