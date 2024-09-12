import React from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import moment from "moment";

export default function Blog() {
  return (
    <div className="px-4 md:px-16 lg:px-40 xl:px-60 py-10 md:py-20">
      {/* Back Button */}
      <div className="fixed top-4 left-4 md:top-10 md:left-10">
        <Link href="/">
          <ArrowLeftIcon className="w-8 h-8 md:w-10 md:h-10" />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
        Why I&apos;m Pivoting to Climate Tech
      </h1>

      {/* Date */}
      <p className="text-muted-foreground text-xs md:text-sm mt-3 md:mt-5 text-left">
        {moment("2024-04-15").format("MMMM DD, YYYY")}
      </p>

      {/* Content */}
      <div className="mt-5">
        <p className="text-sm md:text-base">
          For the past 3 to 5 years, I&apos;ve worked in different industries as
          a software engineer, including media, hospitality, and consumer goods.
          However, I&apos;ve never felt like I&apos;m using my technical skills
          to truly make a difference or improve the world. My curiosity has led
          me to discover a new passion: finding sustainable solutions to address
          climate change and reduce environmental impact.
        </p>
      </div>

      {/* Reasons for Lack of Innovation */}
      <div>
        <p className="mt-5 mb-4 text-sm md:text-base">
          I believe innovation in this industry is lacking for a few key
          reasons:
        </p>
        <ul className="list-inside">
          {[
            "Government policies and mandates often dictate innovation, which can stifle progress.",
            "Many believe it is impossible to achieve negative or net-zero emissions before 2050, so they do not bother trying to solve the problem.",
          ].map((text, index) => (
            <li key={index} className="pl-4 mb-2 relative text-sm md:text-base">
              <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
              {text}
            </li>
          ))}
        </ul>
        <p className="mt-4 mb-4 text-sm md:text-base">
          Many people do not realize how serious climate change is, even if we
          only achieve a 20% solution or if only a few countries cut emissions.
          To fully solve climate change, we need both government regulations and
          new technology to work together. Here&apos;s why:
        </p>

        {/* Reasons for Combining Regulations and Tech */}
        <ul className="list-inside">
          {[
            "Even if government regulations shift with new political parties coming into power, new technology will always remain.",
            "Regulations can speed up the use of new technology, which can lower costs and make it easier for global deployment.",
            "Innovation can drive down the cost of technology, leading to its widespread adoption as a global requirement.",
            "Cheaper technology can be used all over the world, but some regulations cannot be applied everywhere. (For instance, telling a small country in Central America or the Caribbean to halt oil exploration is not viable, as this activity contributes significantly to the country&apos;s economic growth.)",
          ].map((text, index) => (
            <li key={index} className="pl-4 mb-2 relative text-sm md:text-base">
              <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
              {text}
            </li>
          ))}
        </ul>

        {/* Conclusion Paragraph */}
        <p className="mt-4 text-sm md:text-base">
          Reflecting on these challenges, I have felt a strong personal drive to
          take action. Experiencing the direct impacts of climate change,
          especially through prolonged heat waves in Belize, has made me bullish
          about diving into climate tech. As a result, I have been actively
          hacking and researching on side projects. Among these, the most
          promising idea is an AI tool that transforms ESG data into actionable
          insights. The aim is to empower individuals and companies to collect
          and analyze their ESG data, enabling data-driven decisions for a
          cleaner, better future. If you are interested, feel free to sign up
          for the waitlist!!
        </p>
      </div>
    </div>
  );
}
