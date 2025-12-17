import { NavLink, Event, Ministry } from './types';
import { Calendar, Heart, Users, Home, Globe } from 'lucide-react';
import React from 'react';

export const ORGANIZATION_NAME = "SHALEM MINISTRIES";
export const ADDRESS = "View Location on Google Maps";
export const MAP_URL = "https://maps.app.goo.gl/CeWv8VNtKcxdtkZ87?g_st=com.google.maps.preview.copy";
export const PHONE = "+91 6302-211527, +91 7673-912901";
export const EMAIL = "shalemministriesinternational@gmail.com";

// Razorpay Configuration
// Get your keys from: https://dashboard.razorpay.com/app/keys
export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_RsbdqfFTgRhkQ2"; // Test key

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
    title: "Children's Ministry",
    date: 'Ongoing',
    time: 'Various Times',
    location: 'Shalem Ministries',
    description: 'Programs such as Vacation Bible School (VBS), also helping children learn and study their books in simple and engaging ways. We also distribute books and clothing to support their growth and well-being.',
    imageUrl: '/images/ChildrenMinistry.jpeg'
  },
  {
    id: '2',
    title: "Pastors' Ministry",
    date: 'Ongoing',
    time: 'Various Times',
    location: 'Shalem Ministries',
    description: 'Initiatives focused on encouraging and strengthening pastors through the Word of God, along with distributing clothing and essential support.',
    imageUrl: '/images/PastorMinistry.jpeg'
  },
  {
    id: '3',
    title: 'Church Ministry',
    date: 'Ongoing',
    time: 'Various Times',
    location: 'Shalem Ministries',
    description: 'Partnering with and supporting local churches through practical help, resources, and ministry assistance.',
    imageUrl: '/images/ChurchMinistry.jpeg'
  },
  {
    id: '4',
    title: 'Old Age Ministry',
    date: 'Ongoing',
    time: 'Various Times',
    location: 'Shalem Ministries',
    description: 'Serving elderly individuals by providing medicines and hospital support, with the help of young volunteers who assist and care for them with love and respect.',
    imageUrl: '/images/OrphanageHome.jpeg'
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: 'church-ministry',
    title: "Church Ministry",
    description: "A spiritual family dedicated to worship, biblical teaching, and discipleship.",
    longDescription: "Our Church Ministry is the heartbeat of Shalem Ministries. We are a community devoted to following Jesus, where every service is an opportunity to encounter God's presence. Through passionate worship, in-depth biblical teaching, and fellowship, we aim to equip believers to live out their faith authentically. Whether you are new to the faith or a long-time believer, there is a place for you here to grow and serve.",
    imageUrl: "/images/ChurchMinistry2.jpeg",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'orphanage-home',
    title: "Orphanage Home",
    description: "Providing a loving home, education, and hope to destitute children.",
    longDescription: "The Shalem Orphanage Home is a sanctuary for children who have lost their parents or are in desperate need of care. We believe every child deserves a safe environment, nutritious food, quality education, and the love of a family. Our mission is not just to provide shelter, but to raise these children with dignity and hope, empowering them to build a bright future through the love of Christ.",
    imageUrl: "/images/OrphanageHome.jpeg",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 'childrens-ministry',
    title: "Children's Ministry",
    description: "Nurturing the next generation in the way of the Lord through fun and faith.",
    longDescription: "Our Children's Ministry partners with parents to lead children to become fully devoted followers of Christ. We create safe, fun, and engaging environments where kids can learn biblical truths at their level. From Sunday school to special camps, we are committed to laying a strong spiritual foundation for the next generation.",
    imageUrl: "/images/ChildrenMinistry2.jpeg",
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 'outreach',
    title: "Global Outreach",
    description: "Taking the gospel and humanitarian aid beyond our four walls.",
    longDescription: "We are committed to the Great Commission. Our outreach programs extend locally and globally, providing aid to the needy, supporting missionaries, and sharing the message of salvation. We believe in being the hands and feet of Jesus to a hurting world.",
    imageUrl: "/images/GlobalOutReach.jpeg",
    icon: <Globe className="w-6 h-6" />
  }
];