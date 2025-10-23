import { FaReact } from "react-icons/fa";
import { FiCode, FiGitBranch, FiLayers, FiServer } from "react-icons/fi";

import {
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiFrontendmentor,
} from "react-icons/si";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import personalFinanceAppImage from "@/public/images/personal-finance-app.jpg";
import kanbanTaskManagementImage from "@/public/images/kanban-task-management.jpg";
import moodTrackingImage from "@/public/images/mood-tracking.jpg";
import productFeedbackApp from "@/public/images/product-feedback-app.png";

// ************* APP COLORS *****************
export const APP_COLORS = ["#1E1E1E", "#3A3A3A", "#0F52BA", "#0077B6"];

// ************* STACK SECTION *****************
export const STACK_ITEMS = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Framer",
    icon: SiFramer,
    color: "#0055FF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
];

// ************* ABOUT SECTION *****************
export const SKILLS = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and visually engaging user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: FiServer,
    title: "Full-Stack Projects",
    description:
      "Developing complete web applications with Next.js and Mongoose, handling both frontend and backend with clean and scalable architecture.",
  },
  {
    icon: FiLayers,
    title: "UI/UX Implementation",
    description:
      "Translating modern design concepts into functional, accessible, and pixel-perfect interfaces that deliver great user experiences.",
  },
  {
    icon: FiGitBranch,
    title: "Version Control",
    description:
      "Using Git and GitHub to manage projects, track changes, and collaborate efficiently on codebases.",
  },
];

// ************* PORTFOLIO SECTION *****************
export const PROJECTS = [
  {
    id: 1,
    year: 2025,
    title: "Personal Finance Dashboard",
    description:
      "Developed a comprehensive personal finance dashboard that enables users to track expenses, set budgets, and manage recurring bills. Implemented dynamic data visualization using charts and graphs, providing users with clear insights into their financial health.",
    image: personalFinanceAppImage,
    liveUrl: "https://personal-finance-app-virid.vercel.app",
    codeUrl: "https://github.com/maziarja/personal-finance-app",
  },
  {
    id: 2,
    year: 2025,
    title: "Product Feedback App",
    description:
      "Built a full-featured product feedback application inspired by a Frontend Mentor challenge. Users can create, edit, and upvote feedback posts, add comments, and manage feedback status across different roadmap stages. Implemented with Next.js, TypeScript, MongoDB, and Tailwind CSS, the app features dynamic routing, authentication, and responsive design for an intuitive user experience.",
    image: productFeedbackApp,
    liveUrl: "https://feedback-product-dusky.vercel.app",
    codeUrl: "https://github.com/maziarja/feedback-product",
  },
  {
    id: 3,
    year: 2025,
    title: "Interactive Kanban Board",
    description:
      "Created a responsive Kanban board application that allows users to organize tasks into columns, facilitating efficient project management.",
    image: kanbanTaskManagementImage,
    liveUrl: "https://kanban-task-management-sigma-umber.vercel.app",
    codeUrl: "https://github.com/maziarja/kanban-task-management",
  },
  {
    id: 4,
    year: 2025,
    title: "Mood Tracker",
    description:
      "Built a mood tracking application enabling users to log daily emotions and activities. Incorporated data visualization tools to help users identify mood patterns over time, promoting self-awareness and well-being.",
    image: moodTrackingImage,
    liveUrl: "https://mood-tracking-eight.vercel.app",
    codeUrl: "https://github.com/maziarja/mood-tracking",
  },
];

// ************* FOOTER *****************
export const SOCIAL_MEDIA = [
  {
    icon: AiFillGithub,
    href: "https://github.com/maziarja",
  },
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/maziar-jamalialem-677030345",
  },
  {
    icon: SiFrontendmentor,
    href: "https://www.frontendmentor.io/profile/maziarja",
  },
];
