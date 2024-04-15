import React from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import moment from "moment";

export default function Blog() {
  return (
    <div className="pl-60 pr-60 pt-20  pb-20">
      <div className="fixed top-10 left-10">
        <Link href="/">
          <ArrowLeftIcon className="w-10 h-5" />
        </Link>
      </div>
      <h1 className="text-6xl font-extrabold">
        Why I'm Pivoting to Climate Tech
      </h1>

      <p className="text-muted-foreground text-sm mt-5 text-left">
        {moment("2024-04-15").format("MMMM DD, YYYY")}
      </p>

      <div className=" mt-5">
        <p>
          For the past 3 to 5 years, I've worked in different industries as a
          software engineer, including media, hospitality, and consumer goods.
          However, I've never felt like I'm using my technical skills to truly
          make a difference or improve the world. My curiosity has led me to
          discover a new passion: finding sustainable solutions to address
          climate change and reduce environmental impact. I believe innovation
          in this industry is lacking for a few key reasons
        </p>
      </div>
      <div>
        <p className=" mt-5 mb-4">
          I believe innovation in this industry is lacking for a few key
          reasons:
        </p>
        <ul className=" list-inside">
          <li className="pl-4 mb-2 relative">
            <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
            Government policies and mandates often dictate innovation, which can
            stifle progress.
          </li>
          <li className="pl-4 mb-2 relative">
            <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
            Many believe it's impossible to achieve negative or net-zero
            emissions before 2050, so they don't bother trying to solve the
            problem.
          </li>
        </ul>
        <p className="mt-4 mb-4">
          Many people don't realize how serious climate change is, even if we
          only achieve a 20% solution or if only a few countries cut emissions.
          To fully solve climate change, we need both government regulations and
          new technology to work together. Here's why:
        </p>
        <ul className="list-inside">
          <li className="pl-4 mb-2 relative">
            <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
            Even if government regulations shift with new political parties
            coming into power, new technology will always remain.
          </li>
          <li className="pl-4 mb-2 relative">
            <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
            Regulations can speed up the use of new technology, which can lower
            costs and make it easier for global deployment
          </li>
          <li className="pl-4 mb-2 relative">
            <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
            Innovation can drive down the cost of technology, leading to its
            widespread adoption as a global requirement.
          </li>
          <li className="pl-4 mb-2 relative">
            <div className="absolute left-0 top-0 -ml-1 mt-3 w-3 h-0.5 bg-primary" />
            Cheaper technology can be used all over the world, but some
            regulations can't be applied everywhere. <br />
            (For instance, telling a small country in Central America or the
            Caribbean to halt oil exploration isn’t viable, as this activity
            contributes significantly to the country's economic growth.)
          </li>
        </ul>
        <p className="mt-4">
          Reflecting on these challenges, I've felt a strong personal drive to
          take action. Experiencing the direct impacts of climate change,
          especially through prolonged heat waves in Belize, has made me bullish
          about diving into climate tech. As a result, I've been actively
          hacking and researching on side projects. Among these, the most
          promising idea is an AI tool that transforms ESG data into actionable
          insights. The aim is to empower individuals and companies to collect
          and analyze their ESG data, enabling data-driven decisions for a
          cleaner, better future. If you're interested, feel free to sign up for
          the waitlist!!
        </p>
      </div>
    </div>
  );
}
