import Link from "next/link"

export default function Infosoft() {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="https://infosoft.ua"
        className="text-primary dark:text-primaryDark text-3xl">
        Infosoft Global Ltd.
      </Link>
      <div className="flex flex-wrap gap-x-2 gap-y-0 items-center text-secondary dark:text-secondaryDark text-lg">
        <p>May. 2023 - Aug. 2023</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Intern Full Stack Developer</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Internship</p>
      </div>
      <div>
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          During my internship as a full-stack developer, I concentrated on
          acquiring practical experience and enhancing my skills. I developed
          backend solutions using PHP and Laravel, and concurrently worked on
          the frontend using Vue.js and TypeScript. Throughout this period, I
          actively sought and received constructive code reviews and advice from
          my mentor, facilitating a continuous learning process. The internship
          served as a dedicated learning opportunity, providing a structured
          environment for applying theoretical knowledge and refining my
          proficiency in both backend and frontend technologies.
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Technologies used: PHP, Laravel, TypeScript, Vue.js, MySQL.
        </p>
      </div>
    </div>
  )
}
