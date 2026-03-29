/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReadmeViewer from "./ReadmeViewer";
import { fetchReadme } from "../services/github";

type Props = {
  repo: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ReadmeModal({ repo, isOpen, onClose }: Props) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const temp = repo?.split("/");
  useEffect(() => {
    if (!isOpen || !repo) return;
    const load = async () => {
      setLoading(true);
      if (!temp || temp.length == 0) return;
      try {
        const md = await fetchReadme(
          temp[temp.length - 2],
          temp[temp.length - 1],
        );
        setContent(md);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    load();
  }, [isOpen, repo]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[95%] h-[92%] bg-[#0d1117] rounded-2xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl">
        {/* 🔥 HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#161b22]">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {repo?.split("/")[temp ? temp.length - 1 : 0]}
            </h2>
            <p className="text-xs text-gray-400">README.md</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${repo}`}
              target="_blank"
              className="text-sm text-blue-400 hover:underline"
            >
              View on GitHub
            </a>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="flex justify-center-safe overflow-y-auto px-4 py-8">
          {loading ? (
            <div className="animate-pulse space-y-4 w-full">
              <div className="h-6 bg-gray-700 rounded w-1/3" />
              <div className="h-4 bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-700 rounded w-5/6" />
            </div>
          ) : (
            <div className="w-full lg:w-[75%] xl:w-1/2">
              <ReadmeViewer content={content} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
