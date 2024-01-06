"use client"

import { useState } from "react"
import ContactModal from "./ContactModal"

export default function ContactMe() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <button
        className="bg-surface dark:bg-surfacePrimaryDark text-primary dark:text-primaryDark py-3 px-7 font-medium text-2xl rounded-full self-center w-fit mx-auto mt-10 transition-all animate-float-in-delay-1 opacity-0"
        onClick={() => setIsModalOpen(true)}>
        Get in touch
      </button>
      {isModalOpen && <ContactModal setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
