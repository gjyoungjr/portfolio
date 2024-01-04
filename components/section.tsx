import React from "react";

export interface SectionProps {
  title: string;
  items: Array<{
    title: string;
    url: string;
  }>;
}
export default function Section({ title, items }: SectionProps) {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-3">{title}</h1>
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 mt-1 list-none">
          <a
            href={item.url.includes("@") ? `mailto:${item.url}` : item.url}
            className="no-underline hover:underline"
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
}
