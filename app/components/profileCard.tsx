import Image from "next/image";

export default function ProfileCard(){
    return(
        <div className="flex font-mono text-sm md:text-base">
              <div className="flex-1">        
                <div>
                  <span className="text-blue-400">const</span> <span className="text-yellow-300">Profil</span> <span className="text-white">=</span> <span className="text-purple-400">{"{"}</span>
                </div>
                <div className="pl-4 md:pl-8 border-l-2 border-gray-700 ml-2 mt-2 mb-2 space-y-4">
                  <div className="bg-[#2d2d2d]/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all shadow-xl group cursor-default">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-blue-300">myImage:</span>
                        <div className="relative group-hover:scale-105 transition-transform duration-300">
                            <span className="text-purple-400 absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">{"("}</span>
                            <Image
                                src="/profile.png"
                                alt="Ökkeş Enes Kaymaz"
                                width={80}
                                height={80}
                                className="rounded-full border-2 border-yellow-300"
                            />
                            <span className="text-purple-400 absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">{"),"}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p>
                            <span className="text-blue-300">adSoyad:</span> <span className="text-orange-300">&quot;Ökkeş Enes Kaymaz&quot;,</span>,
                        </p>
                        <p>
                            <span className="text-blue-300">unvan:</span> <span className="text-orange-300">&quot;Full Stack Developer&quot;,</span>,
                        </p>
                        <p>
                            <span className="text-blue-300">stack:</span> <span className="text-yellow-300">[&quot;JS&quot;, &quot;TS&quot;, &quot;C#&quot;, &quot;Next.js&quot;],</span>
                        </p>
                    </div>
        
                  </div>
                </div>
                <div>
                    <span className="text-purple-400">{"};"}</span>
                </div>
        
              </div>
            </div>
    )
}