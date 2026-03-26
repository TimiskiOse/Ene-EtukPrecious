import mrAkpos from "./assets/mrApkos.jpeg";
import drLavy from "./assets/drLavy.jpeg";
import work1 from "./assets/work1.jpeg";
import work2 from "./assets/work2.jpeg";
import work3 from "./assets/work3.jpeg";
import work4 from "./assets/work4.jpeg";

export const personalInfo = {
  name: "Precious Ene-Etuk",
  title: "Digital Creative & Social Media Manager",
  role: "Social Media Manager",
  email: "preciouseneetuk@gmail.com",
  phone: "+234 802 965 8311",
  summary:
    "I am Precious Ene-Etuk, a Global Digital Creative dedicated to transforming brand identities through data-driven storytelling and high-impact visual design. With a background spanning UI/UX design and professional photography, I bridge the gap between aesthetic excellence and functional growth. I help lifestyle, tech, and leadership brands scale their digital presence through automated workflows and creative content strategies that turn followers into community members.",
  profileImage: "profileimage.jpg", // Placeholder for your profile image path
};

export const services = [
  {
    id: 1,
    title: "Social Media Strategy",
    description:
      "Crafting comprehensive content calendars and platform-specific growth plans.",
  },
  {
    id: 2,
    title: "Community & Brand Management",
    description:
      "Handling end-to-end engagement and maintaining brand voice across LinkedIn, Instagram, Facebook, YouTube and TikTok.",
  },
  {
    id: 3,
    title: "Creative Content Production",
    description:
      "High-end video editing (Reels/TikTok), professional photography, and graphic design (Canva/Adobe).",
  },
];

export const caseStudies = [
  {
    id: 1,
    client: "The Leadership Psychologist",
    role: "Social Media Manager",
    timeline: "2025 - Present",
    strategy:
      "Developed and executed social media strategies tailored to the psychological needs of the target audience.", // [cite: 34, 35]
    results: [
      "Enhanced brand awareness within the psychology community",
      "Increased engagement with educational content",
    ], 
  },
  {
    id: 2,
    client: "Da Waffi Genius Entertainment",
    role: "Social Media Assistant & Video Editor",
    timeline: "2024 - Present", //
    strategy:
      "Developed and executed compelling digital strategies and generated marketing creatives using AI tools to scale output.", // [cite: 14, 16]
    results: [
      "Boosted audience engagement across multiple platforms",
      "Streamlined workflow saving 12 hours/week",
      "edited 30+ high-quality videos, increasing content output by 30%",
    ], // Note: Fill in exact numbers if you have them!
  },
  {
    id: 3,
    client: "Adventure Holiday Concepts",
    role: "Social Media Manager",
    timeline: "2019 - 2023",
    strategy:
      "Managed multi-channel campaigns, established social media calendars, and utilized auto-scheduling for consistent brand presence.", // [cite: 31, 32]
    results: [
      "Increased reach by 70%",
      "Improved conversion rates through targeted content",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Precious!!! Thank you for being a part of The DREAM TEAM. You make my life easy, you have a sweet spirit and joy to work with.  We will do great things together.",
    author: "Dr. Lavonya Shinelle", 
    role: "Organizational Leadership Psychologist", 
    image: drLavy
  },
  {
    id: 2,
    quote: "Truly, you make my creative journey so easy. I have slept well the last 3 days, trusting that 'Precious will deliver'😇Well done!",
    author: "Akpos Otubuere", 
    role: "Chief Vision Officer, Da Waffi Genius Entertainment", 
    image: mrAkpos 
  }
];

export const portfolio = [
  {
    id: 1,
    image: work1,
    link: "https://www.instagram.com/p/DRFbFCOAqZA/?igsh=bG91NXkwazF0bTJz",
    title: "Instagram Campaign"
  },
  {
    id: 2,
    image: work2,
    link: "https://www.instagram.com/reel/DQzHLOOAkY5/?igsh=bzAwMW15Mjd5d2Ro",
    title: "Instagram Reel"
  },
  {
    id: 3,
    image: work3,
    link: "https://www.instagram.com/reel/DLzOSAuoywT/?igsh=czFkcWxvdzU4bnJh",
    title: "Instagram Reel"
  },
  {
    id: 4,
    image: work4,
    link: "https://www.instagram.com/reel/DJ6qiOPsY56/?igsh=dDVmazRzNjZ0NzQ=",
    title: "Instagram Reel"
  }
]