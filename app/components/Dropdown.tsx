"use client"

import { useState } from "react"

interface Props {
  title: string
  children: React.ReactNode
}

export default function Dropdown(props: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="text-secondary dark:text-secondaryDark text-lg relative">
      <button
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        {props.title}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col gap-1 p-2 bg-surface dark:bg-surfacePrimaryDark rounded-lg text-primary dark:text-primaryDark">
          {props.children}
        </div>
      )}
    </div>
  )
}
