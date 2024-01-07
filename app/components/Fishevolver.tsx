export default function Fishevolver() {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-primary dark:text-primaryDark text-3xl">
        Fish Evolver
      </h4>
      <div className="flex flex-wrap gap-x-2 gap-y-0 items-center text-secondary dark:text-secondaryDark text-lg">
        <p>Jun. 2023 - Sep. 2023</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Full Stack Developer</p>
        <div className="w-px h-5 rounded-sm bg-secondary dark:bg-secondaryDark opacity-50"></div>
        <p>Freelance / Startup</p>
      </div>
      <div>
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          During my time at a game startup, I contributed to frontend
          development by designing an intuitive user dashboard. I also played a
          role in the backend, implementing a secure user authentication service
          using Google and Facebook OAuth. Additionally, I integrated Stripe
          payments to facilitate transactions, supporting the startup's
          monetization strategy. These efforts aimed to establish a functional
          and user-friendly environment, contributing to the startup's
          competitiveness in the gaming domain.
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <p className="text-lg md:text-xl text-secondary dark:text-secondaryDark">
          Technologies used: TypeScript, Vue.js, NestJS, Bootstrap, PostgreSQL,
          OAuth 2.0, Stripe, Jest.
        </p>
      </div>
    </div>
  )
}
