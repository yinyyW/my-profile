import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data/idx";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-between mx-auto sm:px-10 px-5" >
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
      </div>
    </main>
  )
}
