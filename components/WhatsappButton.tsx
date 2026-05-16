"use client"

import { FaWhatsapp } from "react-icons/fa"

export function WhatsappButton() {
  const phone = "554999568072"

  const message = encodeURIComponent(
    "Olá, vim pelo site e gostaria de saber mais."
  )

  const handleClick = () => {
    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    )
  }

  return (
    <button
      onClick={handleClick}
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-lg
        transition
        duration-300
      "
    >
      <FaWhatsapp size={28} />
    </button>
  )
}