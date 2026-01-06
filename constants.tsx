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
    imageUrl: '/images/events/grand.jpeg'
  },
  {
    id: '2',
    title: 'Christmas Celebrations',
    date: '25th December',
    time: 'TBA',
    location: 'Shalem Ministries',
    description: 'A day of praise, thanksgiving, and remembrance of the love and grace of Jesus Christ through worship and prayer.',
    imageUrl: '/images/events/25th.jpeg'
  },
  {
    id: '3',
    title: 'New Year Watch-Night Service',
    date: '31st December',
    time: 'TBA',
    location: 'Shalem Ministries',
    description: 'An evening of prayer, reflection, and worship as we thank God for the past year and seek His guidance for the year ahead.',
    imageUrl: '/images/events/31st_night.jpeg'
  },
  {
    id: '4',
    title: 'New Year Event',
    date: '1st January',
    time: 'TBA',
    location: 'Shalem Ministries',
    description: "A blessed start to the new year with prayer, worship, and a message of hope, dedicating the year into God's hands.",
    imageUrl: '/images/events/jan1st.jpeg'
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
    name: 'Venkatrao K',
    role: 'Church Member',
    content: 'When my daughter was very young, she suffered from a low heart rate. As parents, this left us weak, fearful, and deeply discouraged. We consulted many doctors and visited several hospitals, but nothing brought us peace—only heavy medications we could not afford. In our pain, we slowly lost hope, even in God. But in that hopeless season, God lifted us up by sending our pastors to pray for our daughter and our family. Through their prayers, hope returned to our hearts. We began to trust that God would heal her. From that moment on, we started witnessing God\'s hand—miracles, blessings, and a complete change in her health. Today, she is doing well, and our faith has been restored. All glory to God, and our heartfelt thanks to Shalem Ministries.',
  },
  {
    id: '2',
    name: 'N. Rambabu',
    role: 'Church Member',
    content: 'When we were living in darkness without hope or true peace, we sought help on our own and approached the pastors of Shalem Ministries. We first sent our children to their Sunday school, and through them we came to know more about the ministry. As we began attending, God worked miraculously in our lives. Our home was transformed into a place of blessing and peace. Today, our entire family is part of Shalem Ministries. The Word of God preached there has deeply touched us and taught us how to live a life rooted in Christ. We give all glory to God for this transformation.',
  },
  {
    id: '3',
    name: 'V. Debora',
    role: 'Church Member (elder women\'s ministry)',
    content: 'After losing my husband, I was left alone with my young daughter and had nowhere to turn. It was a very difficult season of life, filled with pain and uncertainty. In that time, God became my hope. He led me to the place where I truly belonged and where my daughter would also grow in faith and service. Our pastors reached out to our family, and God saw our situation. Through them, a God-anointed sister taught me how to pray and how to seek the Lord. From that moment, my life began to change. I learned to stand strong, to be independent, and to pass the same values of faith to my daughter. Today, we both serve at Shalem Ministries. I serve as an elder, caring for the Women\'s Ministry, and my daughter serves in the choir. We thank God for this beautiful transformation and give Him all the glory.',
  },
  {
    id: '4',
    name: 'K. Srinivas',
    role: 'Church Member',
    content: 'I never believed in witchcraft or dark powers. I thought such things were not real — until it happened to my youngest son. He was completely overtaken, and it felt like we were losing him to forces beyond our understanding. As a family, we were broken and hopeless. There were moments when we felt there was nothing left we could do. In that darkest time, God sent us hope through our pastors. They stood in faith and prayed boldly, commanding those evil spirits to leave forever. Through God\'s power, my son was delivered, and our family was restored. What we thought was impossible, God made possible. From that day onward, our faith was renewed. God saved my son, healed our family, and gave us a new purpose — to serve Him faithfully in His church. From then until now, God has been continually faithful to our family, and we are deeply thankful to be part of Shalem Ministries. All glory to God.',
  },
  {
    id: '5',
    name: 'N. Ramana',
    role: 'Church Member',
    content: 'After losing my husband, I lost all hope in myself. Life felt unbearable, and in my pain, I even thought of ending my life along with my two children. But in that darkest moment, my children became my last hope. Through a friend, I came to know about Shalem Ministries and their orphanage. Since I was living alone and struggling to care for my children, I entrusted them there. From that day onward, our pastors never left us alone. They stood by me, prayed for me, and supported us through every season. My children began to grow well, study well, and flourish. Through this entire journey, God transformed my life completely — from a place of despair and death to a life lived for Him and in His service. Today, by God\'s grace, my daughter is married and blessed with two beautiful children, and my son is doing well in business. What once felt impossible became a living testimony of God\'s faithfulness. I give all the glory to God and my heartfelt thanks to our pastors for walking with us through every step of this journey.',
  },
  {
    id: '6',
    name: 'Br. P. Joseph',
    role: 'Faith Ministries',
    content: 'Shalem Ministries feels like an extended family to us. Our entire pastors\' union is well acquainted with this ministry and the work they do. The Bible says that faith without action is dead, and Shalem Ministries truly lives this out. They don\'t just preach Christ with words — they reveal Him through action. Through their orphanage, pastoral support, medical camps for the elderly, tribal education initiatives, and support for children\'s education, they have become a living testimony of the Gospel. Shalem Ministries is not just a church; it is a community where people are loved, served, and blessed through genuine care. I am truly grateful to testify about this ministry and to be part of the Shalem Ministries Pastors\' Fellowship. Our entire pastors\' union has been encouraged and strengthened through this fellowship. I give all glory and honor to God and pray that He continues to bless and expand this ministry abundantly.',
  }
];