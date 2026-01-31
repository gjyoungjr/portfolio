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
    name: "Obsidian Agent",
    description:
      "An AI agent for your Obsidian vault that delivers weekly reviews, personalized insights, and recommendations based on your daily notes and actions.",
    link: "https://github.com/gjyoungjr/obsidian_agent",
    video: "https://www.loom.com/share/4f23e59a529f4e5a8535dd508238b3d4",
    id: "project1",
  },
  {
    name: "YC Job Search",
    description: "A semantic search engine over YCombinator job listing.",
    link: "#",
    video: "#",
    id: "project2",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "StudyTech AI",
    title: "AI Engineer - Founding Team",
    start: "Aug 2025",
    end: "Dec 2025",
    link: "https://www.studytech.ai/",
    id: "work1",
  },
  {
    company: "Nextrial",
    title: "AI Engineer - Contractor",
    start: "Jan 2025",
    end: "Jul 2025",
    link: "https://www.nextrial.ai/en",
    id: "work2",
  },

  {
    company: "Hyatt Hotels Corporation",
    title: "Senior Software Engineer, Data",
    start: "July 2023",
    end: "Dec 2024",
    link: "https://www.hyatt.com/",
    id: "work4",
  },
  {
    company: "Post News",
    title: "Senior Software Engineer, AI",
    start: "Dec 2022",
    end: "Jun 2023",
    link: "https://techcrunch.com/2022/11/28/post-news-twitter-alternative-a16z/",
    id: "work5",
  },
  {
    company: "Serverless Guru",
    title: "Senior Backend Engineer (AWS) - Contractor",
    start: "Dec 2022",
    end: "Dec 2024",
    link: "https://www.serverlessguru.com/",
    id: "work3",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "I Have the Urge to Build. No Idea What Though",
    description: "January 30th, 2026",
    link: "/blog/startup-ideas",
    uid: "blog-1",
  },
  {
    title: "Contract Engineers: The Underdogs of Tech",
    description: "December 30th, 2025",
    link: "/blog/contract-engineers",
    uid: "blog-2",
  },
  {
    title: "MindsDB - FinTech Hackathon",
    description: "January 29th, 2024",
    link: "/blog/mindsdb-fintech-hackathon",
    uid: "blog-3",
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
