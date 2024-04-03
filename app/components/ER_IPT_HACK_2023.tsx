import Link from "next/link"

export default function ER_IPT_HACK_2023() {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="https://hackathon.expert/er-ipt-hack-2023-succeded/"
        className="text-primary dark:text-primaryDark text-3xl">
        Hackathon ER IPT HACK_2023
      </Link>
      <div className="flex flex-wrap gap-x-2 gap-y-0 items-center text-secondary dark:text-secondaryDark text-lg">
        <p>May. 2023</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Winner</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Hackathon</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <Link href="files/hackathon-certificate.pdf">Certificate</Link>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <Link href="https://github.com/sashase/it-outstaff-jobs">Code</Link>
      </div>
      <div>
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          I participated in a hackathon centered around AI and developed a
          robust solution for analyzing themed Telegram chats, focusing on the
          IT outstaff labor market using the Telegram API. Employing the ChatGPT
          API, I efficiently parsed, analyzed, and sorted messages to generate
          structured statistics. This specialized solution highlighted the
          practical application of advanced technologies, offering valuable
          insights into labor market trends. The project showcased the potential
          of combining Telegram and ChatGPT APIs for insightful data analysis,
          particularly beneficial for understanding and navigating the dynamics
          of the IT outstaff labor market.
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Technologies used: Python, FastAPI, TypeScript, NextJS, MySQL,
          Telegram, GPT-3.5-Turbo.
        </p>
      </div>
    </div>
  )
}
