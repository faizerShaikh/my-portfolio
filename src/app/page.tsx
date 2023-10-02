import { Skills } from "@/components/skills";
import { AboutMe, Experiance, HeroSection, Projects } from "../components";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experiance />
      <Projects />
      <Skills />
    </div>
  );
}
