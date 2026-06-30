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

import finio from "@/public/images/projects/finio.png";
import noteTakingWebApp from "@/public/images/projects/note-taking-web-app.png";
import frontPage from "@/public/images/projects/frontPage.png";
import ipass from "@/public/images/projects/ipass.png";

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
    year: 2026,
    title: "Finio",
    description:
      "A full-stack personal finance tracker built with Next.js, Prisma, and Neon Postgres — featuring auth, transactions, P2P transfers, budgets, and goals. Logic implemented by me, UI crafted with Claude Code.",
    image: finio,
    liveUrl: "https://my-personal-finance-ten.vercel.app",
    codeUrl: "https://github.com/maziarja/my-personal-finance",
  },
  {
    id: 2,
    year: 2026,
    title: "I pass",
    description:
      "iPass — A full-stack password manager built with Next.js and Node.js/Express, featuring AES-256-GCM client-side encryption, JWT auth, and a Neon PostgreSQL database.",
    image: ipass,
    liveUrl: "https://ipass-gray.vercel.app",
    codeUrl: "https://github.com/maziarja/Ipass",
  },
  {
    id: 3,
    year: 2026,
    title: "Note Taking Web App",
    description:
      "Full-stack note-taking app built with Next.js, MongoDB, and NextAuth — featuring CRUD operations, archiving, tag-based filtering, full-text search, Google OAuth, and customizable font/color themes, responsive UI.",
    image: noteTakingWebApp,
    liveUrl: "https://note-taking-web-app-v2-amber.vercel.app",
    codeUrl: "https://github.com/maziarja/note-taking-web-app-v2",
  },
  {
    id: 4,
    year: 2026,
    title: "Front Page",
    description:
      "Frontpage — A full-stack RSS reader with AI-powered article summarization, built with Next.js 16, Prisma, and Better Auth. Developed with Claude Code, featuring multi-format feed parsing, read/unread tracking, category organization, and Groq-backed summarization.",
    image: frontPage,
    liveUrl: "https://frontpage-kohl.vercel.app",
    codeUrl: "https://github.com/maziarja/frontpage",
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
