import { useState } from "react";
import ReadmeModal from "./ReadmeModal";
interface Project {
  link: string;
  githubLink?: string;
  image: string;
  title: string;
  short: string;
  long: string;
  tech: string;
}
interface CardProps {
  proj: Project;
}
export default function ProjectCard({ proj }: CardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 flex flex-col border min-w-60 max-w-60 md:min-w-100 md:max-w-100 border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-900 transition">
      <a href={proj.link} target="_blank">
        <img
          src={`${import.meta.env.VITE_FRONTEND_HOST}/${proj.image}`}
          className="rounded-lg mb-4"
        />
      </a>

      <h3 className="text-xl font-semibold mb-2 line-clamp-1">{proj.title}</h3>
      <div className="flex flex-col grow">
        <p className="text-gray-400 text-sm mb-3 line-clamp-3">{proj.short}</p>

        <p className="text-xs text-gray-500 mb-4 line-clamp-2">
          <strong>Tech:</strong> {proj.tech}
        </p>
      </div>

      <p
        className="text-blue-500 text-sm hover:underline cursor-pointer"
        onClick={() => {
          if (proj.githubLink) {
            setOpen(true);
          }
        }}
      >
        Read More →
      </p>
      {proj?.githubLink ? (
        <ReadmeModal
          repo={proj.githubLink || null}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
