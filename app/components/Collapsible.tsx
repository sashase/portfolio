"use client"

import { useState } from "react"

interface Props {
  title: string
  images: string[]
}

export default function Collapsible(props: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapsible = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        className="flex gap-2 items-center cursor-pointer mb-2"
        onClick={toggleCollapsible}>
        <button className="text-secondary dark:text-secondaryDark text-lg md:text-xl">
          {props.title}
        </button>
        {isOpen ? (
          <img
            src="/svg/caret-up.svg"
            alt="caret-up"
            className="text-secondary dark:text-secondaryDark"
          />
        ) : (
          <img
            src="/svg/caret-down.svg"
            alt="caret-down"
            className="text-secondary dark:text-secondaryDark"
          />
        )}
      </div>
      {isOpen && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 animate-float-in">
          {props.images.map((image) => {
            return (
              <img
                src={`/work${image}`}
                alt={image.split("/")[2].split(".")[0]}
                className="rounded-lg max-w-full"
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
