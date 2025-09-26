import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-between mx-auto sm:px-10 px-5" >
      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
      </div>
    </main>
  )
}
