import { NavLink, Event, Ministry } from './types';
import { Calendar, Heart, Users, Home, Globe } from 'lucide-react';
import React from 'react';

export const ORGANIZATION_NAME = "SHALEM MINISTRIES";
export const ADDRESS = "View Location on Google Maps";
export const MAP_URL = "https://maps.app.goo.gl/CeWv8VNtKcxdtkZ87?g_st=com.google.maps.preview.copy";
export const PHONE = "+91 6302-211527, +91 7673-912901";
export const EMAIL = "shalemministriesinternational@gmail.com";

// Razorpay Configuration
// TODO: Replace with your actual Razorpay Key ID from Razorpay Dashboard
// Get your keys from: https://dashboard.razorpay.com/app/keys
export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag"; // Test key - replace with your key

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/shalemministriesinternational?igsh=MTNkeWI2YnUyMGNoMg==",
  facebook: "https://www.facebook.com/profile.php?id=61584609377018&mibextid=wwXIfr&mibextid=wwXIfr",
  youtube: "https://www.youtube.com/@shalemministriesinternational"
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'Events', path: '/events' },
  { label: 'Giving', path: '/giving' },
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Sunday Service',
    date: 'Sundays',
    time: '9:30 AM',
    location: 'Shalem Ministries',
    description: 'Join us for a powerful time of worship and teaching.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&random=1'
  },
  {
    id: '2',
    title: 'Midweek Service',
    date: 'Wednesdays',
    time: '10:00 AM',
    location: 'Shalem Ministries',
    description: 'A time to come together, seek God’s face, and pray.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&random=2'
  },
  {
    id: '3',
    title: 'Friday Fellowship',
    date: 'Fridays',
    time: '10:00 AM',
    location: 'Shalem Ministries',
    description: 'Weekly gathering for fellowship and word.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&random=3'
  },
  {
    id: '4',
    title: 'Saturday Evening',
    date: 'Saturdays',
    time: '7:00 PM',
    location: 'Shalem Ministries',
    description: 'Evening worship service.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&random=4'
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: 'church-ministry',
    title: "Church Ministry",
    description: "A spiritual family dedicated to worship, biblical teaching, and discipleship.",
    longDescription: "Our Church Ministry is the heartbeat of Shalem Ministries. We are a community devoted to following Jesus, where every service is an opportunity to encounter God's presence. Through passionate worship, in-depth biblical teaching, and fellowship, we aim to equip believers to live out their faith authentically. Whether you are new to the faith or a long-time believer, there is a place for you here to grow and serve.",
    imageUrl: "https://picsum.photos/800/600?grayscale&random=20",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'orphanage-home',
    title: "Orphanage Home",
    description: "Providing a loving home, education, and hope to destitute children.",
    longDescription: "The Shalem Orphanage Home is a sanctuary for children who have lost their parents or are in desperate need of care. We believe every child deserves a safe environment, nutritious food, quality education, and the love of a family. Our mission is not just to provide shelter, but to raise these children with dignity and hope, empowering them to build a bright future through the love of Christ.",
    imageUrl: "https://picsum.photos/800/600?grayscale&random=21",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 'childrens-ministry',
    title: "Children's Ministry",
    description: "Nurturing the next generation in the way of the Lord through fun and faith.",
    longDescription: "Our Children's Ministry partners with parents to lead children to become fully devoted followers of Christ. We create safe, fun, and engaging environments where kids can learn biblical truths at their level. From Sunday school to special camps, we are committed to laying a strong spiritual foundation for the next generation.",
    imageUrl: "https://picsum.photos/800/600?grayscale&random=22",
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 'outreach',
    title: "Global Outreach",
    description: "Taking the gospel and humanitarian aid beyond our four walls.",
    longDescription: "We are committed to the Great Commission. Our outreach programs extend locally and globally, providing aid to the needy, supporting missionaries, and sharing the message of salvation. We believe in being the hands and feet of Jesus to a hurting world.",
    imageUrl: "https://picsum.photos/800/600?grayscale&random=23",
    icon: <Globe className="w-6 h-6" />
  }
];