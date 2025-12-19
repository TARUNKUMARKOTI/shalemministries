import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface Ministry {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  imageUrl?: string;
}