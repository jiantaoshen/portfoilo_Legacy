export type Project = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
  website?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    image: "/projectImages/portfolio.webp",
    description: "Personal portfolio built with React.",
    tags: ["Frontend", "React (Vite, React Router)", "TypeScript", "Tailwind CSS","CSS Modules","Vercel"],
    github: "https://github.com/jiantaoshen/portfoilo",
    website: "https://portfoilo-brown-psi.vercel.app"
  },
  {
    id: 2,
    slug: "SmartAssetTrackingSystem",
    title: "Smart Asset Tracking System",
    image: "/projectImages/smart-asset-tracking-system.webp",
    description: "Small console application to track company assets (computers and phones). ",
    tags: ["Backend", "C#", ".NET", "Entity Framework Core", "SQL Local Server"],
    github: "https://github.com/jiantaoshen/SmartAssetTrackingSystem",
    website: ""
  },
  {
    id: 3,
    slug: "CineScope",
    title: "CineScope",
    image: "/projectImages/cinescope.webp",
    description: "Movie catalog web application built with ASP.NET Core MVC featuring authentication, role-based authorization, movie management, search, filtering, and responsive design.",
    tags  : [
    "Full Stack",
    "ASP.NET Core MVC",
    "C#",
    ".NET",
    "Entity Framework Core",
    "SQL Server",
    "Bootstrap",
    "Role-based access control"
    ],
    github: "https://github.com/jiantaoshen/CineScope",
    website: ""
  },
  {
    id: 4,
    slug: "LightManager",
    title: "LightManger",
    image: "/projectImages/LightManager.png",
    description: "A project manager platform for users to manage projects effectively without unnecessary features or a steep learning curve.",
    tags: [
      "Full Stack",
      "React (Vite, React Router)",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core Web API",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "ASP.NET Identity",
      "JWT Authentication",
      "Role-based Access Control"
    ],
    github: "https://github.com/jiantaoshen/LightManager",
    website: "https://thankful-beach-0211add0f.7.azurestaticapps.net"
  },
];