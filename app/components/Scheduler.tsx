import Link from "next/link"
import Collapsible from "./Collapsible"

export default function Scheduler() {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-primary dark:text-primaryDark text-3xl">Scheduler</h4>
      <div className="flex flex-wrap gap-x-2 gap-y-0 items-center text-secondary dark:text-secondaryDark text-lg">
        <p>Jan. 2023 - Feb. 2023</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Personal Project</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <Link href="https://github.com/sashase/schedule-app">Code</Link>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <Link href="https://scheduler.semenchuk.cc">Live Preview</Link>
      </div>
      <div>
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          I created a web app that allows users to easily check college
          schedules. The app parses data from original Excel tables and stores
          it in a cloud-based Firebase database, presenting the information in a
          convenient and user-friendly format. This tool has proven highly
          beneficial to my classmates, offering a straightforward solution for
          quickly accessing and reviewing college schedules.
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Technologies used: JavaScript, NextJS, Node.js, Firebase.
        </p>
      </div>
      <Collapsible
        title="Preview"
        images={[
          "/scheduler/scheduler-home.png",
          "/scheduler/scheduler-modal.png",
          "/scheduler/scheduler-schedule.png",
          "/scheduler/scheduler-schedule-dark.png"
        ]}
      />
    </div>
  )
}
