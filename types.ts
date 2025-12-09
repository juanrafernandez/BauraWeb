import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ScentFamily {
  key: string;
  name: string;
  familyDescription: string;
  keyNotes: string[];
  associatedIngredients: string[];
  averageIntensity: string;
  recommendedSeason: string[];
  associatedPersonality: string[];
  occasion: string[];
  familyColor: string;
}

export interface PyramindLayer {
  level: 'Top' | 'Heart' | 'Base';
  title: string;
  description: string;
  duration: string;
  notes: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}