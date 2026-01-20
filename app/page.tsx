import ExperienceCard from "./components/experienceCard";
import ProfileCard from "./components/profileCard";
import SocialMediaCard from "./components/socialMediaCard";

export default async function Home() {
  const lineNumbers = Array.from({ length: 63 }, (_, i) => i + 1);
  return (  
   <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-5xl bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-800 ring-1 ring-white/10">
        <div className="bg-[#252526] px-4 py-3  flex items-center border-b border-gray-800 select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <div className="flex-1 text-center pr-10">
            <span className="text-gray-400 text-xs font-mono bg-[#1e1e1e] px-3 py-1 rounded-md border border-gray-700">
              portfolio.tsx
            </span>
          </div>
        </div>

        <div className="flex relative ">
          <div className="w-12 md:w-16  bg-[#1e1e1e] text-gray-600 text-right pr-3 pt-6 select-none font-mono text-sm md:text-base border-r border-gray-800/50">
            {lineNumbers.map((num) => (
              <div key={num} className="leading-7 opacity-50">
                {num}
              </div>
            ))}
          </div>
          <div className="flex-1  p-6 md:p-10 font-mono text-sm md:text-base overflow-y-auto scrollbar-hide">
            <div className="flex flex-col space-y-12 ">
              <div className="w-full transition-transform duration-500 hover:translate-x-1">
                 <ProfileCard />
              </div>
              <div className="text-gray-500 italic select-none">
                {"// --- Deneyimler ve Projeler ---"}
              </div>

              <div className="w-full transition-transform duration-500 hover:translate-x-1">
                 <ExperienceCard />
              </div>
              <div className="text-gray-500 italic select-none my-4">
              {"// --- Bana Ulaşın ---"}
            </div>

            <SocialMediaCard />
              <div className="flex items-center gap-2 mt-4">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~/enes-portfolio</span>
                <span className="text-gray-400">git:(</span>
                <span className="text-red-400">main</span>
                <span className="text-gray-400">)</span>
                <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
