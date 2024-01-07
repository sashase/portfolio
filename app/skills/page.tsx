import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills | Oleksandr Semenchuk"
}

export default function Skills() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 mx-auto">
      <h3 className="font-medium text-2xl md:text-4xl text-primary dark:text-primaryDark text-left animate-float-in">
        I believe in following industry best practices and staying updated with
        the latest trends and technologies.
      </h3>
      <div className="flex flex-col gap-10 text-xl text-secondary dark:text-secondaryDark">
        <div className="flex flex-col gap-2.5">
          <p className="animate-float-in">
            I'm most at ease with the following tools, and technologies:
          </p>
          <div className="grid grid-cols-3 animate-float-in">
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-medium text-primary dark:text-primaryDark">
                Frontend:
              </h5>
              <ul className="text-base md:text-lg">
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>TailwindCSS</li>
                <li>MaterialUI</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-medium text-primary dark:text-primaryDark">
                Backend:
              </h5>
              <ul className="text-base md:text-lg">
                <li>Node.js</li>
                <li>NestJS</li>
                <li>Prisma</li>
                <li>TypeORM</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-medium text-primary dark:text-primaryDark">
                Core:
              </h5>
              <ul className="text-base md:text-lg">
                <li>TypeScript</li>
                <li>Jest</li>
                <li>AWS</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="animate-float-in">
          I'm good with GitHub for handling code and Jira for managing tasks in
          software projects. I can set up repositories, manage branches, and
          facilitate teamwork on GitHub. In Jira, I handle project setup, task
          management, and team communication.
        </p>
      </div>
    </main>
  )
}
