// components
import Navigation from "@/components/layouts/Navigation";
import Timetable from "@/components/data/Timetable";

function Home() {
  return (
    <>
      <header className="flex flex-col gap-3">
        <section className="flex items-center justify-between pt-2 pb-6">
          <h1 className="text-xl font-semibold">
            SPŠE Rozvrh
          </h1>
          <Navigation />
        </section>
      </header>
      <main>
        <section>
          <Timetable />
        </section>
      </main>
    </>
  )
}

export default Home;
