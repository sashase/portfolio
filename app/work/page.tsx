import type { Metadata } from "next"
import Kinomia from "../components/Kinomia"
import Fishevolver from "../components/Fishevolver"
import Infosoft from "../components/Infosoft"
import Hackathon from "../components/Hackathon"
import Scheduler from "../components/Scheduler"
import VaccUkraine from "../components/VaccUkraine"

export const metadata: Metadata = {
  title: "Work | Oleksandr Semenchuk"
}

export default function Work() {
  return (
    <main className="flex flex-col gap-10 md:gap-20">
      <h3 className="font-medium text-4xl text-primary dark:text-primaryDark text-left animate-float-in">
        Here are several projects I have developed.
      </h3>
      <section className="flex flex-col gap-10 w-full animate-float-in">
        <Kinomia />
        <Fishevolver />
        <Infosoft />
        <Hackathon />
        <Scheduler />
        <VaccUkraine />
      </section>
    </main>
  )
}
