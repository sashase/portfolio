import Link from "next/link"
import Collapsible from "./Collapsible"
import Dropdown from "./Dropdown"

export default function Kinomia() {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-primary dark:text-primaryDark text-3xl">Kinomia</h4>
      <div className="flex flex-wrap gap-x-2 gap-y-0 items-center text-secondary dark:text-secondaryDark text-lg">
        <p>Oct. 2023 - Present</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Personal Project</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <Dropdown title="Code">
          <Link href="https://github.com/sashase/kinomia-backend">Backend</Link>
          <Link href="https://github.com/sashase/kinomia-frontend">
            Frontend
          </Link>
        </Dropdown>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <Link href="https://kinomia.semenchuk.cc">Live Preview</Link>
      </div>
      <div>
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Kinomia is a web app in development for planning movie nights. The
          backend utilizes NestJS and PostgreSQL, and for the frontend, Vue.js
          with Sass is used. The app efficiently fetches showtimes and cinema
          details either through scraping directly from different cinemas or by
          consuming their API. Other movie details, including the cast,
          overviews, and user reviews, are sourced from a third-party movie API.
          Kinomia is designed for smooth development and runs efficiently with
          Docker. This project simplifies finding movies by consolidating all
          essential information in one place. Additionally, Redis is implemented
          for backend caching, further optimizing performance. Some additional
          functionalities are coming shortly, enhancing the movie planning
          experience.
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Technologies used: TypeScript, Vue.js, NestJS, Sass, PostgreSQL,
          Redis, Docker, Jest.
        </p>
      </div>
      <Collapsible
        title="Preview"
        images={["/kinomia/kinomia-movies.png", "/kinomia/kinomia-digest.png"]}
      />
    </div>
  )
}
