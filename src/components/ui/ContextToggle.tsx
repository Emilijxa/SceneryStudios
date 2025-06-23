'use client';

import React from 'react';

interface ContextToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function ContextToggle({ isActive, onToggle }: ContextToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted/50 hover:bg-primary/10 text-foreground'
      }`}
    >
      <span className="relative flex h-3 w-3">
        {isActive && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${isActive ? 'bg-primary-foreground' : 'bg-muted-foreground'}`}></span>
      </span>
      <span className="font-medium">
        {isActive ? 'UI Enhancement Mode Active' : 'Enable UI Enhancement'}
      </span>
    </button>
  );
} 