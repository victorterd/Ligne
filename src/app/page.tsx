import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <ProjectsShowcase />
      <CtaBanner />
    </>
  );
}
