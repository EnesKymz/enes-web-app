import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../data/portfolioData";

export default function ExperienceCard() {
  return (
    <div className="flex font-mono text-xs sm:text-sm md:text-base w-full">
      <div className="flex-1">
        <div>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-yellow-300">DeneyimlerimVeProjelerim</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-purple-400">{"{"}</span>
        </div>

        <div className="pl-3 sm:pl-6 md:pl-8 border-l-2 border-gray-700 ml-2 mt-2 mb-2 space-y-4">
          <div className="text-blue-300">
            projeler: <span className="text-purple-400">{"["}</span>
          </div>

          <div className="pl-2 sm:pl-4 space-y-4">
            {PROJECTS.map((item) => (
              <div
                key={item.id}
                className="bg-[#2d2d2d]/60 p-4 rounded-xl border border-gray-700/80 hover:border-indigo-500/60 hover:bg-[#2d2d2d] transition-all shadow-xl group cursor-default relative"
              >
                <span className="text-purple-400 font-bold">{"{"}</span>
                <div className="pl-4 sm:pl-6 space-y-1.5 my-2">
                  {item.imageUrl && (
                    <div className="flex items-center gap-3 my-1">
                      <span className="text-blue-300 font-mono">image:</span>
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-gray-600">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    </div>
                  )}

                  <p>
                    <span className="text-blue-300">title:</span>{" "}
                    <span className="text-orange-300">&quot;{item.title}&quot;,</span>
                  </p>
                  <p>
                    <span className="text-blue-300">role:</span>{" "}
                    <span className="text-emerald-300">&quot;{item.role}&quot;,</span>
                  </p>
                  <p>
                    <span className="text-blue-300">category:</span>{" "}
                    <span className="text-sky-300">&quot;{item.category}&quot;,</span>
                  </p>
                  <p>
                    <span className="text-blue-300">techStack:</span>{" "}
                    <span className="text-yellow-300">
                      [{item.tags.map((t) => `"${t}"`).join(", ")}],
                    </span>
                  </p>
                  <p>
                    <span className="text-blue-300">status:</span>{" "}
                    <span className="text-green-400">&quot;{item.status}&quot;,</span>
                  </p>
                  {item.liveUrl && (
                    <p>
                      <span className="text-blue-300">liveUrl:</span>{" "}
                      <Link
                        target="_blank"
                        href={item.liveUrl}
                        className="text-cyan-300 underline hover:text-cyan-200"
                      >
                        &quot;{item.liveUrl}&quot;
                      </Link>
                      ,
                    </p>
                  )}
                  {item.githubUrl && (
                    <p>
                      <span className="text-blue-300">github:</span>{" "}
                      <Link
                        target="_blank"
                        href={item.githubUrl}
                        className="text-purple-300 underline hover:text-purple-200"
                      >
                        &quot;{item.githubUrl}&quot;
                      </Link>
                      ,
                    </p>
                  )}
                </div>
                <span className="text-purple-400 font-bold">{"},"}</span>
              </div>
            ))}
          </div>

          <div className="text-purple-400">{"],"}</div>
        </div>

        <div>
          <span className="text-purple-400">{"};"}</span>
        </div>
      </div>
    </div>
  );
}