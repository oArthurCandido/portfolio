import ProjectsSession from "@/sections/ProjectsSession";
import LeftFLuidLine from "@/components/shapes/LeftFLuidLine";
import ThreeZigZag from "@/components/shapes/ThreeZigZag";
import TopSection from "@/sections/TopSection";

export default function Home() {
  return (
    <div>
      <TopSection />
      <ProjectsSession />
      <section id="sectionTest" className="h-[100vh] bg-black snap-start">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <p className="my-6 text-rebel-pink text-4xl lg:text-6xl font-extraextrabold text-center">
              Arthur Candido
            </p>
            <p className="my-6 text-white text-4xl lg:text-6xl font-extraextrabold text-center">
              Desenvolvedor WEB
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
