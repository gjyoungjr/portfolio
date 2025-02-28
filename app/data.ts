type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Kai",
    description: "Currently cooking... ⏳",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: "project1",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Hyatt Hotels Corporation",
    title: "Senior Software Engineer, Data",
    start: "July 2023",
    end: "Dec 2024",
    link: "https://www.hyatt.com/",
    id: "work1",
  },
  {
    company: "Post News",
    title: "Senior Software Engineer, AI",
    start: "Dec 2022",
    end: "Jun 2023",
    link: "https://techcrunch.com/2022/11/28/post-news-twitter-alternative-a16z/",
    id: "work2",
  },
  {
    company: "Serverless Guru",
    title: "Senior Backend Engineer - Contractor",
    start: "Jan 2022",
    end: "Feb 2023",
    link: "https://www.serverlessguru.com/",
    id: "work3",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Contract Engineers: The Underdogs of Tech",
    description: "March 3rd, 2025",
    link: "/blog/contract-engineers",
    uid: "blog-1",
  },
  {
    title: "Reducing LLM Hallucinations with Knowledge Graphs",
    description: "Febaury 3rd, 2025",
    link: "/blog/knowledge-graphs",
    uid: "blog-2",
  },
  {
    title: "MindsDB - FinTech Hackathon",
    description: "January 29th, 2024",
    link: "/blog/mindsdb-fintech-hackathon",
    uid: "blog-4",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/gjyoungjr",
  },
  {
    label: "Twitter",
    link: "https://x.com/gjyoungjr",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/gjyoungjr/",
  },
];

export const EMAIL = "gilbertjyoungjr@gmail.com";
