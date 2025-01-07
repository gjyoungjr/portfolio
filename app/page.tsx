import Section from "@/components/section";
import { type SectionProps } from "@/components/section";

export default function Home() {
  return (
    <main className="mb-4">
      <p className="font-semibold">gilbert young jr.</p>
      <p className="text-gray-500 mt-1">engineer</p>

      <div className="mt-5 max-w-screen-sm">
        <p>
          i&apos;m a software engineer who&apos;s bullish about climate tech,
          building in public and the future of AI/ML.
        </p>
      </div>

      <div className="mt-10">
        <Section title={BLOGS.title} items={BLOGS.items} />
      </div>
      <div className="mt-10">
        <Section title={recentProjects.title} items={recentProjects.items} />
      </div>

      <div className="mt-10">
        <Section title={socialLinks.title} items={socialLinks.items} />
      </div>
    </main>
  );
}

const BLOGS = {
  title: "blog",
  items: [
    {
      title: `Why I'm pivoting to Climate Tech`,
      url: "/blog",
    },
  ],
};

const socialLinks: SectionProps = {
  title: "links",
  items: [
    {
      title: "twitter",
      url: "https://twitter.com/gjyoungjr",
    },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/gjyoungjr/",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/gjyoungjr/",
    },
    {
      title: "github",
      url: "https://github.com/gjyoungjr",
    },
    {
      title: "gilbertjyoungjr@gmail.com",
      url: "gilbertjyoungjr@gmail.com",
    },
  ],
};

const recentProjects: SectionProps = {
  title: "projects",
  items: [
    {
      title: "Email Agent — (Building...)",
      url: "#",
    },
    {
      title: "CSV Chat Agent — (Dec 2023)",
      url: "https://github.com/gjyoungjr/chat_csv",
    },
    {
      title: "GraphixAi — (Aug 2023)",
      url: "https://twitter.com/iamsoleyman/status/1664663253723619331",
    },
    {
      title: "Stockx Price Predictor — (Dec 2022)",
      url: "https://github.com/gjyoungjr/stockx_sneaker_prices",
    },
  ],
};
