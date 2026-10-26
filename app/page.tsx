"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import GitHubSection from "./components/GitHubSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CodeEditorView from "./components/CodeEditorView";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
    const [viewMode, setViewMode] = useState<"modern" | "ide">("modern");

    return (
        <div className="relative min-h-screen bg-[#080b11] text-gray-100 selection:bg-indigo-500/30 selection:text-indigo-200">
            {/* Global Navbar with View Switcher */}
            <Navbar viewMode={viewMode} setViewMode={setViewMode} />

            {/* Main Content dependent on chosen mode */}
            {viewMode === "modern" ? (
                <main className="space-y-4">
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <GitHubSection />
                    <ContactSection />
                </main>
            ) : (
                <main>
                    <CodeEditorView onBackToModern={() => setViewMode("modern")} />
                </main>
            )}

            {/* Floating WhatsApp Quick Contact Button */}
            <WhatsAppButton />

            {/* Footer */}
            <Footer />
        </div>
    );
}
