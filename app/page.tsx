import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="">
      <p className="font-semibold">gilbert young jr.</p>
      <p className="text-gray-600 mt-1">engineer</p>

      <div className="mt-10 max-w-[40%]">
        <p>
          senior backend engineer with 4+ years of industry experience.
          currently transitioning into artificial intelligence & machine
          learning and a fan of building in public.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-semibold mb-3">recent projects</h1>
        <li className="text-gray-600 mt-1 list-none">
          <a
            href="https://github.com/gjyoungjr/chat_csv"
            className="no-underline hover:underline"
            target="_blank"
          >
            CSV Chat Agent — (July 2023)
          </a>
        </li>
        <li className="text-gray-600 mt-1 list-none">
          <a
            href="https://github.com/gjyoungjr/stockx_sneaker_prices"
            className="no-underline hover:underline"
            target="_blank"
          >
            Stockx Price Predictor — (July 2023){" "}
          </a>
        </li>
        <li className="text-gray-600 mt-1 list-none">
          <a
            href="https://twitter.com/iamsoleyman/status/1664663253723619331"
            className="no-underline hover:underline"
            target="_blank"
          >
            GraphixAi — (July 2023){" "}
          </a>
        </li>
        <li className="text-gray-600 mt-1 list-none">
          <a href="your-link-url-here" className="no-underline hover:underline">
            Email Agent — (July 2023){" "}
          </a>
        </li>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-semibold">articles</h1>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold mb-3">links</h1>
        <li className="text-gray-600 mt-1 list-none">
          <a
            href="https://twitter.com/gjyoungjr"
            className="no-underline hover:underline"
            target="_blank"
          >
            twitter
          </a>
        </li>
        <li className="text-gray-600 mt-1 list-none">
          <a
            href="https://www.linkedin.com/in/gjyoungjr/"
            className="no-underline hover:underline"
            target="_blank"
          >
            linkedin
          </a>
        </li>
        <li className="text-gray-600 mt-1 list-none">
          <a
            href="https://github.com/gjyoungjr"
            className="no-underline hover:underline"
            target="_blank"
          >
            github
          </a>
        </li>
        <li className="text-gray-600 mt-1 list-none">
          <a
            href="mailto:gilbertjyoungjr@gmail.com"
            className="no-underline hover:underline"
            target="_blank"
          >
            gilbertjyoungjr@gmail.com
          </a>
        </li>
      </div>

      <div className="fixed bottom-4 right-4">
        <ToggleTheme />
      </div>
    </main>
  );
}
