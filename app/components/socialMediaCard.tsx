"use client"
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SocialMediaCard() {
  
  const socialLinks = [
    {
      platform: "github",
      username: "@okkesenes",
      url: "https://github.com/EnesKymz", 
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      platform: "linkedin",
      username: "Ökkeş Enes Kaymaz",
      url: "https://www.linkedin.com/in/okkes-enes",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      platform: "email",
      username: "iletisim@okkes.com",
      url: "okkeseneskaymaz@proton.me",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3l.03-8.58-10.5 6.3a1 1 0 01-1.06 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.8a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      )
    }
  ];
  const [isCopied, setIsCopied] = useState(false);
  function handleCopy(text:string){
    navigator.clipboard.writeText(text);
    toast.success("Email kopyalandı")
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  return (
    <div className="font-mono text-sm md:text-base w-full">
      <div className="flex-1">
        <div>
          <span className="text-blue-400">const</span> <span className="text-yellow-300">Iletisim</span> <span className="text-white">=</span> <span className="text-purple-400">{"{"}</span>
        </div>

        <div className="pl-4 md:pl-8 border-l-2 border-gray-700 ml-2 mt-2 mb-2 space-y-4">
          
          {socialLinks.map((item, index) => (
            <div key={index} className="group flex items-center gap-3 hover:bg-[#2d2d2d]/50 p-1 -ml-1 rounded transition-colors">
              <div className="flex items-center gap-2 min-w-[100px] md:min-w-[120px]">
                 <span className="text-gray-500 group-hover:text-white transition-colors">
                    {item.icon}
                 </span>
                 <span className="text-blue-300">{item.platform}:</span>
              </div>
              {item.platform==="email"? (
               <button 
                onClick={() => handleCopy(item.url)}
                className="text-orange-300 hover:text-orange-200 truncate cursor-pointer text-left hover:underline decoration-dashed decoration-gray-500"
                >
                &quot;{item.url}&quot;
                </button>
                   ) : (
                <Link 
                target="_blank"
                href={item.url}
                className="text-orange-300 hover:underline hover:text-orange-200 truncate flex-1"
              >
                &quot;{item.url}&quot;
              </Link>
              )
              }
              <span className="text-purple-400">,</span>
              <span className={`text-xs transition-opacity duration-300 hidden md:block
                    ${item.platform==="email" && isCopied 
                        ? "opacity-100 text-green-400 font-bold"
                        : "opacity-0 group-hover:opacity-100 text-gray-500" 
                    }
                `}>
                  {item.platform==="email" 
                    ? (isCopied ? "// Kopyalandı! ✅" : "// Kopyalamak için tıkla") 
                    : "// Beni Takip Et"
                  }
                </span>
              
            </div>
          ))}

        </div>
        <div>
          <span className="text-purple-400">{"};"}</span>
        </div>

      </div>
    </div>
  );
}