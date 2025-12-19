import { NavLink, Event, Ministry, Testimonial } from './types';
import { Calendar, Heart, Users, Home, Globe, BookOpen } from 'lucide-react';
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
    title: 'Grand Christmas Event',
    date: '21st December',
    time: 'TBA',
    location: 'Shalem Ministries',
    description: 'A special celebration filled with worship, the Word of God, and joyful fellowship as we celebrate the birth of our Savior.',
    imageUrl: '/images/ChildrenMinistry.jpeg'
  },
  {
    id: '2',
    title: 'Christmas Celebrations',
    date: '25th December',
    time: 'TBA',
    location: 'Shalem Ministries',
    description: 'A day of praise, thanksgiving, and remembrance of the love and grace of Jesus Christ through worship and prayer.',
    imageUrl: '/images/ChurchMinistry.jpeg'
  },
  {
    id: '3',
    title: 'New Year Watch-Night Service',
    date: '31st December',
    time: 'TBA',
    location: 'Shalem Ministries',
    description: 'An evening of prayer, reflection, and worship as we thank God for the past year and seek His guidance for the year ahead.',
    imageUrl: '/images/PastorMinistry.jpeg'
  },
  {
    id: '4',
    title: 'New Year Event',
    date: '1st January',
    time: 'TBA',
    location: 'Shalem Ministries',
    description: "A blessed start to the new year with prayer, worship, and a message of hope, dedicating the year into God's hands.",
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
    id: 'pastors-ministry',
    title: "Pastor's Ministry",
    description: "Initiatives focused on encouraging and strengthening pastors through the Word of God, along with distributing clothing and essential support.",
    longDescription: "Our Pastor's Ministry is dedicated to supporting and empowering pastors who serve in various communities. We provide encouragement through the Word of God, practical resources, and essential support including clothing and other necessities. We believe in strengthening those who lead God's people, helping them to continue their vital work with renewed strength and resources.",
    imageUrl: "/images/PastorMinistry.jpeg",
    icon: <BookOpen className="w-6 h-6" />
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Church Member',
    content: 'Shalem Ministries has been a blessing to our family. The love and care shown to our children through the Children\'s Ministry is incredible. Our kids look forward to every service!',
  },
  {
    id: '2',
    name: 'Pastor Michael',
    role: 'Local Pastor',
    content: 'The Pastor\'s Ministry has been a source of encouragement and support. The resources and fellowship provided have strengthened my ministry and renewed my passion for serving God\'s people.',
  },
  {
    id: '3',
    name: 'Priya Kumar',
    role: 'Volunteer',
    content: 'Serving with Shalem Ministries has transformed my life. Being part of the Orphanage Home ministry has shown me the true meaning of love and service. This is more than a ministry—it\'s a family.',
  },
  {
    id: '4',
    name: 'David Chen',
    role: 'Community Member',
    content: 'The outreach programs have made a real difference in our community. The practical help and spiritual guidance provided have touched many lives, including mine. God is truly at work here.',
  },
  {
    id: '5',
    name: 'Rebecca Thomas',
    role: 'Church Member',
    content: 'I\'ve been attending Shalem Ministries for over two years, and the teaching, worship, and community have deepened my faith in ways I never imagined. This is a place where you can truly grow.',
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Beneficiary',
    content: 'The support I received during a difficult time in my life was incredible. The church didn\'t just pray for me—they walked alongside me, providing practical help and genuine care. I\'m forever grateful.',
  }
];