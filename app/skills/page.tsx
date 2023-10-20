import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills | Oleksandr Semenchuk"
}

export default function Skills() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 md:w-4/5 mx-auto my-16 md:my-32">
      <span className="flex flex-col gap-3 font-medium text-2xl md:text-4xl text-primary text-center animate-float-in">
        I believe in following industry best practices and staying updated with
        the latest trends and technologies.
      </span>
      <div className="flex flex-col gap-5 text-xl text-secondary ">
        <span className="animate-float-in">
          I'm most at ease with the following tools, and technologies:
        </span>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-12 p-5 md:p-10 items-center animate-float-in">
          <img src="/svg/html.svg" alt="HTML" />
          <img src="/svg/css.svg" alt="CSS" />
          <img src="/svg/ts.svg" alt="TypeScript" />
          <img src="/svg/node.svg" alt="NodeJS" />
          <img src="/svg/react.svg" alt="React.js" />
          <img src="/svg/vue.svg" alt="Vue.js" />
          <img src="/svg/nest.svg" alt="NestJS" />
          <img src="/svg/postgres.svg" alt="PostgreSQL" />
          <img src="/svg/mongo.svg" alt="MongoDB" />
          <img src="/svg/jest.svg" alt="Jest" />
          <img src="/svg/aws.svg" alt="AWS" />
          <img src="/svg/linux.svg" alt="Linux" />
        </div>
        <div className="flex flex-col gap-2 animate-float-in">
          <span>
            I recognize the critical importance of Git in enabling seamless
            teamwork.
          </span>
          <span>
            Git serves as the foundation for version control and collaborative
            coding, guaranteeing a smooth and productive development workflow.
          </span>
        </div>
        <img
          src="/svg/git.svg"
          alt="Git"
          className="w-2/3 md:w-2/6 my-6 mx-auto animate-float-in"
        />
      </div>
    </main>
  )
}
