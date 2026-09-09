import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen">
      <About />
      <TechStack />
      <Projects limit={4} showCardImage={false} />
      <Experience />
    </main>
  );
}
