import { useEffect, useRef, useState } from "react"

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal(props: Props) {
  const popupRef = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({})
  const [loading, setLoading] = useState<boolean>(false)

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const newErrors: { [key: string]: boolean } = {}

    if (!name) {
      newErrors.name = true
    }

    if (!email) {
      newErrors.email = true
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        newErrors.email = true
      }
    }

    if (!subject) {
      newErrors.subject = true
    }

    if (!message) {
      newErrors.message = true
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some((value) => value)) {
      return setLoading(false)
    }

    const response: Response = await fetch("/api/contact", {
      method: "post",
      body: formData
    })

    setLoading(false)
    if (response.status !== 200) return setMessage("Something went wrong.")
    props.setIsModalOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = ({ target }: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(target as Node)) {
        props.setIsModalOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [popupRef])

  return (
    <div className="fixed inset-0 min-h-screen bg-black bg-opacity-75 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="w-5/6 md:w-2/3 lg:w-1/2 bg-background dark:bg-surfaceSecondaryDark px-7 py-8 rounded-3xl flex flex-col gap-8 h-5/6  overflow-auto">
        <h5 className="text-primary dark:text-primaryDark text-4xl md:text-5xl">
          Contact me!
        </h5>
        <form
          className="flex flex-col gap-4 text-primary dark:text-primaryDark items-start"
          onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="form-name" className="text-xl md:text-2xl">
              What should I call you?
            </label>
            <input
              id="form-name"
              name="name"
              type="text"
              className="bg-surface dark:bg-surfacePrimaryDark w-full md:w-2/5 py-1 px-2 rounded-lg text-base lg:text-lg"
            />
            {errors.name && (
              <p className="text-error dark:text-errorDark">
                Please enter your name.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="form-email" className="text-xl lg:text-2xl">
              Where should I drop you an email?
            </label>
            <input
              id="form-email"
              name="email"
              type="email"
              className="bg-surface dark:bg-surfacePrimaryDark w-full md:w-2/5 py-1 px-2 rounded-lg text-base lg:text-lg"
            />
            {errors.email && (
              <p className="text-error dark:text-errorDark">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="form-subject" className="text-xl lg:text-2xl">
              What's the topic?
            </label>
            <input
              id="form-subject"
              name="subject"
              type="subject"
              className="bg-surface dark:bg-surfacePrimaryDark w-full md:w-2/5 py-1 px-2 rounded-lg text-base lg:text-lg"
            />
            {errors.subject && (
              <p className="text-error dark:text-errorDark">
                Please enter the subject.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="form-message" className="text-xl lg:text-2xl">
              Let's hear your thoughts
            </label>
            <textarea
              id="form-message"
              name="message"
              rows={10}
              className="bg-surface dark:bg-surfacePrimaryDark py-1 px-2 rounded-lg resize-none text-base lg:text-lg"
            />
            {errors.message && (
              <p className="text-error dark:text-errorDark">
                Please enter your message.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center rounded-full bg-surface dark:bg-surfacePrimaryDark py-3 px-7 text-xl lg:text-2xl font-medium"
            disabled={loading}>
            {loading ? (
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            ) : (
              "Submit!"
            )}
          </button>
          {message && (
            <p className="text-error dark:text-errorDark">{message}</p>
          )}
        </form>
      </div>
    </div>
  )
}
