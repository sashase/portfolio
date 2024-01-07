import Link from "next/link"

export default function VaccUkraine() {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="http://vacc-ua.org/"
        className="text-primary dark:text-primaryDark text-3xl">
        vACC Ukraine
      </Link>
      <div className="flex flex-wrap gap-x-2 gap-y-0 items-center text-secondary dark:text-secondaryDark text-lg">
        <p>Aug. 2022 - Present</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Technical Manager</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Entertainment Project</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Voluntary Work</p>
      </div>
      <div>
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          I volunteered to help keep the IT infrastructure updated for the local
          Ukrainian division, making sure things like the website, training ATC
          portal, and info repositories stayed in good shape. This played a key
          role in maintaining a reliable platform for the division, letting
          virtual aviation fans worldwide enjoy realistic flight simulations and
          air traffic control activities.
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Technologies used: PHP, Python, Flask, MySQL, Linux.
        </p>
      </div>
    </div>
  )
}
