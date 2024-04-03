import Link from "next/link"
import Collapsible from "./Collapsible"

export default function IASA_Champ_24() {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="http://champ.iasa.kpi.ua"
        className="text-primary dark:text-primaryDark text-3xl">
        Hackathon IASA Champ '24
      </Link>
      <div className="flex flex-wrap gap-x-2 gap-y-0 items-center text-secondary dark:text-secondaryDark text-lg">
        <p>Jan. 2024 - Feb. 2024</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Finalist</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Hackathon</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <Link href="https://github.com/sashase/nlp-backend">Code</Link>
      </div>
      <div>
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          My role in the hackathon project was to develop the backend for our
          article analysis dashboard. Our team created a tool that collects
          articles from different sources, uses NLP to understand their content,
          and displays insights through an easy-to-use dashboard. Users can
          quickly navigate through tagged articles and grasp their mood, making
          it easier to process a large amount of information.
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Technologies used: TypeScript, NestJS, PostgreSQL, GPT-3.5-Turbo,
          Docker, Jest.
        </p>
      </div>
      <Collapsible
        title="Preview"
        images={["/IASA_Champ_24/IASA_Champ_24-home.png"]}
        cols={1}
      />
    </div>
  )
}
