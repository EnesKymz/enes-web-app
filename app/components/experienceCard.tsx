import _default from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard() {
  const projects = [
    {
      id: 1,
      image:"/quantumclub.jpg",
      name: "Quantum Club",
      role: "Co-Founder",
      tech: "Blockchain Network",
      status: "Active",
      url:"https://t.me/QuantumClubBot"
    },
    {
      id: 2,
      name: "Otopark Yönetimi",
      role: "Full Stack Dev",
      tech: "Next.js & Firebase",
      status: "Active",
      url:"https://otoparkyonetim.vercel.app/"
    },
    {
      id: 3,
      name: "Bilgisayar Programciligi",
      role: "Full Stack Dev",
      tech: "Next.js & Google API",
      status: "Active",
      url:"https://bilgisayar-programciligi.vercel.app/"
    }
  ];

  return (
    <div className="flex font-mono text-sm md:text-base w-full">
      <div className="flex-1">
        <div>
          <span className="text-blue-400">const</span> <span className="text-yellow-300">Deneyimlerim</span> <span className="text-white">=</span> <span className="text-purple-400">{"{"}</span>
        </div>

        <div className="pl-4 md:pl-8 border-l-2 border-gray-700 ml-2 mt-2 mb-2 space-y-4">
          <div className="text-blue-300">
            projeler: <span className="text-purple-400">{"["}</span>
          </div>
          <div className="pl-4 space-y-4">
            {projects.map((item) => (
              <div key={item.id} className="bg-[#2d2d2d]/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-[#2d2d2d] transition-all shadow-xl group cursor-default relative">
                <span className="text-purple-400 font-bold">{"{"}</span>
                <div className="pl-6 space-y-1 my-1">
                  {item.image&& 
                  <div>
                  <span className="text-blue-300 font-bold">{"image:{"}</span>
                  <div>
                  <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt={item.name}
                  />
                  </div>
                  <span className="text-blue-300 font-bold">{"},"}</span>
                  </div>
                  }
                  <p>
                    <span className="text-blue-300">project:</span> <span className="text-orange-300">&quot;{item.name}&quot;,</span>,
                  </p>
                  <p>
                    <span className="text-blue-300">role:</span> <span className="text-orange-300">&quot;{item.role}&quot;,</span>,
                  </p>
                  <p>
                    <span className="text-blue-300">tech:</span> <span className="text-yellow-300">&quot;{item.tech}&quot;,</span>,
                  </p>
                  
                  <p>
                    <span className="text-blue-300">status:</span> <span className="text-green-400">&quot;{item.status}&quot;,</span>
                  </p>
                  <p>
                    <span className="text-blue-300">url:</span> <Link target="_blank"  href={item.url||"/"} className="text-yellow-300">&quot;{item.url}&quot;,</Link>,
                  </p>
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