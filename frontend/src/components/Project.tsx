import { useState } from "react";
import ProjectCard from "./ProjectCard";
interface Project {
  link: string;
  githubLink?: string;
  image: string;
  title: string;
  short: string;
  long: string;
  tech: string;
}
interface ProjectProps {
  info: {
    description: string;
    category: string[];
    MERN: Project[];
    PHP: Project[];
    WordPress: Project[];
  };
}
export default function Project({ info }: ProjectProps) {
  const [activeCategory, setActiveCategory] = useState<
    "MERN" | "PHP" | "WordPress"
  >("MERN");
  return (
    <section
      id="projects"
      className="flex flex-col items-center-safe gap-8 py-24 px-6 min-h-screen bg-linear-to-br from-black via-gray-900 to-black "
    >
      <div className="flex flex-col w-full max-w-6xl gap-4">
        <h2 className="max-w-full text-3xl md:text-4xl font-medium text-center">
          Projects
        </h2>
        <div className="max-w-full min-[480px]:hidden">
          <span className="text-gray-400 text-center lg:text-xl">
            {info.description}
          </span>
        </div>
        <div className="max-w-full hidden min-[480px]:block">
          <span className="text-gray-400 text-center lg:text-xl">
            {info.description}
          </span>
        </div>
        <div className="max-w-full flex flex-wrap justify-center gap-4">
          {info.category.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-full flex items-center gap-2 flex-nowrap border transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-600 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {cat}
              <span className="flex items-center justify-center overflow-hidden rounded-full bg-white font-bold text-blue-600 aspect-square p-0.5 min-w-5 max-w-fit min-h-5 max-h-fit">
                {info[cat]?.length}
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-nowrap w-full self-center-safe justify-center-safe overflow-x-auto py-4 noscrollbar gap-4">
          {info[activeCategory].map((proj, idx) => (
            <ProjectCard  key={idx} proj={proj}/>
          ))}
        </div>
      </div>
    </section>
  );
}
